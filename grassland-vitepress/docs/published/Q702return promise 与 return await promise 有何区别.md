如

``` js
async function p1 () {
  return 3
}

async function p2 () {
  return Promise.resolve(3)
}

async function p3 () {
  return await Promise.resolve(3)
}
```