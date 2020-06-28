// function require(path) {
//     // 1、将模块路径转为绝对路径：D:\lesson\node\lesson\myModule.js
//     // 2、判断该模块是否已有缓存
//     // if (require.cache['D:\\lesson\\node\\lesson\\myModule.js']) {
//     //     return require.cache['D:\\lesson\\node\\lesson\\myModule.js'].result
//     // }
//     // 3、读取文件内容
//     // 4、包裹一个函数

//     function __temp(module, exports, require, __dirname, __filename) {
//         console.log('当前模块路径：', __dirname);
//         console.log('当前模块文件：', __filename);
//         exports.c = 3;
//         module.exports = {
//             a: 1,
//             b: 2
//         }
//         this.m = 5
//     }

//     // 6、创建module对象
//     module.exports = {};
//     const exports = module.exports;

//     __temp.call(module.exports, exports, require, module.path, module.filename);
//     return module.exports;
// }

// console.log(require);
console.log(require.resolve('./a.js'));
const result = require('./myModule');
console.log(result);