如在` npm script` 中有以下命令：

``` js
{
  "start": "serve"
}
```

其中 `serve` 可通过 `--port` 指定端口号：

``` bash
$ npm start -- --port 8080

# 而在 yarn 时无需传递参数
$ yarn start --port 8080
```

那为什么 npm 执行命令传递参数时，为何需要双横线