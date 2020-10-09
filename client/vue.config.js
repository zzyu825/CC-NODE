const path = require("path");

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:12306"
            }
        }
    },
    outputDir: path.resolve(__dirname, "../public")
};