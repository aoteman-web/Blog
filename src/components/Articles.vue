<template>
  <div class="articles">
          <ul class="blog-article"
              v-for="(item,index) in articles"
              :key="index"
          >
            <li>
              <div class="title" v-if="articles">
                  <h2>
                    <router-link to="/BlogContent">{{item.title}}</router-link>
                  </h2>
              </div>
              <p><span v-if="item.state=='top'">【已置顶】&nbsp;&nbsp;&nbsp;|</span>  {{item.date}} | <a href="#">{{item.author}}</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">{{item.comment}}留言，{{item.attend}}参与</a>
              </p>
              <div>
                <p>{{item.brief}}</p>
                <div><a href="#">阅读更多>></a></div>
              </div>
            </li>
          </ul>
        <div class="tab">
          <div><a>1</a></div>
          <div><a>2</a></div>
          <div><a>3</a></div>
          <div><a>下一页</a></div>
        </div>
      </div>
</template>

<script>
  import { getArticles } from "@/components/api"


  export default {
    name: 'articles',
    props: {

    },
    data(){
      return {
        articles: []
      }
    },
    created() {
      getArticles().then(data => {
        this.articles = data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blog-article{
    background: white;
    border: 1px solid rgb(247,222,224);
    padding-left: 20px;
    box-shadow: 2px 2px 4px rgb(247,222,224);
    border-radius: 7px;
  }
  .blog-article div{
    width: 92%;
  }
  li{
    list-style: none;
  }
  .title{
    margin-top: 15px;
    padding-bottom: 12px;
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
    margin-left: 84%;
    padding: 4px 5px;
  }
  .blog-article div div a:hover{
    box-shadow: inset -3px -2px 5px rgba(110,40,40,0.1);
  }
  .tab{
    text-align: center;
    width: 600px;
    height: 100px;
  }
  .tab div{
    width: 25px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    display: inline-block;
    border: 1px solid rgb(247,185,193);
    margin-left: 10px;
    box-shadow: 2px 2px 5px rgba(110,40,40,0.1);
  }
  .tab div a{
    color: rgb(247,185,193);
    text-decoration: none;
  }
  .tab div:last-child{
    width: 60px;
    height: 34px;
  }
  .tab div:first-child{
    box-shadow: inset 1px 1px 2px rgba(110,40,40,0.1),2px 2px 5px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgb(247,185,193);
    background-color: white;
  }
  .tab div:hover{
    box-shadow: inset 1px 1px 2px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgb(255,255,255);
  }
</style>
