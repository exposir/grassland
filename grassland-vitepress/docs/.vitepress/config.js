module.exports = {
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
    sidebar: [
      {
        text: "互联网常用名词",
        link: "/互联网常用名词",
      },
      {
        text: "有趣的题目",
        link: "/有趣的题目",
      },
    ],
  },
  base: "",
};
