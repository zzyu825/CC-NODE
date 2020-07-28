const fs = require('fs');
const path = require('path');

// 方式1
async function method1() {
    const from = path.resolve(__dirname, './files/a.txt');
    const to = path.resolve(__dirname, './files/a1.txt');
    console.time('方式1');
    const content = await fs.promises.readFile(from);
    await fs.promises.writeFile(to, content);
    console.timeEnd('方式1');
    console.log('复制完成');
}

// 方式2
async function method2() {
    const from = path.resolve(__dirname, './files/a.txt');
    const to = path.resolve(__dirname, './files/a1.txt');
    console.time('方式2');
    const rs = fs.createReadStream(from);
    const ws = fs.createWriteStream(to);

    rs.on('data', chunk => {
        // 读到一部分数据
        const flag = ws.write(chunk);
        if (!flag) {
            // 下一次写入，会造成背压
            rs.pause();
        }
    });

    ws.on('drain', () => {
        // 可以继续写了
        rs.resume();
    });

    rs.on('close', () => {
        // 写完了
        ws.end(); // 关闭写入流
        console.timeEnd('方式2');
        console.log('复制完成');
    })
}

// 方式3
async function method3() {
    const from = path.resolve(__dirname, './files/a.txt');
    const to = path.resolve(__dirname, './files/a1.txt');
    console.time('方式3');
    const rs = fs.createReadStream(from);
    const ws = fs.createWriteStream(to);

    rs.pipe(ws);

    rs.on("close", () => {
        console.timeEnd("方式3");
    });
}

// method1();

// method2();

method3();
