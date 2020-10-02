<template>
    <div class="about">
        <div class="title"><h2>about</h2></div>
        <div>
            <div class="img">
                <div></div>
            </div>
            <div class="info">
                <ul>
                    <li>name:***</li>
                    <li>email:***</li>
                    <li>github:***</li>
                    <li>weibo:***</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'about',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .about{
        background-color: white;
        border: 1px solid rgb(247,222,224);
        border-radius: 7px;
    }
    .title{
        border-bottom: 1px solid rgb(230,186,168);
        color: rgb(230,186,168);
        margin: 0 20px;
    }
    .about div:nth-child(2){
        display: flex;
    }
    .img{
        width: 50%;
    }
    .img div{
        width: 250px;
        height: 200px;
        border-radius: 60%;
        background-image: url("../../image/e.jpg");
        margin: 35px 0 30px 50px;
    }
    .info{
        flex: 1;
    }
    ul li{
        font-size: 24px;
        list-style: none;
        padding-top: 15px;
    }
</style>
