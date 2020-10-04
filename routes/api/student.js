const express = require("express");
const router = express.Router();
const stuServ = require("../../services/studentService");
const { asyncHandel } = require("../getSendResult");
router.get('/', async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sex = req.query.sex || -1;
    const name = req.query.name || "";
    const result =  await stuServ.getStudents(page, limit, sex, name);
    const json = JSON.stringify(result);
    const script = `callback(${json})`;
    res.header("content-type", "application/javascript").send(script);
});

router.get('/:id', asyncHandel(async (req, res) => {
    return await stuServ.getStudentById(req.params.id);
}));

router.post('/', asyncHandel(async(req, res, next) => {
    return await stuServ.addStudent(req.body)
}));

router.delete('/:id', asyncHandel(async(req, res, next) => {
    return await stuServ.deleteStudent(req.params.id);
}));

router.put('/:id', asyncHandel(async (req, res, next) => {
    return await stuServ.updateStudent(req.params.id, req.body);
}));

module.exports = router;