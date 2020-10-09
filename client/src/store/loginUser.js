import * as loginServ from "../service/loginService";

export default {
    namespaced: true,
    state: {
        data: null,
        isLoading: false
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setIsLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        async login({ commit }, { loginId, loginPwd }) {
            commit("setIsLoading", true);
            const { data } = await loginServ.login(loginId, loginPwd);
            commit("setIsLoading", false);
            commit("setData", data);
            return data;
        },
        loginOut({ commit }) {
            commit("setData", null);
            loginServ.loginOut();
        },
        async whoAmI({ commit }) {
            commit("setIsLoading", true);
            try {
                const { data } = await loginServ.whoAmI();
                commit("setData", data);
            } catch (error) {
                commit("setData", null)
            }
            commit("setIsLoading", false);
        }
    }
};