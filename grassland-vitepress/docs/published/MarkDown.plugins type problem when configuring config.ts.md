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

I use vuepress v1.9.7

I use config.ts to configure VuePress, but I have encountered problems when configuring MarkDown.

#### Steps to reproduce

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

Description according to https://Vuepress.Vuejs.org/config/#markdown-plugins

#### What is expected?

I can use the following two ways at the same time.

```js
import { MarkdownConfig } from "vuepress/config";

export default <MarkdownConfig>{
  plugins: [
   ["markdown-it-sub", {}],
  ],
};
```

or

```js
import { MarkdownConfig } from "vuepress/config";

export default <MarkdownConfig>{
  plugins: {
   "markdown-it-sub": {}
  },
};
```

#### What is actually happening?

But the second (object style) type check cannot pass

#### Other relevant information

I found that the `MarkdownConfig ` type in `vuepress/types/src/markdon.ts` has the following sections

```js
plugins?: Array<string | [string, Record<string, any>]>;
```

It seems that there is no support for object type here.
