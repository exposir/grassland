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

* Install the latest version of vuepress via npm/yarn (fresh node_modules)

* Try to serve or build the docs
<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?

Successful serving / building of the docs

#### What is actually happening?

cac related error:

```
$ vuepress dev src
/my/username/docs/node_modules/vuepress/lib/util.js:21
  const cli = CAC()
              ^

TypeError: CAC is not a function
    at CLI (/my/username/docs/node_modules/vuepress/lib/util.js:21:15)
    at Object.<anonymous> (/my/username/node_modules/vuepress/cli.js:14:1)
```

#### Other relevant information

This started to happen with the currently latest version [cac@6.7.10](https://www.npmjs.com/package/cac/v/6.7.10). Not sure if this is a bug in their package, as I'm not familiar with it.

My workaround is currently to pin cac to v6.7.9 via resolutions:
```
  "resolutions": {
    "cac": "6.7.9"
  }
```
