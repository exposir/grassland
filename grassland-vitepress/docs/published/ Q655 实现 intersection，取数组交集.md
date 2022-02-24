类似 `lodash.intersection`，有以下测试用例

``` js
//=> [2]
intersection([2, 1], [2, 3]);

//=> [1, 2]
intersection([1, 2, 2], [1, 2, 2])

//=> [1, 2]
intersection([1, 2, 2], [1, 2, 2], [1, 2])
```