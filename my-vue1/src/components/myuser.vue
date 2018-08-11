<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">已开发用户</span>
        </header>
        <main>
            <div class="search">
                <input type="text" placeholder="用户名/地址/开发时间">
                <button class="close">X</button>
                <span class="ok">确定</span>
            </div>
            <div class="nav">
                <div class="nav-item">
                    <span>开发时间</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>用户名</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>收获地址</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>会员</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>推荐人</span>
                </div>
            </div>
            <div class="record">
                <router-link :to="{name:'userinfo',query:{id:item.user_id}}" class="record-item" v-for="item in user.list" :key="item.user_id">
                    <span class="time">{{item.date}}</span>
                    <span class="type">{{item.name}}</span>
                    <span class="jine">{{item.address}}</span>
                    <span class="add">{{item.is_member}}</span>
                    <span class="man">{{item.distributor}}</span>
                </router-link>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "myuser",
        data(){
            return{
                user:[]
            }
        },
        mounted:function(){
            let token=JSON.parse(localStorage.getItem('user')).token;
            this.$axios.get('/users',
                { headers: {
                        'Authorization': 'Bearer ' + token,
                    }}).then(res=>{
                this.user=res.data.data
                console.log(res.data.data)
            })
        },
        methods:{
            goback:function () {
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
    .search{
        width: 100%;
        height: 0.86rem;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        overflow: hidden;
        position: relative;
    }
    .search input{
        width: 5.90rem;
        height: 0.59rem;
        padding-left: 0.20rem;
        background: #fff;
        display: block;
        margin:0.13rem 0 0 0.32rem;
        line-height: 0.59rem;
        border-radius: 0.10rem;
        border:none;
        outline: none;
    }
    .close{
        width: 0.28rem;
        height: 0.28rem;
        background: #a2a2a2;
        border-radius:50%;
        color:#fff;
        font-size:0.22rem;
        line-height: 0.28rem;
        text-align: center;
        position: absolute;
        top:0.30rem;
        left:5.72rem;
        border:0;
        outline:0;
    }
    .ok{
        font-size: 0.28rem;
        color:#fff;
        position: absolute;
        top:0.20rem;
        right:0.38rem;
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
    .record-item:last-child{
        border-bottom: none;
    }
</style>