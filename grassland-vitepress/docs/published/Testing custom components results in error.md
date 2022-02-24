<!-- Please don't delete this template or we'll close your issue -->
<!-- Before creating an issue please make sure you are using the latest version of VuePress. -->

<!-- Please confirm you will submit an issue. -->
<!-- Issues which contain questions or support requests will be closed. -->
<!-- (Update "[ ]" to "[x]" to check a box) -->

- [x] I confirm that this is an issue rather than a question.

<!-- Please ask questions via following several ways. -->
<!-- https://vue-land.js.org/ -->
<!-- https://forum.vuejs.org/ -->
<!-- https://stackoverflow.com/questions/ask?tags=vuepress -->

## Bug report
Cannot run tests using vue-test-utils. I have followed the [official guide from vue-test-utils](https://vue-test-utils.vuejs.org/installation/), using both the `vue add unit-jest` method and the manual method.

I created a folder inside of .vuepress called components, where all my components reside. Inside of it I created a `tests` folder with the following content:

```js
import MyComponent from "@/.vuepress/components/MyComponent"

test('first-spec', () => {
  console.log(MyComponent);
})
```
My `jest.config.js` file is as follows:

```js
"jest": {
    "moduleNameMapper": {
      "@/(.*)": "<rootDir>/src/$1"
    },
    "roots": [
      "<rootDir>/src/.vuepress/components"
    ],
    "moduleFileExtensions": [
      "js",
      "json",
      "vue"
    ],
    "transform": {
      "^.+\\.js$": "babel-jest",
      ".*\\.(vue)$": "vue-jest"
    }
}
```

I added a simple `"test": "jest"` script inside of my `package.json` but I keep on getting this error:

```
src/.vuepress/components/tests/sample.spec.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Users/user/development/projects/my-project/docs/src/.vuepress/components/tests/sample.spec.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import MyCOmponent from "@/.vuepress/components/MyCOmponent";
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1728:14)
      at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:333:13)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.71 s
Ran all test suites.
error Command failed with exit code 1.
```

It looks like there is an issue in parsing the syntax used in the jest test files. I do not understand whether this has to do with my current configuration or an issue with vuepress and the way the packages are integrated.

I have looked into the docs but I cannot find any mention of how to test custom components. I tried this approach but it looks like there is a misconfiguration somewhere

Is there an official guide to test custom components? 
#### Steps to reproduce

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

See above

#### What is expected?

Run tests correctly, without syntax errors

#### What is actually happening?

Tests are not working

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
```
Environment Info:

  System:
    OS: macOS 10.15.7
    CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
  Binaries:
    Node: 14.15.0 - ~/development/tools/nvm/versions/node/v14.15.0/bin/node
    Yarn: 1.22.17 - ~/development/tools/nvm/versions/node/v14.15.0/bin/yarn
    npm: 8.1.2 - ~/development/tools/nvm/versions/node/v14.15.0/bin/npm
  Browsers:
    Chrome: 95.0.4638.69
    Edge: Not Found
    Firefox: 94.0.1
    Safari: 14.0.1
  npmPackages:
    @vuepress/core:  1.8.2 
    @vuepress/theme-default:  1.8.2 
    vuepress: ^1.5.3 => 1.8.2 
  npmGlobalPackages:
    vuepress: Not Found
```