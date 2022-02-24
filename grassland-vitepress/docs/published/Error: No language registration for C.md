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
Error: No language registration for C
    at getGrammer (/home/vuepress/node_modules/shiki/dist/index.js:2075:19)
    at codeToThemedTokens (/home/vuepress/node_modules/shiki/dist/index.js:2083:30)
    at Object.codeToHtml (/home/vuepress/node_modules/shiki/dist/index.js:2088:24)
    at Object.md.options.highlight (/home/vuepress/packages/@vuepress/plugin-shiki/lib/node/shikiPlugin.js:12:60)
    at Object.md.renderer.rules.fence (/home/vuepress/packages/@vuepress/markdown/lib/plugins/codePlugin/codePlugin.js:22:88)
    at Renderer.render (/home/vuepress/node_modules/markdown-it/lib/renderer.js:332:38)
    at MarkdownIt.render (/home/vuepress/node_modules/markdown-it/lib/index.js:544:24)
    at MarkdownIt.md.render (/home/vuepress/packages/@vuepress/markdown/lib/plugins/extractHeadersPlugin.js:27:24)
    at MarkdownIt.md.render (/home/vuepress/packages/@vuepress/markdown/lib/plugins/extractTitlePlugin.js:29:24)
    at renderPageContent (/home/vuepress/packages/@vuepress/core/lib/page/renderPageContent.js:14:42)
#### Steps to reproduce

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?

Idk

#### What is actually happening?

can't build successfully

#### Other relevant information

maybe I should update markdown rendering?

- Output of `npx vuepress info` in my VuePress project:
