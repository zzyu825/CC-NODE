const Class = require("../models/Class");
exports.addClass = async function (obj) {
  const ins = await Class.create(obj);
  return ins.toJSON();
};

exports.deleteClass = async function (id) {
  return await Class.destroy({
    where: {
      id,
    },
  });
};

exports.updateClass = async function (id, obj) {
  return await Class.update(obj, {
    where: {
      id,
    },
  });
};

// 根据id查询
exports.getClassById = async function (id) {
  const result = await Class.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

// 查询全部
exports.getClasses = async function () {
  const result = await Class.findAll();
  return JSON.parse(JSON.stringify(result));
};
