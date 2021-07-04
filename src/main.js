// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 设置反向代理,前端请求默认发送至指定url
axios.defaults.baseURL = 'http://localhost:8080'
// 使请求带上凭证信息
// axios.defaults.withCredentials = true

// 全局注册，之后可在其他组件中通过this.$axios发送数据
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mavonEditor)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  // 这个函数的作用就是生成一个 VNode节点，render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
