const { sequelize, DataTypes } = require('./db');

// 创建一个模型对象(类)
module.exports = sequelize.define('Admin', {
  loginId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loginPwd: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // freezeTableName: true, // 表名：不配置默认为Admins(复数形式)，配置后为Admin
  // tableName: 'admin', // 自定义表名 
  createdAt: 'createTime',
  updatedAt: false,
  paranoid: true // 从此以后，该表的数据不会真正删除，而是增加一列deletedAt，记录删除的时间
});

// (async function () {
//   Admin.sync({
//     alter: true
//   })
// })();

// module.exports = Admin;