require("./models/relation");
// const Book = require('./services/bookService');
const Student = require('./services/studentService');

// Book.getBookById(1).then(r => {
//     console.log(r);
// });

// Book.getBooks(1, 5, '美').then(r => {
//     console.log(r);
// });

Student.getStudents(1, 5, '男', '彭').then(r => {
    console.log(r);
})