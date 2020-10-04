<template>
  <div class="book">
      <h1>无人订阅</h1>
  </div>
</template>

<script>
    export default {
        name: 'book',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
   .book{
     background-color: white;
     border: 1px solid rgb(247,222,224);
     border-radius: 7px;
     color: black;
   }
</style>
