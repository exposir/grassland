<!-- Please don't delete this template or we'll close your issue -->
<!-- Before creating an issue please make sure you are using the latest version of VuePress. -->

<!-- Please confirm you will submit an issue. -->
<!-- Issues which contain questions or support requests will be closed. -->
<!-- (Update "[ ]" to "[x]" to check a box) -->

- [x] I confirm that this is an issue rather than a question.

<!-- Please ask questions via following several ways. -->
<!-- https://vue-land.js.org/ -->
<!-- https://forum.vuejs.org/ -->
<!-- https://stackoverflow.com/questions/ask?tags=vuepress -->

## Bug report

#### Steps to reproduce

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

Using `2.0.0-beta.35`

1. Create a new site, per the docs page
2. add the `config.js` file
3. set `sidebar: false` in the theme config

#### What is expected?

That the hamburger menu is not displayed

#### What is actually happening?

Sidebar is not displayed, but the hamburger button is visible on mobile breakpoints. Looking at the theme code, I think that the `showSidebar` variable is not passed and available to `v-if` the hamburger menu. This is in the `theme-default/lib/client/layouts/Layout.vue` file (in node_modules, can't find where the .

#### Other relevant information

```
$ npx vuepress info

  System:
    OS: Linux 5.10 Debian GNU/Linux 10 (buster) 10 (buster)
    CPU: (4) x64 06/8e
    Memory: 14.20 GB / 14.21 GB
    Shell: 5.0.3 - /bin/bash
  Binaries:
    Node: 17.5.0 - ~/.config/nvm/versions/node/v17.5.0/bin/node
    Yarn: 1.22.4 - ~/.npm-global/bin/yarn
    npm: 8.4.1 - ~/.config/nvm/versions/node/v17.5.0/bin/npm
  Utilities:
    Git: 2.20.1 - /usr/bin/git
  Browsers:
    Chrome: Not Found
    Firefox: Not Found
  npmPackages:
    @vuepress/bundler-vite:  2.0.0-beta.35 
    @vuepress/bundler-webpack: Not Found
    @vuepress/cli:  2.0.0-beta.35 
    @vuepress/client:  2.0.0-beta.35 
    @vuepress/core:  2.0.0-beta.35 
    @vuepress/markdown:  2.0.0-beta.35 
    @vuepress/plugin-active-header-links:  2.0.0-beta.35 
    @vuepress/plugin-back-to-top:  2.0.0-beta.35 
    @vuepress/plugin-container:  2.0.0-beta.35 
    @vuepress/plugin-docsearch: Not Found
    @vuepress/plugin-external-link-icon:  2.0.0-beta.35 
    @vuepress/plugin-git:  2.0.0-beta.35 
    @vuepress/plugin-google-analytics: Not Found
    @vuepress/plugin-medium-zoom:  2.0.0-beta.35 
    @vuepress/plugin-nprogress:  2.0.0-beta.35 
    @vuepress/plugin-palette:  2.0.0-beta.35 
    @vuepress/plugin-prismjs:  2.0.0-beta.35 
    @vuepress/plugin-pwa: Not Found
    @vuepress/plugin-pwa-popup: Not Found
    @vuepress/plugin-register-components: Not Found
    @vuepress/plugin-search: Not Found
    @vuepress/plugin-shiki: ^2.0.0-beta.35 => 2.0.0-beta.35 
    @vuepress/plugin-theme-data:  2.0.0-beta.35 
    @vuepress/plugin-toc: Not Found
    @vuepress/shared:  2.0.0-beta.35 
    @vuepress/theme-default:  2.0.0-beta.35 
    @vuepress/utils:  2.0.0-beta.35 
    vue:  3.2.31 
    vue-loader: Not Found
    vue-router:  4.0.12 
    vuepress: ^2.0.0-beta.35 => 2.0.0-beta.35 
    vuepress-vite:  2.0.0-beta.35 
    vuepress-webpack: Not Found
```

## images

### Normal width

![image](https://user-images.githubusercontent.com/1390600/154196057-51d99246-aed1-40b1-ba03-1a73259c2fe9.png)

### Narrow width

![image](https://user-images.githubusercontent.com/1390600/154195994-50397f02-d25c-4571-b232-e5b1603b947b.png)

### Open menu

![image](https://user-images.githubusercontent.com/1390600/154196115-93b527bc-772d-4bbb-b24b-f778fd2b9288.png)
