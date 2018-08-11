<template>
    <div id="main">
        <!--头部-->
        <header>
            <router-link to="/index">
                <img src="../assets/images/backWhite.png" class="back">
            </router-link>
            <span class="title">我的收益</span>
        </header>
        <main>
            <div class="top">
                <span class="top-title">昨日收益</span>
                <span class="top-title2">+100元</span>
                <div class="money">
                    <span class="number">账户余额：<span class="number1">3132.00元</span></span>
                    <router-link to="/tixian">
                        <img src="../assets/images/tx@2x.png" alt="" class="button">
                    </router-link>

                </div>
            </div>
            <div class="nav">
                <div class="nav-item">
                    <span>时间</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>类型</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>消费金额</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>收入</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>推荐人</span>
                </div>
            </div>
            <div class="record">
                <router-link to="">
                    <div class="record-item" v-for="item in user.list">
                        <span class="time">{{item.created_at}}</span>
                        <span class="type">{{item.type}}</span>
                        <span class="jine">{{item.cost}}</span>
                        <span class="add">+{{item.commission}}</span>
                        <span class="man">{{item.distributor}}</span>
                    </div>
                </router-link>

            </div>
        </main>
        <footer>
            <router-link to="/sign">
            <button class="apply">申请提现</button>
            </router-link>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "mine",
        data(){
            return{
                user:[]
            }
        },
        mounted:function(){
            let token=JSON.parse(localStorage.getItem('user')).token;
            this.$axios.get('/profits',
                { headers: {
                        'Authorization': 'Bearer ' + token,
                    }}).then(res=>{
                this.user=res.data.data
                console.log(res.data)
            })
        },
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
        height: 6vh;
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
        margin-left:2.20rem;
    }
    .top{
        width: 100%;
        height: 2.94rem;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
    }
    .top-title{
        font-size:0.24rem;
        color:#f8f8f8;
        line-height: 0.24rem;
        text-align: center;
        display: block;
        padding-top: 0.50rem;
    }
    .top-title2{
        font-size: 0.66rem;
        color:#f8f8f8;
        display: block;
        text-align: center;
        line-height: 0.66rem;
        padding-top: 0.50rem;
    }
    .money{
        width: 100%;
        height: 0.84rem;
        background: rgba(255,255,255,0.3);
        margin-top: 0.23rem;
        line-height: 0.84rem;
        position: relative;
    }
    .number{
        font-size:0.24rem;
        color:#f8f8f8;
        display: block;
        opacity: 0.8;
        padding-left: 0.32rem;
    }
    .number1{
        font-size: 0.28rem;
        opacity: 1;
    }
    .button{
        width: 1.42rem;
        height: 0.46rem;
        position: absolute;
        top:0.18rem;
        right:0.54rem;
    }
    .nav{
        width: 100%;
        height: 0.83rem;
        border-bottom:0.01rem solid #d4d7da;
        background: #fff;
    }
    .nav-item{
        width: 20vw;
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
    .xian1{
        left:1.82rem;
    }
    .record{
        width: 100%;
        height: auto;
        padding-bottom: 0.10rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("../assets/images/hybg@2x.png");
    }
    .record-item{
        width: 100%;
        height: 0.86rem;
        background: #fff;
        border-bottom:0.01rem solid #d4d7da;
        font-size:0.26rem;
        line-height: 0.86rem;
        color:#a2a2a2;
        text-align: center;
        display: flex;
        flex-wrap: nowrap;
        padding-left: 0.15rem;
        justify-content: space-around;
        align-content: center;
        overflow: hidden;
    }
    .time{

        width: 20vw;
    }
    .type{

        width: 20vw;
    }
    .jine{

        width: 20vw;
    }
    .add{

        width: 20vw;
    }
    .man{

        width: 20vw;
    }
    .apply{
        width: 100%;
        height: 0.96rem;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        border:none;
        outline: none;
        text-align: center;
        line-height: 0.96rem;
        color:#fff;
        font-size:0.36rem;
        position: fixed;
        left:0;
        bottom:0;
    }
    .record-item:last-child{
        border-bottom: none;
    }
</style>