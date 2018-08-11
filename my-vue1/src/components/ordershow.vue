<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">订单详情</span>
        </header>
        <main>
            <div class="state">
                <span class="phone">商品名称：农夫山泉10ML</span>
                <span class="money">订单编号：201804280934028635</span>
                <span class="money">订单类型：总仓发货</span>
                <span class="money">订单来源：四川大学门店</span>
                <span class="money">用户：王五</span>
                <span class="money">联系方式：1872875655</span>
                <span class="money">应付金额：2000.00元</span>
                <span class="money tcolor" >订单状态：待支付</span>
                <span class="time">下单时间：2018-8-05 09:34</span>
                <span class="money tcolor">提成：220元</span>
                <span class="money">推荐人：本人</span>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "ordershow",
        methods:{
            goback: function () {
                this.$router.go(-1);
            },
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
    .state{
        width: 7.15rem;
        height: 7.0rem;
        margin: 0 auto;
        margin-top: 0.17rem;
        padding-top:0.26rem;
        padding-left: 0.45rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image:url("../assets/images/bg@2x.png");

    }
    .phone{
        font-size: 0.28rem;
        color:#555555;
        display: block;
    }

    .money{
        font-size: 0.28rem;
        color:#555555;
        display: block;
        padding-top: 0.33rem;
        line-height:0.28rem;
    }
    .time{
        font-size: 0.28rem;
        color:#555555;
        display: block;
        line-height: 0.28rem;
        padding-top: 0.25rem;

    }
    .tcolor{
        color:#fa686e;
    }
</style>