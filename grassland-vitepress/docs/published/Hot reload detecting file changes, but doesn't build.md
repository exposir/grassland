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

#### What is expected?
When I edit a markdown file, it should just be updated when I reload the page in my browser.

#### What is actually happening?
It stays the same when I refresh the page. It only truly updates when I rerun the `npm run dev` command.

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
```
System:
    OS: Windows 10 10.0.19044
    CPU: (12) x64 AMD Ryzen 5 4600G with Radeon Graphics
  Binaries:
    Node: 16.13.1 - C:\Program Files\nodejs\node.EXE
    Yarn: 1.22.17 - ~\AppData\Roaming\npm\yarn.CMD
    npm: 8.1.2 - C:\Program Files\nodejs\npm.CMD
  Browsers:
    Chrome: Not Found
    Edge: Spartan (44.19041.1266.0), Chromium (98.0.1108.43)
  npmPackages:
    @vuepress/core:  1.9.7
    @vuepress/theme-default:  1.9.7
    vuepress: ^1.5.3 => 1.9.7
  npmGlobalPackages:
    vuepress: Not Found
```

- It does say `Build completed in [about 300ms]` after I update a markdown file