<template>
  <div class="blog-article">
    <div>
      <div class="title"><a href="#"><h2>BlueLake博客主题的详细配置</h2></a></div>
      <p>【已置顶】 &nbsp;&nbsp;&nbsp;| 2016-12-29 | <a href="#">aoteman博客</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">161留言，161参与</a></p>
      <div>
        <h3>开始之前</h3>
        <p>BlueLake主题写了有一段时间了，经常会有朋友发消息给我问一些配置的问题，
          这篇博文主要也是为了解决这些问题。 主题以简洁轻量自居(实则简陋)，
          去掉了Jquery和Fancybox,用原生JS实现站内搜索功能。这个主题只是一个小小的雏形，
          期待您来帮助它成长。
        </p>
        <a href="#">阅读更多>></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog-article',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  .blog-article{
    background: white;
    border: 1px solid rgb(247,222,224);
    box-shadow: 2px 2px 4px rgb(247,222,224);
    border-radius: 7px;
  }
  .blog-article div{
    width: 92%;
    margin-left: 5%;
  }
  .title{
    border-bottom: 1px solid rgb(230,186,168);
  }
  .title h2{
    margin-top: 0;
    margin-bottom: 0;
  }
  .title a{
    color: rgb(230,186,168);
  }
  a{
    text-decoration: none;
    color: rgb(242,198,206);
  }
  a:hover{
    text-decoration: underline;
  }
  .blog-article div div{
    margin-left: 5px;
    margin-bottom: 20px;
  }
  .blog-article div div h3{
    margin-bottom: 0;
    font-weight: 500;
  }
  .blog-article div div p{
    margin-top: 2px;
    font-weight: 100;
  }
  .blog-article div div a{
    font-size: 14px;
    margin-left: 81%;
    padding: 4px 5px;
  }
  .blog-article div div a:hover{
    box-shadow: inset -3px -2px 5px rgba(110,40,40,0.1);
  }
</style>
