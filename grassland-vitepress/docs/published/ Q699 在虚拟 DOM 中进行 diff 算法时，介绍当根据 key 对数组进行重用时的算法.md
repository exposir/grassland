如以下示例，当从上方五个 div 变为下方五个 div 时，由于 diff 算法，无需重复构建 DOM 创建五个新的 div 标签。

请写出此时重用的算法，并给出时间复杂度

``` html
<div key="1">Demo 1</div>
<div key="2">Demo 2</div>
<div key="3">Demo 3</div>
<div key="4">Demo 4</div>
<div key="5">Demo 5</div>


<div key="4">Demo 4</div>
<div key="5">Demo 5</div>
<div key="2">Demo 2</div>
<div key="1">Demo 1</div>
<div key="3">Demo 3</div>
```

``` js
function updateChildren (element, oldVnodes, newVnodes) {
  
}
```

## 可参考

1. [编辑距离](https://leetcode-cn.com/problems/edit-distance/)