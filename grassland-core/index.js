const fs = require("fs");
const axios = require("axios");
const base = "./docs/";
const sidebar = [];

const mkdirFolder = (dir) => {
  let paths = dir.split("/");
  for (let i = 1; i < paths.length; i++) {
    let newPath = paths.slice(0, i).join("/");
    try {
      fs.accessSync(newPath, fs.constants.R_OK);
    } catch (e) {
      fs.mkdirSync(newPath);
    }
  }
};

const readIssue = () => {
  return axios(
    "https://api.github.com/repos/exposir/grassland/issues?state=all&per_page=100",
    {
      params: {
        state: "all",
        per_page: 1000,
      },
    }
  ).then((res) => {
    const folderList = [
      // `${base}res/`,
      `${base}published/`,
      `${base}.vitepress/`,
    ];
    folderList.forEach((item) => {
      mkdirFolder(item);
    });

    // fs.writeFileSync(`${base}res.js`, JSON.stringify(res.data, null, "\t"));

    res.data.forEach((item) => {
      let newTitle = item.title;
      if (newTitle.indexOf("/") >= 0) {
        newTitle = newTitle.split("/").join(" ");
      }
      if (newTitle.indexOf("【") >= 0) {
        newTitle = newTitle.split("【").join(" ");
      }
      if (newTitle.indexOf("】") >= 0) {
        newTitle = newTitle.split("】").join(" ");
      }

      if (newTitle.indexOf(".") >= 0) {
        newTitle = newTitle.split(".").join(" ");
      }

      console.log("title------", newTitle);

      fs.writeFileSync(
        `${base}published/` + newTitle + `.md`,
        item.body ? item.body : ""
      );
      sidebar.push({
        text: newTitle,
        link: `/published/${newTitle}`,
      });
    });
  });
};

const writeConfig = async () => {
  await readIssue();
  const config = {
    title: "Exposir",
    description: "孟世博的博客",
    dest: "public",
    serviceWorker: false,
    themeConfig: {
      repo: "exposir/grassland",
      repoLabel: "Github",
      editLinks: true,
      docsDir: "docs",
      // editLinkText: "编辑此页",
      // lastUpdated: "lastUpdate",
      // nav: [
      //   {
      //     text: "Home",
      //     link: "/",
      //   },
      // ],
      sidebar: sidebar,
    },
    base: "",
  };

  fs.writeFileSync(
    `${base}.vitepress/config.js`,
    "module.exports = " + JSON.stringify(config, null, "\t")
  );
};

exports.writeConfig = writeConfig;
