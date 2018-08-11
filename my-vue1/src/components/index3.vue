<template>
    <div id="main">
        <!--头部-->
        <header>
            <span class="title">首页</span>
            <span class="exit" @click="loginout">退出</span>
        </header>
        <main>
            <router-link to="/yewu">
                <div class="item">
                    <img src="../assets/images/1_1_1@2x.png" alt="" class="tupiao">
                    <span class="tutitle">业务统计</span>
                </div>
            </router-link>

            <router-link to="/spread">
                <div class="item item1">
                    <img src="../assets/images/1_2_2@2x.png" alt="" class="tupiao">
                    <span class="tutitle">我的推广</span>
                </div>
            </router-link>
            <router-link to="/mine">
                <div class="item item2">
                    <img src="../assets/images/1_3_3@2x.png" alt="" class="tupiao">
                    <span class="tutitle">我的收益</span>
                </div>
            </router-link>
            <router-link to="/myuser">
                <div class="item item3">
                    <img src="../assets/images/1_4_4@2x.png" alt="" class="tupiao">
                    <span class="tutitle">我的用户</span>
                </div>
            </router-link>
            <router-link to="/order">
                <div class="item item5">
                    <img src="../assets/images/1_6@2x.png" alt="" class="tupiao">
                    <span class="tutitle">订单中心</span>
                </div>
            </router-link>
        </main>
    </div>
</template>

<script>

    export default {
        name: "index3",
        methods:{
            loginout:function () {
                delCookie('username');
                this.$router.push("/");
            }
        }

    }
</script>

<style scoped>
    body{
        background: #fff;
    }
    header{
        width: 100%;
        height: 0.88rem;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.88rem;
    }

    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:3.50rem;
    }
    .exit{
        font-size:0.28rem;
        color:#fff;
        margin-left: 2.10rem;
    }
    .item{
        width: 6.94rem;
        height: 1.76rem;
        background: url("../assets/images/1_1@2x.png") no-repeat center/cover;
        margin:0 auto;
        margin-top:0.16rem;
        position: relative;
    }
    .tupiao{
        width: 0.40rem;
        height: 0.40rem;
        margin-left: 4.85rem;
        margin-top: 1.12rem;
    }
    .tutitle{
        font-size:0.32rem;
        color:#fff;
        position: absolute;
        right:0.3rem;
        top:1.10rem;
    }
    .item1{
        background: url("../assets/images/1_2@2x.png") no-repeat center/cover;
    }
    .item2{
        background: url("../assets/images/1_3@2x.png") no-repeat center/cover;
    }
    .item3{
        background: url("../assets/images/1_4@2x.png") no-repeat center/cover;
    }
    .item5{
        background: url("../assets/images/6@2x.png") no-repeat center/cover;
    }
</style>