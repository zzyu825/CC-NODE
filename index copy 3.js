const mysql = require('mysql2/promise');

// 创建数据库连接
async function test(id) {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    // port: '3306', // 默认端口号
    user: 'root',
    password: '950825',
    database: 'companydb',
    multipleStatements: true // 运行多条sql语句
  });
  // const sql = `select * from employee where id=${id};`;
  const sql = `select * from employee where id=?;`;
  // console.log(sql);
  const [ result ] = await connection.execute(sql, [id]); // 预编译查询
  console.log(result);
  connection.end();
};

// test(3);

// 防止sql注入
// id由页面发送ajax请求传递而来
test(`'';insert into company(\`name\`, location, buildDate) values('asd', '123', curdate())`);