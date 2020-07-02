const url = require('url');

// const URL = url.parse("https://nodejs.org:80/a/b/c?t=3&u=5#abc");
const URL = new url.URL("https://nodejs.org:80/a/b/c?t=3&u=5#abc");
console.log(URL);

console.log(URL.searchParams.has('a'));
console.log(URL.searchParams.get('t'));
console.log(URL.searchParams.set('a', 1));

const obj = {
    href: "https://nodejs.org:80/a/b/c?t=3&u=5#abc",
    origin: "https://nodejs.org:80",
    protocol: "https:",
    username: "",
    password: "",
    host: "nodejs.org:80",
    hostname: "nodejs.org",
    port: "80",
    pathname: "/a/b/c",
    search: "?t=3&u=5",
    hash: "#abc"
};
  
const urls = url.format(obj);
console.log(urls);