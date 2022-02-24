类似 [lodash.keyBy](https://lodash.com/docs/4.17.15#keyBy)，这里仅仅考虑第二个参数为函数的情况

``` js
// Output: {
//   "1": {
//     "id": 1,
//     "name": "山月"
//   },
//   "2": {
//     "id": 2,
//     "name": "shanyue"
//   }
// }
keyBy([{ id: 1, name: '山月' }, { id: 2, name: 'shanyue' }], x => x.id)
```