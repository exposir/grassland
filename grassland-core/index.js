const axios = require("axios");
const fs = require("fs");
const base = "../grassland-vitepress/docs/";

const sidebar = [
  // {
  //   text: "互联网常用名词",
  //   link: "/互联网常用名词",
  // },
];

const readIssue = () => {
  return axios(
    "https://api.github.com/repos/vuejs/vuepress/issues?state=all&per_page=100",
    {
      params: {
        state: "all",
        per_page: 90,
      },
    }
  ).then((res) => {
    fs.writeFileSync(`${base}res.js`, JSON.stringify(res.data, null, "\t"));

    res.data.forEach((item) => {
      const newTitle = item.title.split("/").join("");
      console.log("title------", newTitle);

      fs.writeFileSync(`${base}published/` + newTitle + `.md`, item.body);
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
      editLinkText: "编辑此页",
      lastUpdated: "lastUpdate",
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

writeConfig();

// const my = {
//   my: writeConfig(),
// };

// export default my;
