// 根据姓名、年龄、性别查询员工
function test(name, age, sex) {
    let sql = 'select * from employee where 1 = 1';
    const params = [];
    if (name !== undefined) {
        sql += ' and name = ?';
        params.push(name);
    }
    if (age !== undefined) {
        sql += ' and age = ?';
        params.push(age);
    }
    if (sex !== undefined) {
        sql += ' and sex = ?';
        params.push(sex);
    }
    pool.execute(sql, params);
}