<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">业务统计</span>
            <span class="title1" @click="show">筛选</span>
        </header>
        <main>
            <div class="nav">
                <div class="nav-item" @click="touchtype('d')">
                    <span>日</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="cate == ''"></div>
                </div>
                <div class="nav-item" @click="touchtype('m')">
                    <span>月</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="cate == 'm'"></div>
                </div>
                <div class="nav-item" @click="touchtype('y')">
                    <span>年</span>
                    <div class="lan" v-show="cate == 'y'"></div>
                </div>
            </div>
            <span class="add">{{date}}新增会员</span>
            <span class="num">+{{count}}<span class="man">人</span></span>
            <div class="bar">
                <div class="box" v-for="item in list" :key="item.id" @click="users(item.id)">
                    <div class="span">{{item.nick_name}}</div>
                    <div class="barbox">
                        <div class="bars" :style="{width:item.percent+'%'}"></div>
                    </div>
                    <div class="numa">{{item.count}}</div>
                </div>
                <!--<Calendar></Calendar>-->
                <!--<Bars></Bars>-->
            </div>
        </main>
    </div>
</template>

<script>
    import Bars from './bars'
    export default {
        name: "team",
        data(){
            return{
                cate:"",
                list:[],
                count:"",
                date:""
            }
        },
        mounted:function(){
            this.getinfo()
        },

        methods:{
            goback: function () {
                this.$router.go(-1);
            },
            touchtype(type){
                this.cate = (type=='d')?"":type;
                this.getinfo();
            },
            //获取信息
            getinfo(){
                let status = this.cate || "d";
                let token=JSON.parse(localStorage.getItem('user')).token;
                this.$axios.get('/team_achievement',
                    { params:{
                            cate:status
                        },
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        }}
                ).then(res=> {
                    this.list=res.data.data.list;
                    this.count=res.data.data.count;
                    this.date=res.data.data.date
                    console.log(res.data.data.list)
                })
            },
            show(){

            },
            //获取个人分销用户
            users(id){
                this.$router.push({name:'userlists',query:{id:id}})
            }

        },

    }
</script>

<style scoped>
    .title1{
        font-size:0.30rem;
        color:#fff;
        margin-left:1.80rem;
    }
    .box{
        width: auto;
        height: 0.40rem;
        margin-left: 0.30rem;
        margin-top: 0.80rem;
    }
    .span{
        font-size: 0.28rem;
        color:#555555;
        display: block;
        float:left;
    }
    .barbox{
        width: 70%;
        height: 100%;
        float:left;
        margin-left: 0.15rem;
    }
    .numa{
        font-size:0.28rem;
        color:#f9434e;
        float:left;
        line-height: 0.40rem;
        margin-left: 0.15rem;
    }
    .bars{
        width: auto;
        height: 100%;
        background: #f9444d;
        float:left;
        /*margin-left: 0.20rem;*/
        border-radius: 0.40rem;
    }
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
    .bar{
        width: 7.0rem;
        height: 6rem;
        margin:0 auto;
        margin-top: 0.3rem;
    }
    .add{
        font-size:0.32rem;
        color:#555555;
        display: block;
        text-align: center;
        padding-top: 1.20rem;
    }
    .num{
        font-size: 0.64rem;
        color:#f9444d;
        display: block;
        text-align: center;
        padding-top: 0.30rem;
    }
    .man{
        font-size: 0.40rem;
        color:#555555;
    }
</style>