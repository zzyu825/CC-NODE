const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, "./files/1.txt");
const rs = fs.createReadStream(filename, {
    encoding: 'utf8',
    highWaterMark: 1,
    autoClose: true
});

rs.on('open', () => {
    console.log("文件打开了");
});

rs.on('error', () => {
    console.log("出错了");
});

rs.on('close', () => {
    console.log("文件关闭了");
});

// rs.close();

rs.on('data', chunk => {
    console.log("读到了一部分数据：", chunk);
    rs.pause();
});

rs.on('pause', () => {
    console.log("暂停");
    setTimeout(() => {
        rs.resume();
    }, 1000);
});

rs.on('resume', () => {
    console.log("恢复了");
});

rs.on('end', () => {
    console.log("全部数据读取完毕");
})