require('./init');

const express = require("express");
const app = express();



const port = 12306;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
