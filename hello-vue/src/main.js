import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$ajax=axios;
Vue.prototype.$axios=axios;
// Vue.use(axios);
Vue.use(router);
Vue.use(Element);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
