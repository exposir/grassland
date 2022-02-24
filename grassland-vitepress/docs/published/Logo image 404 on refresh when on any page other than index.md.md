<!-- Please don't delete this template or we'll close your issue -->
<!-- Before creating an issue please make sure you are using the latest version of VuePress. -->

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

 - set a `base`
 - set a  navbar `logo` in the `themeConfig` section: `my-logo.png`
 - load the page on Gitlab pages.. loads fine on the index.md page. 
 - Navigate to `/guide`, refresh the page.. logo disappears with a 404
 - Navigate back to index.md, refresh the page, logo comes back
 - adding the base path to the logo image path does not work
 

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

Repo is private and behind corporate safe guards.

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?
Navbar logo will show up consistently when refreshed on any page

#### What is actually happening?
Navbar logo disappears on all pages except index.md on refresh.

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
```

Environment Info:

  System:
    OS: macOS 11.5.1
    CPU: (12) x64 Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz
  Binaries:
    Node: 14.15.3 - /usr/local/bin/node
    Yarn: 1.22.11 - ~/Documents/node_modules/.bin/yarn
    npm: 7.13.0 - /usr/local/bin/npm
  Browsers:
    Chrome: 91.0.4472.114
    Edge: Not Found
    Firefox: 91.0.2
    Safari: 14.1.2
  npmPackages:
    @vuepress/core:  1.8.2 
    @vuepress/theme-default:  1.8.2 
    vuepress: ^1.5.3 => 1.8.2 
  npmGlobalPackages:
    vuepress: Not Found
```