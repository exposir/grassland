
#### What is expected?
run docs:build success

#### What is actually happening?
run docs:build filed fail
#### Other relevant information
window10 

- Output of `npx vuepress info` in my VuePress project:
`(undefined) ./node_modules/get-uri/dist/file.js
Module not found: Error: Can't resolve 'file-uri-to-path' in 'D:\project\onlinedoc\node_modules\get-uri\dist'
resolve 'file-uri-to-path' in 'D:\project\onlinedoc\node_modules\get-uri\dist'
  Parsed request is a module
  using description file: D:\project\onlinedoc\node_modules\get-uri\package.json (relative path: ./dist)
    resolve as module
      looking for modules in D:\project\onlinedoc\node_modules\@vuepress\core\lib\node\webpack\node_modules
        using description file: D:\project\onlinedoc\node_modules\@vuepress\core\package.json (relative path: ./lib/node/webpack/node_modules)
          using description file: D:\project\onlinedoc\node_modules\@vuepress\core\package.json (relative path: ./lib/node/webpack/node_modules/file-uri-to-path)
            no extension
              D:\project\onlinedoc\node_modules\@vuepress\core\lib\node\webpack\node_modules\file-uri-to-path doesn't exist
            .js
              D:\project\onlinedoc\node_modules\@vuepress\core\lib\node\webpack\node_modules\file-uri-to-path.js doesn't exist
            .jsx
              D:\project\onlinedoc\node_modules\@vuepress\core\lib\node\webpack\node_modules\file-uri-to-path.jsx doesn't exist
            .vue
              D:\project\onlinedoc\node_modules\@vuepress\core\lib\node\webpack\node_modules\file-uri-to-path.vue doesn't exist
            .json
              D:\project\onlinedoc\node_modules\@vuepress\core\lib\node\webpack\node_modules\file-uri-to-path.json doesn't exist
            .styl
              D:\project\onlinedoc\node_modules\@vuepress\core\lib\node\webpack\node_modules\file-uri-to-path.styl doesn't exist
            as directory
              D:\project\onlinedoc\node_modules\@vuepress\core\lib\node\webpack\node_modules\file-uri-to-path doesn't exist
`
