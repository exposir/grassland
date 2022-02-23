const sidebar = {
  home: [
    ["/", "Enjoy Life"],
    ["//互联网常用名词", "互联网常用名词"],
    ["/pin/有趣的题目", "有趣的题目"],
    ["/pin/Leetcode Top 100", "Leetcode Top 100"],
  ],
};
module.exports = {
  title: "Exposir",
  description: "孟世博的博客",
  dest: "public",
  serviceWorker: false,
  head: [
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?5343da773d52d4e68e0bcaf4c1654722";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `,
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {},
    },
  },
  markdown: {},
  themeConfig: {
    repo: "exposir/issues",
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
        text: "EnjoyLife",
        link: "/EnjoyLife",
      },
      {
        text: "Home",
        link: "/",
      },
    ],
  },
  base: "",
};
