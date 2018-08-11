<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">业务统计</span>
        </header>
        <main>
            <div class="nav">
                <div class="nav-item">
                    <span>日</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan"></div>
                </div>
                <div class="nav-item">
                    <span>月</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>年</span>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
    export default {
        name: "yewu",
        methods:{
            goback: function () {
                this.$router.go(-1);
            },
        }
    }
</script>

<style scoped>
    body{
        background: #f5f5f5;
    }
    header{
        width: 100%;
        height: 0.88rem;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.88rem;
    }
    .back{
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.50rem;
    }
    .nav{
        width: 100%;
        height: 0.83rem;
        border-bottom:0.01rem solid #d4d7da;
        background: #fff;
    }
    .nav-item{
        width: 33.3333333vw;
        height: 100%;
        float:left;
        text-align: center;
        line-height: 0.83rem;
        font-size:0.26rem;
        position: relative;
    }
    .xian{
        width: 0.02rem;
        height: 0.36rem;
        position:absolute;
        top:0.24rem;
        right:0rem;

    }
    .lan{
        width: 100%;
        height: 0.06rem;
        background: #f9434e;
        position: absolute;
        left:0;
        bottom:0;
    }


</style>