SELECT AVG(salary) as `avg`, id
FROM employee;

-- 查询员工数量
SELECT COUNT(id)
FROM employee;

-- 前提：id从1开始，且连续
SELECT id
FROM employee
ORDER BY id DESC
LIMIT 0,1;

-- 效率低
SELECT COUNT(*)
FROM employee;

SELECT count(id) as 员工数量,
avg(salary) as 平均薪资,
sum(salary) as 总薪资,
min(salary) as 最小薪资
FROM employee;
