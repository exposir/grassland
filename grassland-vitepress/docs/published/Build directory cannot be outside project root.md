<!-- Please don't delete this template or we'll close your issue -->
<!-- Before creating an issue please make sure you are using the latest version of VuePress. -->

<!-- Please confirm you will submit an issue. -->
<!-- Issues which contain questions or support requests will be closed. -->
<!-- (Update "[ ]" to "[x]" to check a box) -->

- [ x] I confirm that this is an issue rather than a question.

<!-- Please ask questions via following several ways. -->
<!-- https://vue-land.js.org/ -->
<!-- https://forum.vuejs.org/ -->
<!-- https://stackoverflow.com/questions/ask?tags=vuepress -->

## Bug report

If the `dest` param of the Vuepress config is a directory outside the project root, the build will fail:
![image](https://user-images.githubusercontent.com/4061104/146646715-a0508066-4127-41c8-85c7-6fdcda01312d.png)

Same exact project will build just fine when `dest` is within the project root:

![buildok](https://user-images.githubusercontent.com/4061104/146646933-7688dbb8-5494-40cd-a231-8aaeeaaa8960.jpg)


#### Steps to reproduce

- Configure your `dest` to be a folder outside the project root
- Build with `vuepress build`

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?

Should be able to build regardless of the destination folder.

#### What is actually happening?

The CLI copies the intermediate output to the dest folder and then tries to build from there, which eventually ends in failure if the dest is outside project root.

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:

  System:
    OS: Windows 10 10.0.19043
    CPU: (4) x64 AMD Ryzen 3 3200G with Radeon Vega Graphics    
    Memory: 8.13 GB / 15.95 GB
  Binaries:
    Node: 16.13.0 - C:\Program Files\nodejs\node.EXE
    Yarn: 1.22.17 - ~\AppData\Roaming\npm\yarn.CMD
    npm: 7.20.5 - C:\Program Files\nodejs\npm.CMD
  Utilities:
    Git: 2.33.1.
  Browsers:
    Chrome: 96.0.4664.110
    Edge: Spartan (44.19041.1266.0), Chromium (96.0.1054.57)    
  npmPackages:
    @vuepress/bundler-vite:  2.0.0-beta.27 
    @vuepress/bundler-webpack: Not Found
    @vuepress/cli:  2.0.0-beta.27 
    @vuepress/client:  2.0.0-beta.27 
    @vuepress/core:  2.0.0-beta.27
    @vuepress/markdown:  2.0.0-beta.27
    @vuepress/plugin-active-header-links:  2.0.0-beta.27
    @vuepress/plugin-back-to-top:  2.0.0-beta.27
    @vuepress/plugin-container: ^2.0.0-beta.27 => 2.0.0-beta.27
    @vuepress/plugin-debug: Not Found
    @vuepress/plugin-docsearch: Not Found
    @vuepress/plugin-git:  2.0.0-beta.27
    @vuepress/plugin-google-analytics: Not Found
    @vuepress/plugin-medium-zoom:  2.0.0-beta.27
    @vuepress/plugin-nprogress:  2.0.0-beta.27
    @vuepress/plugin-palette:  2.0.0-beta.27
    @vuepress/plugin-prismjs:  2.0.0-beta.27
    @vuepress/plugin-pwa: Not Found
    @vuepress/plugin-pwa-popup: Not Found
    @vuepress/plugin-register-components: Not Found
    @vuepress/plugin-search: Not Found
    @vuepress/plugin-shiki: Not Found
    @vuepress/plugin-theme-data:  2.0.0-beta.27
    @vuepress/plugin-toc: Not Found
    @vuepress/shared:  2.0.0-beta.27
    @vuepress/theme-default:  2.0.0-beta.27
    @vuepress/utils:  2.0.0-beta.27
    vue:  3.2.26
    vue-loader: Not Found
    vue-router:  4.0.12
    vuepress: Not Found
    vuepress-vite: ^2.0.0-beta.27 => 2.0.0-beta.27