const mysql = require('mysql2');

// 创建数据库连接
const connection = mysql.createConnection({
  host: '127.0.0.1',
  // port: '3306', // 默认端口号
  user: 'root',
  password: '950825',
  database: 'companydb'
});

// simple query
// connection.query('select * from `company`;', (err, result) => {
//   // err 错误 result 结果
//   console.log(result);
// });

// insert
// connection.query(
//   'insert into `company`(`name`, location, buildDate) values("abc", "CN", curdate());', 
//   (err, result) => {
//     console.log(result);
//   }
// );

// update
// connection.query(
//   'update `company` set `name` = "bcd" where id = 4', 
//   (err, result) => {
//     console.log(result);
//   }
// );

// delete
connection.query(
  'delete from company where id = 4', 
  (err, result) => {
    console.log(result);
  }
);

connection.end();