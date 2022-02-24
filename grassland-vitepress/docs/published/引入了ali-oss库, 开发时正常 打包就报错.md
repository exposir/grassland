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
公司内部的UI组件库中引入了 ali-oss包(经过排查, 确定是因为引入了这个包导致打包失败了), 开发时运行正常, 打包的时候就报错了



<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?

#### What is actually happening?

```bash
wait Extracting site metadata...
tip Apply theme @vuepress/theme-default ...
warning An error was encountered in plugin "@vuepress/plugin-back-to-top"
warning An error was encountered in plugin "@vuepress/plugin-medium-zoom"
tip Apply plugin container (i.e. "vuepress-plugin-container") ...
tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
tip Apply plugin @vuepress/search (i.e. "@vuepress/plugin-search") ...
tip Apply plugin @vuepress/nprogress (i.e. "@vuepress/plugin-nprogress") ...

✔ Client
  Compiled successfully in 22.44s

✔ Server
  Compiled successfully in 14.21s

wait Rendering static HTML...
error Error rendering /components/scene.html: false
undefined
error Error rendering /components/preview.html: false
undefined
error Error rendering /guide/npm-source.html: false
undefined
error Error rendering /: false
undefined
error Error rendering /guide/install.html: false
undefined
error Error rendering /guide/color-variable.html: false
undefined
error Error rendering /options/: false
undefined
error Error rendering /404.html: false
undefined
server-bundle.js:100745
	__webpack_require__(522),
	                    ^^^

SyntaxError: Unexpected number
    at new Script (vm.js:102:7)
    at getCompiledScript (/Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/vue-server-renderer/build.dev.js:9318:18)
    at evaluateModule (/Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/vue-server-renderer/build.dev.js:9333:18)
    at /Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/vue-server-renderer/build.dev.js:9409:18
    at new Promise (<anonymous>)
    at /Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/vue-server-renderer/build.dev.js:9401:14
    at Object.renderToString (/Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/vue-server-renderer/build.dev.js:9577:9)
    at Build.renderPage (/Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/@vuepress/core/lib/node/build/index.js:150:34)
    at /Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/@vuepress/core/lib/node/build/index.js:95:43
    at Array.map (<anonymous>)
    at Build.render (/Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/@vuepress/core/lib/node/build/index.js:95:26)
    at async App.build (/Users/liyun/Office/www/admall/web/admall-ui-docs/node_modules/@vuepress/core/lib/node/App.js:499:5)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
```
Environment Info:

  System:
    OS: macOS 12.1
    CPU: (8) x64 Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz
  Binaries:
    Node: 14.17.3 - /usr/local/bin/node
    Yarn: 1.22.17 - ~/.yarn/bin/yarn
    npm: 6.14.13 - /usr/local/bin/npm
  Browsers:
    Chrome: 97.0.4692.71
    Edge: Not Found
    Firefox: 95.0.2
    Safari: 15.2
  npmPackages:
    @vuepress/core:  1.9.5
    @vuepress/theme-default:  1.9.5
    vuepress: ^1.9.5 => 1.9.5
  npmGlobalPackages:
    vuepress: Not Found
```