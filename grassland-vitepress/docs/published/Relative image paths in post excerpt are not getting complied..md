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

Relative image paths in post excerpt are not getting complied.

![image](https://user-images.githubusercontent.com/5960988/131298705-49b8da6e-1aae-4852-bcf7-2abaf8d25d6d.png)

![image](https://user-images.githubusercontent.com/5960988/131298798-99bb5c5b-349a-4005-a572-0885b21702c6.png)

![image](https://user-images.githubusercontent.com/5960988/131298933-6b351ccb-1eb9-482d-81ad-f5f9ed96093f.png)

![image](https://user-images.githubusercontent.com/5960988/131299283-ae74ef98-7260-462a-a1ea-5102625cc022.png)


#### What is expected?

images paths should be complied in excerpts.

#### What is actually happening?

not complied in excerpts.

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
```
Environment Info:

  System:
    OS: Windows 10 10.0.19042
    CPU: (12) x64 Intel(R) Core(TM) i5-10500 CPU @ 3.10GHz
  Binaries:
    Node: 14.16.1 - C:\Program Files\nodejs\node.EXE
    Yarn: 1.22.10 - ~\AppData\Roaming\npm\yarn.CMD
    npm: 7.20.6 - C:\Program Files\nodejs\npm.CMD
  Browsers:
    Chrome: Not Found
    Edge: Spartan (44.19041.1023.0), Chromium (92.0.902.84)
  npmPackages:
    @vuepress/core:  1.8.2
    @vuepress/theme-default:  1.8.2
    vuepress: 1.8.2 => 1.8.2
  npmGlobalPackages:
    vuepress: Not Found
```
