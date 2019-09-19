// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入vuex
import store from './store/'
// 配置插件
import VueResource from 'vue-resource'
import MintUi from 'mint-ui'
// 导入样式
// import 'mint-ui/lib/style.css'
//全局使用
Vue.use(VueResource);
Vue.use(MintUi);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//这里导入进来之后，就使用它，store写在这个地方
  components: { App },
  template: '<App/>'
})
