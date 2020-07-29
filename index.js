const net = require('net');
const server = net.createServer();
const fs = require('fs');
const path = require('path');

server.listen(12306);

server.on('listening', () => {
    console.log('已监听到12306端口');
});

server.on('connection', socket => {
    console.log('有客户端连接到服务器');

    socket.on('data', async chunk => {
        // console.log(chunk.toString('utf-8'));
        const filename = path.resolve(__dirname, './files/harden.jpg');
        const bodyBuffer = await fs.promises.readFile(filename);
        const headBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: image/jpeg

`,
            'utf-8'
        );
        const result = Buffer.concat([headBuffer, bodyBuffer]);
        socket.write(result);
        socket.end();
    });

    socket.on('end', () => {
        console.log('连接关闭了');
    });
});