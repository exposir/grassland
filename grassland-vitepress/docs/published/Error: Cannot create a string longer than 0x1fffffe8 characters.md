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
When I build  multi(about 3000 files) huge(about 500KB or bigger to 1MB) markdown files, the error shows
```
Error: Cannot create a string longer than 0x1fffffe8 characters
    at Buffer.utf8Slice (<anonymous>)
    at Object.slice (buffer.js:608:37)
    at Buffer.toString (buffer.js:805:14)
    at Object.readFileSync (fs.js:421:41)
    at Object.Module._extensions..json (internal/modules/cjs/loader.js:1098:22)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Build.render (/Users/admin/workspace/project/v8/building-standards/node_modules/@vuepress/core/lib/node/build/index.js:55:26)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async App.build (/Users/admin/workspace/project/v8/building-standards/node_modules/@vuepress/core/lib/node/App.js:499:5)
error Command failed with exit code 1.
```

My build scripts is
```
"docs:build": "cross-env NODE_OPTIONS='--max_old_space_size=12288' vuepress build docs",
```

I have tried `max_old_space_size=8192`, it is failed, too.

#### What is expected?
build success

#### What do I find
I found this question, maybe use `fs-extra` can worked, but i do not try it.
https://stackoverflow.com/questions/68230031/cannot-create-a-string-longer-than-0x1fffffe8-characters-in-json-parse

Please try and resolve it, thanks

- Output of `npx vuepress info` in my VuePress project:
- vuepress/1.8.2
