const fs = require('fs');
const path = require('path');
const dirname = path.resolve(__dirname, './files/1');

async function exists(filename) {
    try {
        await fs.promises.stat(filename);
        return true;
    } catch (error) {
        if (error.code === 'ENOENT') {
            // 文件不存在
            return false;
        }
        throw error;
    }
}
async function test() {
    const result = await exists(dirname);
    if (result) {
        console.log("目录已存在，无需操作");
    } else {
        await fs.promises.mkdir(dirname);
        console.log("目录创建成功");
    }
};
test();
