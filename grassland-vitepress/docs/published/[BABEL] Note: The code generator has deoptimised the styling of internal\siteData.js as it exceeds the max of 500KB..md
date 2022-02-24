[BABEL] Note: The code generator has deoptimised the styling of ……\node_modules\@vuepress\core\.temp\internal\siteData.js as it exceeds the max of 500KB.

操作步骤：
1、新建英文目录
2、终端执行 yarn add -D vuepress，设置配置文件
3、在根目录下创建docs
4、创建MD文档，N个
5、执行 yarn docs:build 时报如上错误。

只要MD文件多到一定程度后，就会出现此问题。
网上搜索了各种方法尝试，均未能成功。
恳请老师能予以指导，具体如何处理这个问题？


搜索网上有指导如下方法的，但参考设置后，仍报前述错误，没有解决。
`
在项目的根目录下找到 .babelrc 文件，增加 "compact": false ，如：

{
  "compact": false,
  "presets": ["env", "react", "stage-0"],
  "plugins": [
    "transform-runtime"
  ]
}
如果不存在则手动创建该文件，并填写内容如：

{
  "compact": false
}
`
