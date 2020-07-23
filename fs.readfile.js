const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './files/1.txt');
// fs.readFile(filename, (err, data) => { // 异步回调函数
//     console.log(data);
//     console.log(data.toString('utf8'));
// });
// fs.readFile(filename, 'utf8', (err, data) => {
//     console.log(data);
// });
// fs.readFile(filename, {encoding: 'utf8'}, (err, data) => {})

// Sync函数是同步的，会导致JS运行阻塞，极其影响性能
// 通常，在程序启动时运行有限的次数即可
// const data = fs.readFileSync(filename, 'utf8');
// console.log(data);

// node12.0+ promise

async function test() {
    const data = await fs.promises.readFile(filename, 'utf8');
    console.log(data);
}
test();
