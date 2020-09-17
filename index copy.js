require("./models/relation");
// require("./spider/fetchBooks");

const adminServ = require('./services/adminService');

// adminServ.login("Zzyu", "123").then(r => {
//     console.log(r);
// });
// adminServ.getAdminById(1).then(r => {
//     console.log(r);
// });
adminServ.getAdmins().then(r => {
    console.log(r);
});