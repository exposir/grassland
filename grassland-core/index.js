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

const removeFolder = (dir) => {
  let files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    let newPath = path.join(dir, files[i]);
    let stat = fs.statSync(newPath);
    stat.isDirectory() ? removeFolder(newPath) : fs.unlinkSync(newPath);
  }
  fs.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
};

const ghToken = process.env.GITHUB_TOKEN;

const repo =
  process.env.REPO ||
  `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`;

// const [ghUserName, repoSlug] = repo.split("/");

const authHeaders = ghToken
  ? {
      Authorization: `bearer ${ghToken}`,
    }
  : {};

const readIssue = () => {
  return axios(
    `https://api.github.com/repos/${repo}/issues?state=all&per_page=100`,
    {
      params: {
        state: "all",
        per_page: 10000,
      },
      headers: {
        ...authHeaders,
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
      removeFolder(`${base}`);

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
