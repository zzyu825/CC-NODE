const jwt = require("jsonwebtoken");

const secrect = "zzyu"
const token = jwt.sign({
  id: 1,
  name: "宇哥"
}, secrect, {
  expiresIn: 3600
});
// console.log(token);
// const decoded = jwt.decode(token); // 不会验证
try {
  const decoded = jwt.verify(token, secrect);
  console.log(decoded);
} catch (error) {
  console.log("jwt无效");
}

