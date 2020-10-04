<template>
    <div class="interlink">
        <div class="information">
            <div>
                <div><h3>友情链接</h3></div>
                <p v-for="(item,index) in interlink" :key="index"><a href="#">{{item}}</a></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { getInterlink } from "./api";

    export default {
        name:'interlink',
        data(){
            return {
                interlink: []
            }
        },
        created() {
            getInterlink().then(data => {
                this.interlink = data
            })
        }
    }
</script>

<style scoped>
    .information{
        width: 82%;
        margin-left: 35px;
        margin-top: 20px;
        background: white;
        border: 1px solid rgb(247,222,224);
        box-shadow: 2px 2px 4px rgb(247,222,224);
        border-radius: 7px;
    }
    .information div{
        width: 90%;
        margin: 0 auto;
    }
    .information div div{
        margin: 0;
        font-weight: 200;
        color: rgb(242,198,206);
        border-bottom: 1px solid rgba(242,198,206,0.7);
    }
    .information div div h3{
        font-weight: 200;
        margin-bottom: 10px;
    }
    a{
        text-decoration: none;
        color: black;
        font-weight: 200;
    }
    a:hover{
        text-decoration: underline;
        color: rgb(242,198,206);
    }
    p{
        font-size: 14px;
        font-family: "Source Code Pro";
        margin: 7px 0;
    }
</style>
