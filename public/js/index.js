login.onclick = function () {
  fetch("/api/admin/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      loginId: "zzyu",
      loginPwd: "123"
    })
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    });
};

updateStu.onclick = function () {
  fetch("/api/student/561", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: "阿芳"
    }),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    });
};