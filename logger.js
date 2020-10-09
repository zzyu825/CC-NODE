const log4js = require('log4js');
const path = require('path');

function getCommonAppender(pathSeg) {
  return {
    // 定义一个sql日志出口
    type: "dateFile",
    filename: path.resolve(__dirname, "logs", pathSeg, "logging.log"),
    maxLogSize: 1024 * 1024, // 配置文件的最大字节数
    keepFileExt: true,
    daysToKeep: 3,
    layout: {
      type: "pattern",
      pattern: "%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n"
    }
  }
}

log4js.configure({
  appenders: {
    sql: getCommonAppender("sql"),
    default: {
      type: "stdout"
    },
    api: getCommonAppender("api")
  },
  categories: {
    sql: {
      appenders: ["sql"], // 该分类使用出口sql的配置写入日志
      level: "all"
    },
    default: {
      appenders: ["default"],
      level: "all"
    },
    api: {
      appenders: ["api"],
      level: "all"
    }
  }
});

// 任何情况退出程序前，先做日志记录
process.on("exit", () => {
  log4js.shutdown();
});

const sqlLogger = log4js.getLogger("sql");
const defaultLogger = log4js.getLogger();
const apiLogger = log4js.getLogger("api");

module.exports = {
  sqlLogger,
  defaultLogger,
  apiLogger
}