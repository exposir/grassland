实现一个 composeLeft/flow(从左向右) 函数，进行函数合成，类似于 `lodash.flow`


``` js
const add10 = x => x + 10
const mul10 = x => x * 10
const add100 = x => x + 100

// (10 + 10) * 10 + 100 = 300
flow(add10, mul10, add100)(10)
```

相关问题: [【Q181】如何实现 compose 函数，进行函数合成](https://github.com/shfshanyue/Daily-Question/issues/182)