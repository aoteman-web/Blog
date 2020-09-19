<template>
  <div id="app">
    <Top></Top>
    <div>
      <div class="view">
        <router-view></router-view>
      </div>
      <div class="tab">
        <div><router-link to="/PageOne">1</router-link></div>
        <div><router-link to="/PageTwo">2</router-link></div>
        <div><router-link to="/PageThree">3</router-link></div>
        <!--        <span>...</span>-->
        <!--            <div><router-link to="PageOne.vue">4</router-link></div>-->
        <div><a href="#">下一页</a></div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
// import PageOne from './components/PageOne/PageOne.vue'
import Top from "./components/Top";
import Bottom from "./components/Bottom";

export default {
  name: 'App',
  components: {
    Bottom,
    Top
  }
}
</script>

<style>
  body{
    color: #333333;
    width: 100%;
    /*height: 100%;*/
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
  .view{
    width: 100%;
  }
  .tab{
    text-align: center;
    width: 100%;
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
    box-shadow: inset 1px 1px 2px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgb(255,255,255);
  }
  .tab div:hover{
    box-shadow: inset 1px 1px 2px rgba(110,40,40,0.1);
    border-bottom: 1px solid rgb(255,255,255);
  }
</style>
