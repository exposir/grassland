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

#### What is expected?

Text should not be duplicated in the paragraphs.

#### What is actually happening?

Text becomes duplicated in certain paragraphs. This mostly happens when a user goes in a specific link that points to a paragraph, but once I click on it, it just gives an actual doubled paragraph when it should not. [This](https://github.com/ATN-Development/erebus-documentation) is the repository of the actual vuepress project, and here is a screenshot reproducing the actual bug. [!image](https://cdn.discordapp.com/attachments/795346114718597200/926150988451184701/unknown.png)

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:

```  System:
    OS: Linux 5.11 Ubuntu 20.04.3 LTS (Focal Fossa)
    CPU: (2) x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
    Memory: 4.89 GB / 6.79 GB
    Shell: 5.0.17 - /bin/bash
  Binaries:
    Node: 16.13.1 - /opt/hostedtoolcache/node/16.13.1/x64/bin/node
    Yarn: 1.22.17 - /usr/local/bin/yarn
    npm: 8.1.2 - /opt/hostedtoolcache/node/16.13.1/x64/bin/npm
  Utilities:
    Git: 2.34.1 - /usr/bin/git
  Browsers:
    Chrome: 96.0.4664.110
    Firefox: 95.0
  npmPackages:
    @vuepress/bundler-vite:  2.0.0-beta.32 
    @vuepress/bundler-webpack: Not Found
    @vuepress/cli:  2.0.0-beta.32 
    @vuepress/client:  2.0.0-beta.32 
    @vuepress/core:  2.0.0-beta.32 
    @vuepress/markdown:  2.0.0-beta.32 
    @vuepress/plugin-active-header-links:  2.0.0-beta.32 
    @vuepress/plugin-back-to-top:  2.0.0-beta.32 
    @vuepress/plugin-container:  2.0.0-beta.32 
    @vuepress/plugin-debug: Not Found
    @vuepress/plugin-docsearch: Not Found
    @vuepress/plugin-external-link-icon:  2.0.0-beta.32 
    @vuepress/plugin-git:  2.0.0-beta.32 
    @vuepress/plugin-google-analytics: Not Found
    @vuepress/plugin-medium-zoom:  2.0.0-beta.32 
    @vuepress/plugin-nprogress:  2.0.0-beta.32 
    @vuepress/plugin-palette:  2.0.0-beta.32 
    @vuepress/plugin-prismjs:  2.0.0-beta.32 
    @vuepress/plugin-pwa: Not Found
    @vuepress/plugin-pwa-popup: Not Found
    @vuepress/plugin-register-components: Not Found
    @vuepress/plugin-search: Not Found
    @vuepress/plugin-shiki: Not Found
    @vuepress/plugin-theme-data:  2.0.0-beta.32 
    @vuepress/plugin-toc: Not Found
    @vuepress/shared:  2.0.0-beta.32 
    @vuepress/theme-default:  2.0.0-beta.32 
    @vuepress/utils:  2.0.0-beta.32 
    vue:  3.2.26 
    vue-loader: Not Found
    vue-router:  4.0.12 
    vuepress: ^2.0.0-beta.27 => 2.0.0-beta.32 
    vuepress-vite:  2.0.0-beta.32 
    vuepress-webpack: Not Found
```