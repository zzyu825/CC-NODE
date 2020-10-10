const { createProxyMiddleware } = require("http-proxy-middleware");

const context = "/data";
module.exports = createProxyMiddleware(context, {
  target: "http://yuanjin.tech:5100",
  pathRewrite: function (path, req) {
    return path.substr(context.length);
  }
})
