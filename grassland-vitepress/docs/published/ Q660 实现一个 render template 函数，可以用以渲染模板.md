``` js
const template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}';

const data = {
  user: {
    id: 10086,
    name: '山月',
  }
};

//=> "山月，今天你又学习了吗 - 用户ID: 10086"
render(template, data); 
```

注意:

1. 注意深层嵌套数据
2. 注意 `user['name']` 属性

> 关于复杂的模板编译解析执行，可参考 [mustache](https://github.com/janl/mustache.js) 与 [handlebars.js](https://github.com/handlebars-lang/handlebars.js)