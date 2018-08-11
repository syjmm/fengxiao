<template>
    <div id="main">
        <!--头部-->
        <header>
            <router-link to="/mine">
                <img src="../assets/images/backWhite.png" class="back">
                <span class="title">提现状态</span>
            </router-link>
        </header>
        <main>
            <div class="nav">
                <div class="nav-item">
                    <span>处理中</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan"></div>
                </div>
                <div class="nav-item">
                    <span>已成功</span>
                </div>
            </div>
            <div class="state">
                <span class="phone">支付宝:15898988995</span>
                <span class="actives">处理中</span>
                <span class="money">金额：300元</span>
                <span class="time">提现发起时间：2018-8-05</span>
            </div>
        </main>
        <span class="note">本次提现预计1-3个工作日到账节假日顺延</span>
    </div>
</template>

<script>
    export default {
        name: "tixian",
        methods:{

        }
    }
</script>

<style scoped>
    #main{
        width: 100vw;
        height: 100vh;
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
        width: 50vw;
        height: 100%;
        float:left;
        text-align: center;
        line-height: 0.83rem;
        font-size:0.26rem;
        position: relative;
    }
    .xian{
        width: 0.01rem;
        height: 0.36rem;
        position:absolute;
        top:0.24rem;
        right:0rem;

    }
    .xian1{
        left:1.82rem;
    }
    .lan{
        width: 100%;
        height: 0.06rem;
        background: #f9434e;
        position: absolute;
        left:0;
        bottom:0;
    }
    .state{
        width: 7.15rem;
        height: 1.98rem;
        margin: 0 auto;
        margin-top: 0.17rem;
        padding-top:0.26rem;
        padding-left: 0.45rem;
        background:url("../assets/images/bg@2x.png") no-repeat center/cover;
    }
    .phone{
        font-size: 0.28rem;
        color:#555555;
        display: block;
        float: left;
    }
    .actives{
        font-size: 0.28rem;
        line-height: 0.28rem;
        color:#a2a2a2;
        display: block;
        float: right;
        margin-right: 0.36rem;
    }
    .money{
        font-size: 0.28rem;
        color:#555555;
        display: block;
        width:100%;
        float: left;
        padding-top: 0.25rem;
        line-height:0.28rem;
    }
    .time{
        font-size: 0.28rem;
        color:#555555;
        display: block;
        float: left;
        line-height: 0.28rem;
        padding-top: 0.25rem;

    }
    .note{
        font-size:0.26rem;
        color:#a2a2a2;
        display: block;
        margin: 0 auto;
        width: 3.6rem;
        text-align: center;
        padding-top: 0.19rem;
    }
</style>