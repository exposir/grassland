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

I recently encountered a bug when I run `vuepress build` with following errors:
```bash
(node:2900) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'catch' of undefined
    at server-bundle.js:13412:23
(Use `node --trace-warnings ...` to show where the warning was created)
(node:2900) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:2900) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:2900) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'catch' of undefined
    at server-bundle.js:13412:23
(node:2900) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
```
#### Steps to reproduce

Please see [demo](https://github.com/six-ponies/vuepress-demo)

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?

I hope it could build successfully.

#### What is actually happening?

In my demo I have a dependency of vue-router@3.0.7, and [`router.push(url).catch(() => {})`](https://github.com/vuejs/vuepress/blob/v1.8.2/packages/%40vuepress/core/lib/client/serverEntry.js#L13) works fine with [vue-router@3.5.2](https://github.com/vuejs/vue-router/blob/dev/src/index.js#L167), but not [vue-router@3.0.7](https://github.com/vuejs/vue-router/blob/v3.0.7/src/index.js#L153).

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
```bash
Environment Info:

  System:
    OS: macOS 11.5.2
    CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
  Binaries:
    Node: 14.0.0 - ~/.nvm/versions/node/v14.0.0/bin/node
    Yarn: 1.22.10 - ~/.nvm/versions/node/v14.0.0/bin/yarn
    npm: 6.14.4 - ~/.nvm/versions/node/v14.0.0/bin/npm
  Browsers:
    Chrome: 94.0.4606.61
    Edge: Not Found
    Firefox: 91.0.1
    Safari: 14.1.2
  npmPackages:
    @vuepress/core:  1.8.2 
    @vuepress/theme-default:  1.8.2 
    vuepress: ^1.8.2 => 1.8.2 
  npmGlobalPackages:
    vuepress: Not Found
```