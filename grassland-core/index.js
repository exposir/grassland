const fs = require("fs");
const axios = require("axios");
const rimraf = require("rimraf");
const base = "./docs/";
const sidebar = [];
const ghToken = process.env.GITHUB_TOKEN;
const repo =
  process.env.REPO ||
  `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`;

const [ghUserName, repoSlug] = repo.split("/");

console.log(`ghUserName---${ghUserName}`, `repoSlug---${repoSlug}`);

const authorization = {
  Authorization: `bearer ${ghToken}`,
};
const authHeaders = ghToken ? { ...authorization } : {};

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

const writeConfig = () => {
  return axios(
    `https://api.github.com/repos/${repo}/issues?state=all&per_page=100`,
    {
      params: {
        state: "open",
        per_page: 10000,
      },
      headers: {
        ...authHeaders,
      },
    }
  )
    .then((res) => {
      const add = () => {
        mkdirFolder(base);
        fs.writeFileSync(`${base}index.md`, "readme");
        const folderList = [`${base}published/`, `${base}.vitepress/`];
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

          fs.writeFileSync(
            `${base}published/` + newTitle + `.md`,
            item.body ? item.body : ""
          );
          sidebar.push({
            text: newTitle,
            link: `/published/${newTitle}`,
          });

          const config = {
            title: "Grassland",
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
          console.log(
            `${base}.vitepress/config.js`,
            "module.exports = " + JSON.stringify(config, null, "\t")
          );
        });
      };

      rimraf(base, function async(err) {
        return err ? console.log(err) : add();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.writeConfig = writeConfig;
