<template>
    <div class="header">
        <div class="header-top">
            <div class="button">
                <div><a href="#">首页</a></div>
                <div><a href="#">归档</a></div>
                <div><a href="#">关于</a></div>
                <div><a href="#">订阅</a></div>
            </div>
        </div>
        <div class="header-bottom">
            <h1 class="h1">秋过冬漫长</h1>
            <p>没有比脚更长的路，走过去，前面是个天</p>
        </div>
    </div>
</template>

<script>
  export default {
      name: 'page2',
      props: {
          msg: String
      }
  }
</script>

<style scoped>
    .header{
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
    }
    .button div:first-child{
        box-shadow: inset 2px 2px 4px rgba(110,40,40,0.1);
        border-bottom: 1px solid rgb(255,255,255);
    }
    .button div:hover{
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
</style>
