<template>
  <div id="app">
    <div class="top">
      <div class="header-top">
        <div class="button">
          <div><router-link tag="div" class="tab_item" to="/articles">首页</router-link></div>
          <div><router-link tag="div" class="tab_item" to="/file">归档</router-link></div>
          <div><router-link tag="div" class="tab_item" to="/about">关于</router-link></div>
          <div><router-link tag="div" class="tab_item" to="/book">订阅</router-link></div>
        </div>
      </div>
      <div class="header-bottom">
        <h1 class="h1">秋过冬漫长</h1>
        <p>没有比脚更长的路，走过去，前面是个天</p>
      </div>
    </div>
    <div class="content">
      <div class="cont-left">
        <router-view></router-view>
      </div>
      <div class="cont-right">
        <input type="text" value="搜索" onfocus="javascript:if(this.value='搜索')this.value=''"
               onblur="if(this.value=='')this.value='搜索'">
        <latest-blogs></latest-blogs>
        <sort></sort>
        <tag></tag>
        <filing></filing>
        <interlink></interlink>
      </div>
    </div>
    <div class="toTop" @click="toTop()"><img src="../image/toTop.png" width="60" height="50"></div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "./components/Bottom";
import latestBlogs from "./components/latestBlog";
import sort from "components/sort";
import tag from "components/tag"
import interlink from "components/interlink";
import Filing from "components/filing";

export default {
  name: 'App',
  data() {
    return {
      articles: {}
    }
  },
  methods: {
    toTop(){
      let timer = -1
      let scrollTo = document.documentElement.scrollTop || document.body.scrollTop
      if ( timer === -1 ){
          timer = setInterval(() => {
          scrollTo -= 20
          if( scrollTo <= 0 ) {
             scrollTo = 0
             window.clearInterval(timer)
             timer = -1
          }
          window.scrollTo(0,scrollTo)
        }, 10);
      }
    }
  },
  components: {
    Filing,
    Bottom,
    latestBlogs,
    sort,
    tag,
    interlink
  }
}
</script>

<style>
  body{
    color: #333333;
    width: 100%;
    background: url("../image/bg.png") no-repeat top center;
    margin: 0;
    padding: 0;
    border: 0;
  }
  #app{
    width: 89%;
    height: 100%;
    margin: 0 auto;
  }
  .top{
    width: 100%;
    height: 300px;
    color: white;
  }
  .header-top{
    height: 100px;
  }
  .button{
    float: right;
    margin-top: 30px;
  }
  .button div{
    width: 90px;
    height: 35px;
    text-align: center;
    font-size: 16px;
    line-height: 35px;
    display: inline-block;
    text-shadow: 2px 2px 4px rgba(110,40,40,0.1);
  }
  .button div:hover{
    box-shadow: inset 2px 2px 4px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgb(255,255,255);
  }
  .router-link-active{
    box-shadow: inset 2px 2px 4px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgb(255,255,255);
  }
  a{
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    border: 1px solid transparent;
  }
  .header-bottom{
    height: 200px;
  }
  h1{
    font: bold 42px/1.2 "宋体";
    color: white;
    white-space: nowrap;
    text-shadow: 1px 3px 6px rgb(230,188,176);
    margin-bottom: 15px;
  }
  .content{
    width: 100%;
    display: flex;
  }
  .cont-left{
    flex: 1;
  }
  .cont-right{
    flex: 0 0 33%;
  }
  .cont-right input{
    width: 77%;
    height: 33px;
    color: rgba(0,0,0,0.5);
    margin-left: 35px;
    padding-left: 15px;
    border: 1px solid rgb(247,222,224);
    box-shadow: 2px 2px 4px rgb(247,222,224);
    border-radius: 16px;
    outline: none;
  }
  .toTop{
    position: fixed;
    bottom: 70px;
    right: 40px;
    color: rgb(230,186,168);
    transition: 3s;
  }
</style>
