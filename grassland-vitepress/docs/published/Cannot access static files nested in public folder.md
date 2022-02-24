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

I have the following file structure in my .vuepress/public folder:

- public
    - res
        - tutorial9
            - cube-diffuse.jpg
            - cube.mtl
            - cube.obj

While I can access a file in the pubic folder directly, I get a 404 when I try to access files inside of folders inside the public folder.

#### Steps to reproduce

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

1. Create a new vuepress project (or use and existing one)
2. Create a public folder in the .vuepress folder
3. Create a folder inside the public folder
4. Add any file into the nested folder
5. Start the vuepress server
6. Attempt to access the nested file

#### What is expected?

The file will accessible as it would be if it were in the root of the public folder.

#### What is actually happening?

Vuepress will give a 404 for the file. My guess is that this is due to the router catching the request and then 404ing because the route doesn't exist in config.js.

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
Environment Info:

  System:
    OS: Linux 5.15 Pop!_OS 20.04 LTS
    CPU: (16) x64 AMD Ryzen 7 5700U with Radeon Graphics
  Binaries:
    Node: 16.13.0 - ~/.nvm/versions/node/v16.13.0/bin/node
    Yarn: 1.22.15 - ~/.nvm/versions/node/v16.13.0/bin/yarn
    npm: 8.1.0 - ~/.nvm/versions/node/v16.13.0/bin/npm
  Browsers:
    Chrome: Not Found
    Firefox: 95.0
  npmPackages:
    @vuepress/core:  1.9.5 
    @vuepress/theme-default:  1.9.5 
    vuepress: ^1.9.5 => 1.9.5 
  npmGlobalPackages:
    vuepress: Not Found

