const path = require('path');

const basename = path.basename('ab/cd/ef/gh/i.js', '.html');
console.log(basename);

console.log(path.sep);

console.log(process.env.PATH.split(path.delimiter));

console.log(path.dirname('a/b/c.js'));

console.log(path.extname('a/b/c.js'));

const basepath = "a/b"
console.log(path.join(basepath, '/', 'c.js'));
console.log(path.join(basepath, '../', 'c.js'));

console.log(path.relative('a/b/c/d', 'a/b/e/f'));

console.log(path.resolve('./os.js'));
console.log(path.resolve(__dirname, './os.js'));