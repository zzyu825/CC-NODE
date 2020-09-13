const mysql = require('mysql2/promise');

// 创建数据库连接
async function test() {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    // port: '3306', // 默认端口号
    user: 'root',
    password: '950825',
    database: 'companydb'
  });
  const [ result ] = await connection.query('select * from `company`;');
  console.log(result);
  connection.end();
};

test();