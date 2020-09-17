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
        <div class="page">
          <div><a href="#">1</a></div>
          <div><a href="#">2</a></div>
          <div><a href="#">3</a></div>
          <div><a href="#">6</a></div>
          <div><a href="#">下一页</a></div>
        </div>
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
      <div class="footer-info">
        <p class="web"><a href="#">网站地图</a> | <a href="#">订阅本站</a> | <a href="#">联系博主</a></p>
        <p>本站总访问量：101848次，本站总访客数:23307人</p>
        <p>Copyright <a href="#">©郑超(Charles·Zheng).</a> Theme by <a href="#">BlueLake.</a> Count by <a href="#">busuanzi.</a> Powered by <a href="#">Hexo.</a></p>
      </div>
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
  .content{
    width: 100%;
  }
  .cont-left{
    /*display: inline-block;*/
    width: 67%;
    float: left;
  }
  .page{
    text-align: center;
    width: 100%;
    height: 100px;
  }
  .page div{
    width: 25px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    display: inline-block;
    border: 1px solid rgb(247,185,193);
    margin-left: 10px;
  }
  .page div a{
    color: rgb(247,185,193);
  }
  .page div:last-child{
    width: 60px;
    height: 34px;
  }
  .page div:first-child{
    box-shadow: inset 1px 1px 2px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgb(255,255,255);
  }
  .page div:hover{
    box-shadow: inset 1px 1px 2px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgb(255,255,255);
  }
  .cont-right{
    /*display: inline-block;*/
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
  .footer{
    clear: both;
    width: 100%;
    height: 200px;
  }
  .footer-info{
    text-align: center;
    padding-top: 40px;
    color: rgba(0,0,0,0.7);
    font-size: 14px;
  }
  .footer-info a{
    color: rgb(247,185,193);
  }
</style>
