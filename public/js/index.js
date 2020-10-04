// 简单请求

// fetch("http://localhost:12306/api/student")
//   .then(res => res.json())
//   .then(res => console.log(res));

// 预检请求
fetch("http://localhost:12306/api/student", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    a: 1,
  },
  credentials: "include",
})
  .then((resp) => resp.json())
  .then((resp) => {
    console.log(resp);
  });