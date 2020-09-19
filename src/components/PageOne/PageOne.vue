<template>
  <div class="page1">
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
      </div>
      <div class="cont-right">
        <input type="text" value="搜索" onfocus="javascript:if(this.value='搜索')this.value=''"
               onblur="if(this.value=='')this.value='搜索'">
        <Information></Information>
        <Information></Information>
        <Information></Information>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogArticle from '../BlogArticle'
  import Information from '../Information'


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
  .content{
    width: 100%;
  }
  .cont-left{
    /*display: inline-block;*/
    width: 67%;
    float: left;
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
</style>
