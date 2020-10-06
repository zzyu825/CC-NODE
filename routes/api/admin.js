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
        req.session.loginUser = result;
    }
    return result;
}));

module.exports = router;