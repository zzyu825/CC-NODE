import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as loginServ from "./service/loginService";

// loginServ.login("zzyu", "123").then(res => {
//   console.log(res);
// });

// loginServ.whoAmI().then(res => {
//   console.log(res);
// }).catch(err => {
//   console.dir(err);
// });

// 在网站被访问时，需要用token去换取用户的身份
store.dispatch('loginUser/whoAmI');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
