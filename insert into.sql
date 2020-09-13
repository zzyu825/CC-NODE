-- 增加语句

INSERT INTO `student`(stuno,`name`, birthday,sex,phone,classid)
VALUES('500', '宇哥', '1995-1-1', TRUE, '13344445555', 2);

INSERT INTO `student`(stuno,`name`, birthday,sex,phone,classid)
VALUES('500', '宇哥', '1995-1-1', DEFAULT, '13344445555', 2);

-- sex不写，自动为默认值
INSERT INTO `student`(stuno,`name`, birthday,phone,classid)
VALUES('500', '宇哥', '1995-1-1', '13344445555', 2);

-- 增加多条数据
INSERT INTO `student`(stuno,`name`, birthday,phone,classid)
VALUES('500', '宇哥', '1995-1-1', '13344445555', 2),
('501', '赵哥', '1900-1-2', '13344445556', 2);


