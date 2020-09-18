require("./models/relation");

const md5 = require('md5');
// console.log(md5(''));
// console.log(md5('asdzxcasdzxcasdzxcasdzxcasdzxcasdzxc'));

const adminServ = require('./services/adminService');
// adminServ.addAdmin({
//     loginId: 'zzy',
//     loginPwd: 123
// });
// adminServ.addAdmin({
//     loginId: 'zzyu',
//     loginPwd: 'asdZZY.95'
// });
// adminServ.updateAdmin(5, {
//     loginPwd: '123'
// });
adminServ.login("zzyu", "123").then((r) => {
    console.log(r);
});

