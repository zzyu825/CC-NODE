import request from "./request";

function delay(duration = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

export async function login(loginId, loginPwd) {
    await delay(2000);
    const res = await request().post("/api/admin/login", {
        loginId,
        loginPwd
    });
    return res.data;
}

export function loginOut() {
    localStorage.removeItem("token");
}

export async function whoAmI() {
    await delay(2000);
    const res = await request().get("/api/admin/whoami");
    return res.data;
}