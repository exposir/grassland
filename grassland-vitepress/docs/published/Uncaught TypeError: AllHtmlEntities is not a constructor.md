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

1. yarn create vuepress-site [optionalDirectoryName]
2. cd docs && yarn
3. yarn add -D webpack-hot-middleware
4. yarn dev

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?

Run dev without error

#### What is actually happening?

- with `webpack-hot-middleware@latest` is error
- with `webpack-hot-middleware <= 2.25.0` is ok

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
    - System:
        - OS: macOS 11.6.1
    - Binaries:
        - Node: 17.3.0
        - Yarn: 1.22.17
        - npm: 8.3.0
    - Browsers:
        - Chrome: 97.0.4692.71
    - npmPackages:
        - @vuepress/core:  1.9.7
        - @vuepress/theme-default:  1.9.7
        - vuepress: ^1.9.7 => 1.9.7