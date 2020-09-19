<template>
    <div class="bottom">
        <div class="bottom-info">
            <p class="web"><a href="#">网站地图</a> | <a href="#">订阅本站</a> | <a href="#">联系博主</a></p>
            <p>本站总访问量：101848次，本站总访客数:23307人</p>
            <p>Copyright <a href="#">©郑超(Charles·Zheng).</a> Theme by <a href="#">BlueLake.</a> Count by <a href="#">busuanzi.</a> Powered by <a href="#">Hexo.</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bottom',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .bottom{
        clear: both;
        width: 100%;
        height: 200px;
    }
    .bottom-info{
        text-align: center;
        padding-top: 40px;
        color: rgba(0,0,0,0.7);
        font-size: 14px;
    }
    .bottom-info a{
        color: rgb(247,185,193);
    }
</style>
