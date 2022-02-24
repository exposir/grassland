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

### Steps to reproduce

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

Please see the official website https://vuepress.vuejs.org/guide/using-vue.html

### What is actually happening?

In the first paragraph, when you have an outbound link in the middle of a sentence

<img src="https://user-images.githubusercontent.com/7588612/154712015-839eca8a-2f56-434f-b0f0-1da049446c4d.png" width=703>

There is a strange space after the icon as whitespace in between words is treated as a single character.

### What is expected?

Scroll down and find a standalone outbound link

<img src="https://user-images.githubusercontent.com/7588612/154712242-c1cb5024-f043-4968-b8e4-1a5125b1415f.png" width=452>

It looks all right as whitespace at the start and end of elements is ignored.

### Other relevant information

This can be fixed by removing the line break here

https://github.com/vuejs/vuepress/blob/38e98634af117f83b6a32c8ff42488d91b66f663/packages/%40vuepress/core/lib/client/components/OutboundLink.vue#L22-L23
