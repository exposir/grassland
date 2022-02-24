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

I believe this is unexpected and wrong behaviour and I didn't find this issue filed anywhere else so here it goes:

#### Steps to reproduce

Add this to your head in config.js
```
['meta', { name: 'theme-color', content: '#FFFFFF', media: '(prefers-color-scheme: light)' }],
['meta', { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' }],
```

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?

Output
```
<meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
```

#### What is actually happening?

Output
```
<meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">
```
The second meta tag is omitted even though it has a different media query.

#### Other relevant information

VuePress v1.9.5
