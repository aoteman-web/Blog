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
      <div class="cont-left"><router-view></router-view></div>
      <div class="cont-right">
        <input type="text" value="搜索" onfocus="javascript:if(this.value='搜索')this.value=''"
               onblur="if(this.value=='')this.value='搜索'">
        <div class="information">
          <div>
            <div><h3>最新文章</h3></div>
            <p v-for="(blog,index) in blogs" :key="index"><a href="#">{{blog}}</a></p>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "./components/Bottom";


export default {
  name: 'App',
  data() {
    return {
      articles: {},
      blogs: [
        "BlueLake博客主题的详细配置",
        "自定义HEXO站内搜索Javascript+json",
        "github博客迁移",
        "好用的Web包管理器-Bower",
        "MongoDB学习笔记(2)",
        "MongoDB学习笔记",
        "Node.js 多进程(17)",
        "Node.js RESTful API(16)",
        "Node.js Express 框架(15)",
        "Node.js Web 模块(14)"
      ]
    }
  },
  created() {


    // this.$router.replace({
    //   path: 'Articles'
    // })

    // if(this.$router.path == './PageTwo/'){
    //
    // }
  },
  components: {
    Bottom
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
  }
  .cont-left{
    width: 67%;
    float: left;
  }
  .cont-right{
    width: 33%;
    float: left;
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
  .information{
    width: 82%;
    margin-left: 35px;
    margin-top: 20px;
    background: white;
    border: 1px solid rgb(247,222,224);
    box-shadow: 2px 2px 4px rgb(247,222,224);
    border-radius: 7px;
  }
  .information div{
    width: 90%;
    margin: 0 auto;
  }
  .information div div{
    margin: 0;
    font-weight: 200;
    color: rgb(242,198,206);
    border-bottom: 1px solid rgba(242,198,206,0.7);
  }
  .information div div h3{
    font-weight: 200;
    margin-bottom: 10px;
  }
  a{
    text-decoration: none;
    color: black;
    font-weight: 200;
  }
  a:hover{
    text-decoration: underline;
    color: rgb(242,198,206);
  }
  p{
    font-size: 14px;
    font-family: "Source Code Pro";
    margin: 7px 0;
  }
</style>
