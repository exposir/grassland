const axios = require("axios");
const fs = require("fs");

axios(
  "https://api.github.com/repos/exposir/issue/issues?state=all&per_page=100"
).then((res) => {
  console.log(res);
  res.data.forEach((item) => {
    console.log(item);
    fs.writeFileSync(`../grassland-vitepress/docs/${item.title}.md`, item.body);
  });
});
