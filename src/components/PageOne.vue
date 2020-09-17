<template>
  <div class="page1">
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
    <div class="content">
      <div class="cont-left">
        <BlogArticle></BlogArticle>
        <p></p>
        <BlogArticle></BlogArticle>
        <p></p>
        <BlogArticle></BlogArticle>
        <p></p>
        <BlogArticle></BlogArticle>
        <p></p>
        <BlogArticle></BlogArticle>
        <p></p>
        <BlogArticle></BlogArticle>
      </div>
      <div class="cont-right">
        <input type="text" value="搜索" onfocus="javascript:if(this.value='搜索')this.value=''"
               onblur="if(this.value=='')this.value='搜索'">
        <Information></Information>
        <Information></Information>
        <Information></Information>
      </div>
    </div>
    <div class="footer">
      <p>网站地图 | 订阅本站 | 联系博主</p>
      <p>本站总访问量：101848次，本站总访客数:23307人</p>
      <p>Copyright ©郑超(Charles·Zheng). Theme by BlueLake. Count by busuanzi. Powered by Hexo.</p>
    </div>
  </div>
</template>

<script>
  import BlogArticle from './BlogArticle'
  import Information from './Information'

  export default {
    name: 'page1',
    props: {
      msg: String
    },
    components: {
      BlogArticle,
      Information
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page1{
    width: 89%;
    height: 100%;
    margin: 0 auto;
  }
  .header{
    width: 100%;
    height: 300px;
    color: rgba(255,255,255,0.8);
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
    border-bottom: 1px solid rgba(255,255,255,0.8);
  }
  .button div:hover{
    box-shadow: inset 2px 2px 4px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgba(255,255,255,0.8);
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
    white-space: nowrap;
    text-shadow: 1px 3px 6px #113f6e;
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
    border: 1px solid rgba(98,129,157,0.9);
    border-radius: 16px;
    outline: none;
  }
  .footer{
    width: 100%;
    text-align: center;
    background: antiquewhite;
  }
</style>
