import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";
import PageThree from "./components/PageThree/PageThree";

Vue.config.productionTip = false

Vue.use(VueRouter);

// 定义路由
let routes=[
    {
      path:'/PageOne',
      component:PageOne
    },
    {
      path:'/PageTwo',
      component:PageTwo
    },
    {
      path:'/PageThree',
      component:PageThree
    }
]

// 创建router实例
let router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

new Vue({
  el:'#app',
  router,
  render: h => h(App)
}).$mount('#app')

// router.go('/PageOne')
