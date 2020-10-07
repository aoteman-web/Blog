<template>
  <div class="blogcontent">
      <div v-html="article.content">
      </div>
  </div>
</template>

<script>
    import { getBlogContent } from "api";

    export default {
        name:'blogcontent',
        data(){
            return {
                article: {}
            }
        },
        created() {
            getBlogContent().then(data => {
                this.article = data
            })
            console.log(this.$route.query.id)
        }
    }
</script>

<style scoped>
    .blogcontent{
        background-color: white;
        border: 1px solid rgb(247,222,224);
        border-radius: 7px;
    }
    .blogcontent div{
        margin: 18px;
    }
</style>
