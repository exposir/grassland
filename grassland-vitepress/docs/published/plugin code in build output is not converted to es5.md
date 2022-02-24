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

I use vuepress-plugin-fulltext-search plugin, but the code of this plugin still exist as es6 version in build output, while all other code in build output is es5 version.

```js
  462: function (t, n, e) {
    'use strict';
    !(function (n, e, r) {
      let u;
      (u = r.define) && u.amd
        ? u([], function () {
            return e;
          })
        : (u = r.modules)
        ? (u['FlexSearch'.toLowerCase()] = e)
        : (t.exports = e);
    })(
      0,
      (function t(n) {
        function e(t, n) {
          const e = n ? n.id : t && t.id;
          (this.id = e || 0 === e ? e : B++),
            this.init(t, n),
            o(this, 'index', function () {
```