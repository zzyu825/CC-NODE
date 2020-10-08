const { pathToRegexp } = require("path-to-regexp");
const { getErr } = require("./getSendResult");
const jwt = require("./jwt");

const needTokenApi = [
  { method: "POST", path: "/api/student" },
  { method: "PUT", path: "/api/student/:id" },
  { method: "GET", path: "/api/student" },
  { method: "GET", path: "/api/admin/whoami" },
];

// 用于解析token
module.exports = (req, res, next) => {
  // /api/student/:id 和 /api/student/1234
  const apis = needTokenApi.filter(api => {
    const reg = pathToRegexp(api.path);
    return api.method === req.method && reg.test(req.path);
  });
  if (apis.length === 0) {
    next();
    return;
  }
  const result = jwt.verify(req);
  if (result) {
    // 认证通过
    req.userId = result.id;
    next();
  } else {
    handleNonToken(req, res, next);
  }
}

// 处理没有认证的情况
function handleNonToken(req, res, next) {
  res.status(403).send(getErr("you dont have any token to access the api", 403));
}