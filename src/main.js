import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";


// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

axios.defaults.headers.common['apptoken'] = '5SF5by2/C/IuSpZFIxSi6ZtROrzhK6DvvOI9UpUeeJ4vizmtVo+UDZ6873Pbk4BEFPB9exs8QV0OSmzsoRBKlQ==';
axios.defaults.headers.common['ticket'] = 'lRkEO3GvpvjFd9hkdoLeemkBdGccnFT0yN-1iaIrsSAvqbwSgc2_ZGV7HBity732aBXfLltb5qaW6gTYbuV_cg==';


// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  // console.log('response is ', response);
  let res = response.data;
  if(res.Code == 1){
    return res;
  }else if(res.status == 0){
    // window.location.href = '/#/login';
    return Promise.reject(res);
  }else{
    // Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  // let res = error.response;
  // Message.error(res.data.message);
  return Promise.reject(error);
});

Vue.use(VueAxios,axios);
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
