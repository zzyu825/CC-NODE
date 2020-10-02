const express = require("express");
const router = express.Router();
const adminServ = require("../../services/adminService");
const { asyncHandel } = require("../getSendResult");
const cryptor = require("../../util/crypt");

router.post('/login', asyncHandel(async (req, res) => {
    const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
    if (result) {
        // 登录成功
        let id = result.id;
        id = cryptor.encrypt(id.toString());
        res.cookie("token", id, {
            path: '/',
            domain: 'localhost',
            maxAge: 7 * 24 * 3600 * 1000, // 毫秒数
            httponly: 'true',
            // signed: true
        });
        // res.header("set-cookie", `token=${result.id}; path=/; domain=localhost; max-age=3600; httponly`)
        res.header("authorization", id);
    }
    return result;
}));

module.exports = router;