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

Follow [Getting started guide](https://v2.vuepress.vuejs.org/guide/getting-started.html#prerequisites)
1. `cd empty-project-dir/ && yarn init`
2. `yarn add --dev vuepress@next`
3. `mkdir docs && echo '# Hello VuePress' > docs/README.md`
4. `yarn vuepress dev docs`
5. Visit http://localhost:8080

or clone [this repo](https://github.com/tennox/vuepress-root-bug-repro) && `yarn && yarn vuepress dev docs`

#### What is expected?
normal page being rendered

#### What is actually happening?
Empty page & this error in console:
```
[vite] Internal server error: Cannot read property '0' of undefined
      at Context.load (/home/manu/dev/stuff/vuepress-root-repro/node_modules/vite/dist/node/chunks/dep-0351185a.js:21372:65)
      at Object.load (/home/manu/dev/stuff/vuepress-root-repro/node_modules/vite/dist/node/chunks/dep-0351185a.js:36961:50)
      at processTicksAndRejections (internal/process/task_queues.js:95:5)
      at async doTransform (/home/manu/dev/stuff/vuepress-root-repro/node_modules/vite/dist/node/chunks/dep-0351185a.js:51996:24)
```

#### debugging details
- the stacktrace origin code is in vite: [`src/node/plugins/html.ts#L80`](https://github.com/vitejs/vite/blob/main/packages/vite/src/node/plugins/html.ts#L80)
  - `htmlProxyMap.get(config)` = `Map(1) { '/index.html' => [ "\nimport '@vuepress/client/lib/app.js'\n" ] }`
  - `file` = `'http://localhost:8080/index.html'`
  - `config.root` = `'/home/.../vuepress-root-repro/docs/.vuepress/.temp/vite-root'`
  - => `config.root` is the directory but the code expects the HTTP root, so the root is not replaced with `''`, thus the error
=> it might be a vite issue? I'm not sure where the config.root is coming from or what it's supposed to be


#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
```
  System:
    OS: Linux 5.4 elementary OS 5.1.7 Hera
    CPU: (8) x64 Intel(R) Core(TM) i7-4702MQ CPU @ 2.20GHz
    Memory: 294.29 MB / 11.60 GB
    Shell: 3.3.1 - /usr/bin/fish
  Binaries:
    Node: 14.18.2 - /tmp/yarn--1642540887358-0.748250110059048/node
    Yarn: 1.22.17 - /tmp/yarn--1642540887358-0.748250110059048/yarn
    npm: 6.14.15 - ~/n/bin/npm
  Utilities:
    Git: 2.34.1 - /usr/bin/git
  Browsers:
    Chrome: Not Found
    Firefox: 97.0b4
  npmPackages:
    @vuepress/bundler-vite:  2.0.0-beta.33 
    @vuepress/bundler-webpack: Not Found
    @vuepress/cli:  2.0.0-beta.33 
    @vuepress/client:  2.0.0-beta.33 
    @vuepress/core:  2.0.0-beta.33 
    @vuepress/markdown:  2.0.0-beta.33 
    @vuepress/plugin-active-header-links:  2.0.0-beta.33 
    @vuepress/plugin-back-to-top:  2.0.0-beta.33 
    @vuepress/plugin-container:  2.0.0-beta.33 
    @vuepress/plugin-debug: Not Found
    @vuepress/plugin-docsearch: Not Found
    @vuepress/plugin-external-link-icon:  2.0.0-beta.33 
    @vuepress/plugin-git:  2.0.0-beta.33 
    @vuepress/plugin-google-analytics: Not Found
    @vuepress/plugin-medium-zoom:  2.0.0-beta.33 
    @vuepress/plugin-nprogress:  2.0.0-beta.33 
    @vuepress/plugin-palette:  2.0.0-beta.33 
    @vuepress/plugin-prismjs:  2.0.0-beta.33 
    @vuepress/plugin-pwa: Not Found
    @vuepress/plugin-pwa-popup: Not Found
    @vuepress/plugin-register-components: Not Found
    @vuepress/plugin-search: Not Found
    @vuepress/plugin-shiki: Not Found
    @vuepress/plugin-theme-data:  2.0.0-beta.33 
    @vuepress/plugin-toc: Not Found
    @vuepress/shared:  2.0.0-beta.33 
    @vuepress/theme-default:  2.0.0-beta.33 
    @vuepress/utils:  2.0.0-beta.33 
    vue:  3.2.27 
    vue-loader: Not Found
    vue-router:  4.0.12 
    vuepress: ^2.0.0-beta.33 => 2.0.0-beta.33 
    vuepress-vite:  2.0.0-beta.33 
    vuepress-webpack: Not Found
```