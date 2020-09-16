// 增加
const Admin = require('./models/Admin');
// 同步方法，创建模型实例
// const ins = Admin.build({
//     loginId: 'zzy',
//     loginPwd: '123'
// });
// ins.loginId = 'zzyu';
// 保存到数据库
// ins.save().then(() => {
//     console.log('新建管理员成功');
// });

// build和save合并
Admin.create({
    loginId: 'zzy',
    loginPwd: '123456'
}).then((ins) => {
    console.log(ins.id, ins.loginId, ins.loginPwd);
});