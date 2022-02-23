const axios = require("axios");
const fs = require("fs");
const base = "../grassland-vitepress/docs/";

const sidebar = [
  // {
  //   text: "互联网常用名词",
  //   link: "/互联网常用名词",
  // },
  // {
  //   text: "有趣的题目",
  //   link: "/有趣的题目",
  // },
];

const readIssue = () => {
  return axios(
    "https://api.github.com/repos/exposir/grassland/issues?state=all&per_page=100"
  ).then((res) => {
    res.data.forEach((item) => {
      fs.writeFileSync(`${base}${item.title}.md`, item.body);
      console.log(item.title);
      sidebar.push({
        text: item.title,
        link: `/${item.title}`,
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

  console.log(config);

  fs.writeFileSync(
    `${base}.vitepress/config.js`,
    "module.exports = " + JSON.stringify(config, null, "\t")
  );
};

writeConfig();
