const express = require("express");
const app = express();

app.use(require("./staticMiddleware"));

app.get("/news", 
(req, res, next) => {
  console.log("handel1");
  // res.status(200);
  // res.end();
  // next();
  throw new Error("abc");
  // 相当于 next(new Error("abc"))
}, 
// (err, req, res, next) => {
//   console.log("handel2");
//   console.log(err);
//   next();
// }
);

// app.get("/news", (req, res, next) => {
//   console.log("handel3");
//   next();
// });

// 不写第一个参数，默认匹配所有
// 能匹配 /news /news/abc /news/abc /news/abc/123
// 不能匹配 /n /a /newsabc
app.use("/news", require("./errorMiddleware"));

const port = 12306;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});