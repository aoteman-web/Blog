import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Articles from "@/components/Articles";
import File from "@/components/File";
import About from "@/components/About";
import Book from "@/components/Book"

Vue.config.productionTip = false;

// 避免触发同一个路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter);

// 定义路由
let routes=[
    {
        path:'/',
        redirect:'/articles',
    },
    {
      path:'/articles',
      component:Articles,
    },
    {
      path:'/file',
      component:File,
    },
    {
      path:'/about',
      component:About,
    },
    {
        path:'/book',
        component:Book,
    }
];

// 创建router实例
let router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
  el:'#app',
  router,
  render: h => h(App)
}).$mount('#app');
