ｃｏｄｅ：
const list = this.$refs.content;
 list.forEach((ele) => {｝


报错信息
server-bundle.js:137647
        list.forEach(function (ele) {
             ^

TypeError: Cannot read property 'forEach' of undefined
    at Timeout._onTimeout (server-bundle.js:137647:14)
    at processTimers (internal/timers.js:497:7)