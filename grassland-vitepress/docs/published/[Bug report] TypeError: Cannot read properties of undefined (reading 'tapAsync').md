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

clone the repository `[gmap-vue](https://github.com/diegoazh/gmap-vue)` and run `pnpm install` and `pnpm run build`

#### What is expected?

Build without errors.

#### What is actually happening?

It throws the above error when you run `vuepress build docs`

```shell
TypeError: Cannot read properties of undefined (reading 'tapAsync')
    at /mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/vue-server-renderer@2.6.14/node_modules/vue-server-renderer/server-plugin.js:52:39
    at SyncHook.eval [as call] (eval at create (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/tapable@1.1.3/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:11:1)
    at SyncHook.lazyCompileHook (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/tapable@1.1.3/node_modules/tapable/lib/Hook.js:154:20)
    at Compiler.newCompilation (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/Compiler.js:631:26)
    at /mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/Compiler.js:667:29
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/tapable@1.1.3/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/tapable@1.1.3/node_modules/tapable/lib/Hook.js:154:20)
    at Compiler.compile (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/Compiler.js:662:28)
    at /mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/Compiler.js:321:11
    at Compiler.readRecords (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/Compiler.js:529:11)
    at /mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/Compiler.js:318:10
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/tapable@1.1.3/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/tapable@1.1.3/node_modules/tapable/lib/Hook.js:154:20)
    at /mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/Compiler.js:315:19
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/tapable@1.1.3/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
    at AsyncSeriesHook.lazyCompileHook (/mnt/datos2/projects/npm-libs/gmap-vue/node_modules/.pnpm/tapable@1.1.3/node_modules/tapable/lib/Hook.js:154:20)
 ELIFECYCLE  Command failed with exit code 1.
```

#### Other relevant information

The bug brokes the build process, I think is something related to webpack or vue-server-renderer, the above output is the error throwed by vuepress when I run `vuepress build docs`, I'm using pnpm as a package manager and when I include `"webpack":"~4.0.0"` in the `package.json` it works for the first time but if I run again `pnpm install` at the root level (the project is a monorepo) in the next execution of `vuepress build docs` it fails with the above error. Another detail is that I'm using my package in the vuepress repo, I mean `"gmap-vue": "worspace:../gmap-vue"` and that package is using webpack 5; I'm not sure if that can be a problem but is another important detail.
Another interesting detail is that `vuepress dev docs` works well without throwing errors.

![image](https://user-images.githubusercontent.com/10166935/143159088-cd1879df-7488-484b-9c69-95d385ecba45.png)

- Output of `npx vuepress info` in my VuePress project:

```bash
Environment Info:

  System:
    OS: Linux 5.4 Ubuntu 20.04.3 LTS (Focal Fossa)
    CPU: (8) x64 Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz
  Binaries:
    Node: 16.13.0 - ~/.nvm/versions/node/v16.13.0/bin/node
    Yarn: 1.22.15 - /usr/bin/yarn
    npm: 8.1.4 - ~/.nvm/versions/node/v16.13.0/bin/npm
  Browsers:
    Chrome: 96.0.4664.45
    Firefox: 94.0
  npmPackages:
    @vuepress/core: Not Found
    @vuepress/theme-default: Not Found
    vuepress: ^1.8.2 => 1.8.2 
  npmGlobalPackages:
    vuepress: Not Found
```