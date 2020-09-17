<template>
  <div id="app">
    <PageOne></PageOne>
  </div>
</template>

<script>
import PageOne from './components/PageOne.vue'

export default {
  name: 'App',
  components: {
    PageOne
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
</style>
