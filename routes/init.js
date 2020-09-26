const express = require("express");
const app = express();
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");

/**
 * 下面代码的作用：
 * 当请求时，会根据请求路径（req.path）从指定的目录中寻找是否存在该文件，如果存在，直接响应文件内容，而不再移交给后续的中间件
 * 如果不存在该文件，则直接移交给后续的中间件处理
 * 默认情况下，如果映射的结果是一个目录，则会自动使用index.html
 */
// app.use(express.static(path.resolve(__dirname, "../public")));
// app.use(express.static(staticRoot, {
//   index: "default.html" // 默认为index.html
// }));

// app.use(express.urlencoded({ extend: true }));
app.use(require("./myUrlEncoded")); // 所有请求都会先经过自定义中间件处理
app.use(express.json());

app.post("/api/student", (req, res) => {
  console.log(req.body);
});

app.use(require("./errorMiddleware"));

const port = 12306;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});