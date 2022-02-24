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
markdown such as `[my ftp link](ftp://my.ftp.link)` will render as `<a href="ftp://my.ftp.link">my ftp link</a>` and open ftp link

#### What is actually happening?
link is rendered as `<a href="/mydocsbase/currentdoc/ftp:/my.ftp.link>my ftp link</a>`

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
```
Environment Info:

  System:
    OS: macOS 11.6
    CPU: (8) x64 Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz
  Binaries:
    Node: 14.17.6 - ~/.nvm/versions/node/v14.17.6/bin/node
    Yarn: Not Found
    npm: 8.1.0 - ~/.nvm/versions/node/v14.17.6/bin/npm
  Browsers:
    Chrome: 94.0.4606.81
    Edge: Not Found
    Firefox: 93.0
    Safari: 15.0
  npmPackages:
    @vuepress/core:  1.8.2
    @vuepress/theme-default:  1.8.2
    vuepress: ^1.7.0 => 1.8.2
  npmGlobalPackages:
    vuepress: Not Found
```
