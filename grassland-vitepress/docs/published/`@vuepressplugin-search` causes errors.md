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

After installing `@vuepress/plugin-search` v2.0.0-beta.32, my documentation no longer builds.

Instead, building causes the errors `useRouteLocale() is called without provider.` and `Component SearchBox  is missing template or render function.`.

Running the dev preview causes `ReferenceError: Cannot access 'clientAppEnhances' before initialization` and `useRouteLocale() is called without provider.`.

#### Steps to reproduce

1. Install `@vuepress/plugin-search` v2.0.0-beta.32
2. Add it to the plugins array
3. Build the docs

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

Repo (with specific branch): https://github.com/DerYeger/d3-graph-controller/tree/docs/search
Logs: https://github.com/DerYeger/d3-graph-controller/runs/4747162465?check_suite_focus=true

#### What is expected?

The docs build and search works.

#### What is actually happening?

Various errors occur.

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:

```
System:
    OS: Windows 10 10.0.22000
    CPU: (24) x64 AMD Ryzen 9 3900X 12-Core Processor            
    Memory: 15.63 GB / 31.92 GB
  Binaries:
    Node: 16.13.0 - C:\Program Files\nodejs\node.EXE
    Yarn: 1.22.15 - ~\AppData\Roaming\npm\yarn.CMD
    npm: 7.20.3 - C:\Program Files\nodejs\npm.CMD
  Utilities:
    Git: 2.34.0.
  Browsers:
    Chrome: Not Found
    Edge: Spartan (44.22000.120.0), Chromium (96.0.1054.62)
  npmPackages:
    @vuepress/bundler-vite:  2.0.0-beta.31
    @vuepress/bundler-webpack: Not Found
    @vuepress/cli:  2.0.0-beta.31
    @vuepress/client:  2.0.0-beta.29 (2.0.0-beta.32)
    @vuepress/core:  2.0.0-beta.29 (2.0.0-beta.32)
    @vuepress/markdown:  2.0.0-beta.29 (2.0.0-beta.32)
    @vuepress/plugin-active-header-links:  2.0.0-beta.29
    @vuepress/plugin-back-to-top:  2.0.0-beta.30
    @vuepress/plugin-container:  2.0.0-beta.29
    @vuepress/plugin-debug: Not Found
    @vuepress/plugin-docsearch: Not Found
    @vuepress/plugin-external-link-icon:  2.0.0-beta.29
    @vuepress/plugin-git:  2.0.0-beta.29
    @vuepress/plugin-google-analytics: Not Found
    @vuepress/plugin-medium-zoom:  2.0.0-beta.29
    @vuepress/plugin-nprogress:  2.0.0-beta.29
    @vuepress/plugin-palette:  2.0.0-beta.29
    @vuepress/plugin-prismjs:  2.0.0-beta.29
    @vuepress/plugin-pwa: Not Found
    @vuepress/plugin-pwa-popup: Not Found
    @vuepress/plugin-register-components: 2.0.0-beta.32 => 2.0.0-beta.32
    @vuepress/plugin-search: 2.0.0-beta.32 => 2.0.0-beta.32
    @vuepress/plugin-shiki: Not Found
    @vuepress/plugin-theme-data:  2.0.0-beta.29
    @vuepress/plugin-toc: Not Found
    @vuepress/shared:  2.0.0-beta.28 (2.0.0-beta.32)
    @vuepress/theme-default:  2.0.0-beta.31
    @vuepress/utils:  2.0.0-beta.28 (2.0.0-beta.32)
    vue: 3.2.26 => 3.2.26
    vue-loader: Not Found
    vue-router:  4.0.12
    vuepress: 2.0.0-beta.31 => 2.0.0-beta.31
    vuepress-vite:  2.0.0-beta.31
    vuepress-webpack: Not Found
```
