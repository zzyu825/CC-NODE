const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './files/2.txt');

async function test() {
    // await fs.promises.writeFile(filename, '!', {
    //     flag: 'a' // append追加内容
    // });
    const buffer = Buffer.from('abc', 'utf8');
    await fs.promises.writeFile(filename, buffer);
    console.log('写入成功');
};
test();
