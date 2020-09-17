<template>
    <div class="information">
        <div>
            <div><h3>最新文章</h3></div>
            <p v-for="(blog,index) in blogs" :key="index"><a href="#">{{blog}}</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'information',
        data:function() {
          return{
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
        props: {
            msg: String
        }
    }
</script>

<style scoped>
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
