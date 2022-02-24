When I use vuepress 1.8.2，I add ` smoothScroll: true`, it works well, but when I comes to vuepress 2.0.0-beta.31, it don't works. Both are default-theme.

config.js
```
module.exports = {
    // plugins: ['vuepress-plugin-smooth-scroll'],    
    themeConfig: {
        smoothScroll: true,
        ...
```

I have tried to install that plugin, but it still has no effect.