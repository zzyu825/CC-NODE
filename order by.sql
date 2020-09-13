SELECT * from employee
WHERE `name` like '张%' and (ismale=0 and salary>=12000
or
birthday>='1996-1-1')
ORDER BY salary desc;

SELECT *, case ismale
when 1 then '男'
else '女'
end sex from employee
ORDER BY sex asc, salary desc;