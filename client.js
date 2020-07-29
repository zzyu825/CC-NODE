const net = require('net');

const socket = net.createConnection({
    host: 'www.baidu.com',
    port: 80
}, () => {
    console.log('连接成功');
});
// console.log(socket);

/**
 * 提取响应字符串中的消息头和消息体
 * @param {*} res 
 */
function parseResponse(res) {
    const index = res.indexOf('\r\n\r\n');
    const head = res.substring(0, index);
    const body = res.substring(index + 2);
    const headParts = head.split('\r\n');
    const headArray = headParts.slice(1).map(str => {
        return str.split(':').map(s => s.trim());
    });
    const header = headArray.reduce((a, b) => {
        a[bp[0]] = b[1];
        return a;
    }, {});
    return {
        header,
        body: body.trimStart()
    };
}

function isOver() {
    // 需要接收的消息体的总字节数
    const contentLength = +res.header['Content-Length'];
    const curReceivedLength = Buffer.from(receive.body, 'utf-8').byteLength;
    console.log(contentLength, curReceivedLength);
    return curReceivedLength > contentLength;
}

let res = null;
socket.on('data', chunk => {
    const response = chunk.toString('utf-8');
    // console.log(response);
    if (!res) {
        // 第一次
        res = parseResponse(response);
        if (isOver()) {
            socket.end();
        }
        return;
    }
    res.body += response;
    if (isOver()) {
        socket.end();
        return;
    }
});

socket.write(`GET / HTTP/1.1
Host: www.baidu.com
Connection: keep-alive

`);

socket.on('close', () => {
    console.log(res.body);
    console.log('结束了');
})