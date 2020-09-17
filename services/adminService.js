// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员

const Admin = require('../models/Admin');
// 增
exports.addAdmin = async function (adminObj, operateId) {
  // 必须判断adminObj的各种属性是否合理（验证）
  // 必须判断账号是否已存在，操作员是否有权限（安全）
  const ins = await Admin.create(adminObj);
  return ins.toJSON();
};

// 删
exports.deleteAdmin = async function (adminId) {
  // 必须判断删除后管理员至少得有一个
  // // 方式1
  // // 1、得到实例
  // const ins = await Admin.findByPk(adminId);
  // console.log(ins);
  // // 2、删除实例
  // if (ins) {
  //     await ins.destroy();
  // }
  // 2、方式2
  const result = await Admin.destroy({
    where: {
      id: adminId,
    },
  });
  return result;
};

exports.updateAdmin = async function (id, adminObj) {
  // 方式1
  // // 1. 得到实例
  // const ins = await Admin.findByPk(id);
  // ins.loginId = adminObj.loginId;
  // // 2. 保存
  // ins.save();

  // 方式2
  const result = await Admin.update(adminObj, {
    where: {
      id,
    },
  });
  return result;
};

// 登录
exports.login = async function(loginId, loginPwd) {
  const result = await Admin.findOne({
    where: {
      loginId,
      loginPwd
    }
  });
  if (result && result.loginId === loginId && result.loginPwd === loginPwd) {
    return result.toJSON();
  };
  return null;
};

// 根据id查询
exports.getAdminById = async function(id) {
  const result = await Admin.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

// 查询所有
exports.getAdmins = async function() {
  const result = await Admin.findAll();
  return JSON.parse(JSON.stringify(result));
};