<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">用户列表</span>
        </header>
        <div class="nav">
            <div class="nav-item">
                <span>开发时间</span>
                <img src="../assets/images/d@2x.png" alt="" class="xian">
            </div>
            <div class="nav-item">
                <span>类型</span>
                <img src="../assets/images/d@2x.png" alt="" class="xian">
            </div>
            <div class="nav-item">
                <span>用户手机号</span>
                <img src="../assets/images/d@2x.png" alt="" class="xian">
            </div>

            <div class="nav-item">
                <span>推荐人</span>
            </div>
        </div>
        <div class="record">
            <div v-for="item in list.list" class="record-item clearfix" @click="gofor(item.uid)">
                <span class="time">{{item.date}}</span>
                <span class="type">{{item.type}}</span>
                <span class="jine">{{item.phone}}</span>
                <span class="man">{{item.distributor}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userlists",
        data(){
            return{
                id:"",
                list:[]
            }
        },
        mounted:function () {
            this.id=this.$route.query.id;
            this.getinfo()
        },
        methods:{
            goback: function () {
                this.$router.go(-1);
            },
            gofor(id){
                this.$router.push({name:'userinfo',query:{id:id}})
            },
            //获取分销端用户
            getinfo(){
                let token=JSON.parse(localStorage.getItem('user')).token;
                this.$axios.get("/team_users/"+this.id,
                    {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        }
                    }).then(res=>{
                        this.list=res.data.data;
                        console.log(res.data.data)
                })
            }
        }
    }
</script>

<style scoped>
    #main{
        background: #f5f5f5;
        width: 100vw;
        height: 100vh;

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
        width: 25vw;
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
        /*padding-bottom: 0.10rem;*/
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
        display: block;
        width: 25vw;
        float:left;
        text-align: center;
    }
    .type{
        display: block;
        width: 25vw;
        float:left;
        text-align: center;
    }
    .jine{
        display: block;
        width: 25vw;
        float:left;
        text-align: center;
    }

    .man{
        display: block;
        width: 25vw;
        float:left;
        text-align: center;
    }
    .record-item:last-child{
        border-bottom: none;
    }
</style>