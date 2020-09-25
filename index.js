require('./init');

const express = require("express");
const app = express();
// 配置一个请求映射，如果请求方法和请求路径均满足匹配，交给处理函数进行处理
// app.请求方法('请求路径', 处理函数)
app.get("/news/:id", (req, res) => {
  // req和res是被express封装过后的对象
  // 获取请求信息
  console.log("请求头", req.headers);
  console.log("请求路径", req.path);
  console.log("query", req.query);
  console.log("params", req.params);

  // 响应
  // res.send('<h1>hello express</h1>');
  // res.send([1, 2, 3]);
  // res.send({name: 123});
  // res.setHeader("a", "123");
  // res.status(302).header("location", "https://duyi.ke.qq.com").end();
  // res.status(302).location("https://duyi.ke.qq.com").end();
  res.redirect(302, "https://duyi.ke.qq.com");
});
// 匹配任何get请求
app.get("*", (req, res) => {
  console.log("abc");
});
const port = 12306;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
