const mysql = require('mysql2/promise');
const pool = mysql.createPool({ // 连接池
  host: '127.0.0.1',
  user: 'root',
  password: '950825',
  database: 'companydb',
  multipleStatements: true
});

async function test(id) {
  // const sql = `select * from employee where id=?;`;
  const sql = `select * from employee where \`name\` like concat('%', ?, '%');`;
  const [ result ] = await pool.execute(sql, [id]);
  console.log(result);
};

// test(`'';insert into company(\`name\`, location, buildDate) values('asd', '123', curdate())`);
test('袁');