<template>
    <div class="file">
        <div
                style="overflow-y: auto;
                margin-top: 20px;
                margin-bottom: 30px;
                height: 210px;
                border-bottom: 1px solid #eee;"
        >
            <ul class="spul" style="list-style: none;">
                <div class="cirline"></div>
                <li><span class="spcircle circlepink"></span> <label>BlueBlake博客的详细配置</label></li>
                <li><span class="spcircle circlepink"></span> <label>GitHub博客迁移</label></li>
                <li><span class="spcircle circlepink"></span> <label>好用的web包管理器--Bower</label></li>
            </ul>
        </div>
    </div>
</template>

<script>

 export default {
     name: 'file',
     props: {
         msg: String
     }
 }
</script>

<style scoped>
    .file{
        background-color: white;
        border: 1px solid rgb(247,222,224);
        border-radius: 7px;
    }
    .spul {
        margin-left: 15px;
        font-size: 16px;
        color: #333333;
    }

    .spul li {
        margin-bottom: 15px;
    }

    .spul li label {
        margin-right: 15px;
    }

    .cirline{
        border-right: 2px solid rgb(230,188,176);
        height: 108px;
        float: left;
        left: 13.6px;
        top: 10px;
        position: relative;
    }
    .spcircle {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        display: inline-block;
        position: relative;
        top: 6px;
        margin-right: 10px;
    }
    .circlepink {
        background-color: rgb(230,188,176);
    }
</style>
