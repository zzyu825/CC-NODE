// fetch("http://localhost:12306/api/student")
//     .then(res => res.json())
//     .then(res => console.log(res));

function jsonp(url) {
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    script.onload = () => {
        script.remove();
    };
}

function callback(data) {
    console.log(data);
}

jsonp("http://localhost:12306/api/student");