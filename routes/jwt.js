const jwt = require("jsonwebtoken");

const secrect = "zzyu";
const cookieKey = "token";

// 颁发jwt
function publish(res, maxAge = 3600 * 26, info = {}) {
  const token = jwt.sign(info, secrect, {
    expiresIn: maxAge
  });
  // 添加到其他传输
  res.header("authorization", token);
}

// 验证jwt
function verify(req) {
  let token = req.headers.authorization;
  if (!token) {
    return null;
  }
  // authorization: bearer token
  token = token.split(" ");
  token = token.length === 1 ? token[0] : token[1]
  try {
    const result = jwt.verify(token, secrect);
    return result;
  } catch (error) {
    return null;
  }
};

module.exports = {
  publish,
  verify
}