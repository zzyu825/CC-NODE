const adminService = require('./services/adminService');

// adminService.addAdmin({
//     loginId: 'abc',
//     loginPwd: '123'
// });

// adminService.deleteAdmin(3).then(r => {
//     console.log(r);
// });

adminService
  .updateAdmin(2, {
    loginId: "aaaaaa",
  })
  .then((r) => {
    console.log(r);
  });