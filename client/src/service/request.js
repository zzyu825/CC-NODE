// 1.发送请求时，如果有token，需要附带到响应头中
// 2.响应的时候，如果有token，保存token到本地（localstorage）
// 3.响应的时候，如果响应的消息码是403（没有token，token失效），在本地删除token

import axios from "axios";
export default function() {
    const token = localStorage.getItem("token");
    let instance = axios;
    // 1.发送请求时，如果有token，需要附带到响应头中
    if (token) {
        instance = axios.create({
            headers: {
                "authorization": token
            }
        });
    }

    instance.interceptors.response.use(res => {
        // 2.响应的时候，如果有token，保存token到本地（localstorage）
        if (res.headers.authorization) {
            localStorage.setItem("token", res.headers.authorization);
        }
        return res;
    }, err => {
        // 3.响应的时候，如果响应的消息码是403（没有token，token失效），在本地删除token
        if (err.response.status === 403) {
            localStorage.removeItem("token");
        }
        return Promise.reject(err);
    });
    
    return instance;
}