import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);
Vue.config.productionTip = false;
import M from "materialize-css";

new Vue({
  render: h => h(App),
  mounted(){
    M.AutoInit();
  }
}).$mount('#app');

