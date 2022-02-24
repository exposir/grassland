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
hello, i am trying to wirte a doc about my style libs, which is written with less 。
so i want to import my less file in my doc ,README.md file。
just like this，
```javascript
<style lang="less">
  @import '~@op/cms-style/styles/index.less';
  body{
    .cms-text-btn{
      font-size:60px;
    }
  }
</style>
```
and then ,i have installed the necessary lib about less.
```javascript
 "devDependencies": {
    "less": "^4.1.2",
    "less-loader": "^10.2.0",
    "vuepress": "^1.8.2"
  }
```
that is all 。and then when i build my docs. 
the style looks have no effect , and there is no error,either。 dom in html is still the original ，just like below.
![image](https://user-images.githubusercontent.com/56330245/140715384-b542f4b1-9f0e-4ed6-a139-8b3d1b9dae88.png)

Can anyone help you see what caused it? Thank you very much。
PS：i have tried add the webpackchain config in config.js ,and It's no use.
```javascript
  chainWebpack(config) {
    config.module
      .rule('less')
        .oneOf('normal')
          .use('less-loader')
            .options({ javascriptEnabled: true })
            .end()
          .end()
        .oneOf('modules')
          .use('less-loader')
            .options({ javascriptEnabled: true })
  }
```
#### Steps to reproduce
<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?
#### What is actually happening?

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
