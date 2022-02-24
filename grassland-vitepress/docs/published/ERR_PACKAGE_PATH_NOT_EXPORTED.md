Followed the steps given: https://vitepress.vuejs.org/guide/getting-started.html

```
yarn run v1.22.4
$ vitepress dev docs
vitepress v0.20.1
failed to start server. error:
 Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './dist/vue.runtime.esm-bundler.js' is not defined by "exports" in C:\zdrive\git\vitepress-starter\node_modules\vue\package.json
    at applyExports (internal/modules/cjs/loader.js:490:9)
    at resolveExports (internal/modules/cjs/loader.js:506:23)
    at Function.Module._findPath (internal/modules/cjs/loader.js:634:31)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:952:27)
    at Function.resolve (internal/modules/cjs/helpers.js:78:19)
    at resolveAliases (C:\zdrive\git\vitepress-starter\node_modules\vitepress\dist\node\serve-3fdbda2c.js:12333:28)
    at resolveConfig (C:\zdrive\git\vitepress-starter\node_modules\vitepress\dist\node\serve-3fdbda2c.js:13374:12)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async Object.createServer (C:\zdrive\git\vitepress-starter\node_modules\vitepress\dist\node\serve-3fdbda2c.js:36633:18) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
