const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");

// express
const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve(__dirname, "public")));

// websocket
const io = socketIO(server);

io.on("connection", socket => {
  // 当有新的客户端连接到服务器之后，触发该事件
  console.log("新的客户端进来了");
  socket.on("msg", chunk => {
    // 监听客户端msg消息
    console.log(chunk.toString("utf-8"));
  });
  const timer = setInterval(() => {
    // 每隔两秒，发送一个消息到客户端，消息为test
    socket.emit("test", "test message from server");
  }, 2000);
  socket.on("disconnect", () => {
    clearInterval(timer);
    console.log("closed");
  });
});

// 监听端口
server.listen(12306, () => {
  console.log("server listening on 12306");
});
