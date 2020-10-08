const express = require("express");
const router = express.Router();
const adminServ = require("../../services/adminService");
const { asyncHandel } = require("../getSendResult");
const jwt = require("../jwt");

router.post('/login', asyncHandel(async (req, res) => {
    const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
    if (result) {
        // 登录成功
        let id = result.id;
        jwt.publish(res, undefined, {id: id});
    }
    return result;
}));

router.get("/whoami", asyncHandel(async (req, es) => {
    return await adminServ.getAdminById(req.userId);
}))

module.exports = router;