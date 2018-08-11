<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">用户详情</span>
        </header>
        <main>
            <div class="info">
                <div class="info-title">
                    基本信息
                </div>
                <div class="info-item">
                    <span class="name">会员昵称</span>
                    <span class="username">王二狗</span>
                </div>
                <div class="info-item">
                    <span class="name">手机号</span>
                    <span class="username">13789895565</span>
                </div>
                <div class="info-item">
                    <span class="name">推荐人</span>
                    <span class="username">王二狗</span>
                </div>
                <div class="info-item">
                    <span class="name">QQ</span>
                    <span class="username">1554545454</span>
                </div>
                <div class="info-item">
                    <span class="name">微信</span>
                    <span class="username">yjferh125454</span>
                </div>
                <div class="info-item">
                    <span class="name">微博</span>
                    <span class="username">3003329 </span>
                </div>
                <div class="info-item">
                    <span class="name">收货地址</span>
                    <span class="username">四川大学望江校区竹园8栋604</span>
                </div>

            </div>
            <div class="info info1">
                <div class="info-title">
                    会员信息
                </div>
                <div class="info-item">
                    <span class="name">会员</span>
                    <span class="username">是</span>
                </div>
                <div class="info-item">
                    <span class="name">有效期</span>
                    <span class="username">6天</span>
                </div>


            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "userinfo",
        data(){
           return{
               uid:""
           }
        },
        mounted:function(){

        },
        methods:{
            goback(){
                this.$router.go(-1);
            }
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
    .info{
        width: 100%;
        height: 6.85rem;
        background: url("../assets/images/hybg@2x.png") no-repeat center/cover;
        margin-top:0.10rem;
    }
    .info-title{
        width: 100%;
        height: 0.84rem;
        font-size:0.26rem;
        color:#555555;
        background: #fff;
        text-align: center;
        line-height: 0.84rem;
    }
    .info-item{
        width: 100%;
        height: 0.84rem;
        background: #fff;
        line-height: 0.84rem;
        padding-left:0.34rem;
        border-top:0.01rem solid #d4d7da;
    }
    .name{
        font-size: 0.28rem;
        color:#555555;
        display: block;
        float:left;
        width:1.8rem;

    }
    .username{
        font-size: 0.28rem;
        color:#a2a2a2;
        display: block;
        float:left;
    }
    .info1{
        height: 2.55rem;
    }
</style>