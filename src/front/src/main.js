import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

Vue.config.productionTip = false

// TODO: axios config
axios.defaults.baseURL = process.env.VUE_APP_AXIOS_PATH;

new Vue({
  render: h => h(App),
}).$mount('#app')
