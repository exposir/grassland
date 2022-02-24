## Bug report
There is an duplicated page key for two different pages. Shouldn't the page key be unique?

![image](https://user-images.githubusercontent.com/4746061/130309130-a7f27fae-1b93-4bd2-bcf2-981a27b95940.png)

There are two pages , `path: "/manual/cards/config/lotus-ap-worker.html"` and `path: "/manual/cards/config/lotus-c2-worker.html"`, their has the same page `v-44af8f26`.

- Output of `npx vuepress info` in my VuePress project:
```
Environment Info:

  System:
    OS: Linux 5.8 Ubuntu 20.04.2 LTS (Focal Fossa)
    CPU: (16) x64 Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz
  Binaries:
    Node: 12.16.1 - /usr/local/nodejs/bin/node
    Yarn: 1.22.4 - /usr/local/nodejs/bin/yarn
    npm: 6.14.5 - /usr/local/nodejs/bin/npm
  Browsers:
    Chrome: 84.0.4147.135
    Firefox: 90.0
  npmPackages:
    @vuepress/core:  1.8.2 
    @vuepress/theme-default:  1.8.2 
    vuepress: ^1.8.2 => 1.8.2 
  npmGlobalPackages:
    vuepress: 1.0.2

```