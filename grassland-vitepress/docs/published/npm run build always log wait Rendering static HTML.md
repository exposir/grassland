<!-- Please don't delete this template or we'll close your issue --><!-- Before creating an issue please make sure you are using the latest version of VuePress. -->

<!-- Please confirm you will submit an issue. -->
<!-- Issues which contain questions or support requests will be closed. -->
<!-- (Update "[ ]" to "[x]" to check a box) -->

- [ ] I confirm that this is an issue rather than a question.

<!-- Please ask questions via following several ways. -->
<!-- https://vue-land.js.org/ -->
<!-- https://forum.vuejs.org/ -->
<!-- https://stackoverflow.com/questions/ask?tags=vuepress -->

## Bug report

#### Steps to reproduce

npm run install &&
npm run build

Here is a travis-ci example.

https://app.travis-ci.com/github/apache/incubator-doris/builds/236468019

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?
I run npm run build and hope it can build done.

#### What is actually happening?
when I run ```npm run build```, it just always show ``` wait Rendering static HTML ```, but nothing else, I don't know what happened. here is the picture. (I'm so sorry for my network, I just paste a text version)

● Client █████████████████████████ emitting (95%) OptimizeCssAssetsWebpackPlugin 
● Client █████████████████████████ after emitting (98%)  
✔ Client                   Compiled successfully in 50.02s
                 ✔ Server
  Compiled successfully in 41.65s
[BABEL] Note: The code generator has deoptimised the styling of /Users/hujian05/Documents/code/incubator-doris/docs/.temp/internal/siteData.js as it exceeds the max of 500KB.
[BABEL] Note: The code generator has deoptimised the styling of /Users/hujian05/Documents/code/incubator-doris/docs/.temp/internal/siteData.js as it exceeds the max of 500KB.
wait Rendering static HTML...

#### Other relevant information
If I use the default command which is``` npm run build ```, it will show a GC error, I guess it doesn't have enough memories. so I use node ``` node --max_old_space_size=8192 ./node_modules/vuepress/cli.js build ``` instead it. I think it doesn't matter with this problem.

- Output of `npx vuepress info` in my VuePress project:
Environment Info:

  System:
    OS: macOS 11.4
    CPU: (8) x64 Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz
  Binaries:
    Node: 10.23.0 - ~/.nvm/versions/node/v10.23.0/bin/node
    Yarn: 1.22.10 - /usr/local/bin/yarn
    npm: 6.14.8 - ~/.nvm/versions/node/v10.23.0/bin/npm
  Browsers:
    Chrome: 92.0.4515.159
    Edge: Not Found
    Firefox: 89.0
    Safari: 14.1.1
  npmPackages:
    @vuepress/core:  1.8.2 
    @vuepress/theme-default:  1.8.2 
    vuepress: ^1.3.1 => 1.8.2 
  npmGlobalPackages:
    vuepress: Not Found

