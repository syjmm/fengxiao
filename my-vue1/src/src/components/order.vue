<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">订单中心</span>
        </header>
        <main>
            <div class="nav">
                <div class="nav-item" @click="touchtype(2)">
                    <span>门店直营</span>
                    <img src="images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="order_status == ''"></div>
                </div>
                <div class="nav-item" @click="touchtype(3)">
                    <span>总仓发货</span>
                    <img src="images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="order_status == 3"></div>
                </div>
                <div class="nav-item" @click="touchtype(4)">
                    <span>兑换订单</span>
                    <img src="images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="order_status == 4"></div>
                </div>
                <div class="nav-item" @click="touchtype(5)">
                    <span>特价订单</span>
                    <img src="images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="order_status == 5"></div>
                </div>
                <div class="nav-item" @click="touchtype(6)">
                    <span>校园商品</span>
                    <div class="lan" v-show="order_status == 6"></div>
                </div>

            </div>
            <router-link :to="{name:'ordershow',query:{oid:item.order_id}}" v-for="item in list" :key="item.order_id">
                <div class="state clearfix" >
                    <div class="top">
                        <span class="phone">商品名称：{{item.order_title}}</span>
                        <span class="actives">{{item.order_status}}</span>
                    </div>

                        <span class="money">用户：{{item.user_name}}</span>
                        <span class="actives actives1">提成：{{item.profits}}元</span>


                    <span class="money">应付：{{item.order_money}}元</span>
                    <span class="money">联系方式：{{item.user_tel}}</span>
                    <span class="money">下单时间：{{item.order_time}}</span>
                    <span class="money">联系人：{{item.distributor}}</span>
                </div>
            </router-link>
        </main>
    </div>
</template>

<script>
    export default {
        name: "order",
        data(){
            return{
                order_status:"",
                list:[],

            }
        },
        mounted:function(){
           this.getorderinfo();

        },
        methods:{
            goback:function () {
                this.$router.go(-1);
            },
            touchtype(type){
                this.order_status = (type==2)?"":type;
                this.getorderinfo();
            },
            //获得订单信息
            getorderinfo(){
                let status = this.order_status || "2";
                let token=JSON.parse(localStorage.getItem('user')).token;
                this.$axios.get('/orders',{
                    params:{
                        cate:status
                    },
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }}).then(res=>{
                    this.list=res.data.data.list;


                })
            }
        }
    }
</script>

<style scoped>
    .top{
        width: 100%;
        height: 0.30rem;
        float:left;
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
        width: 20vw;
        height: 100%;
        float:left;
        text-align: center;
        line-height: 0.83rem;
        font-size:0.26rem;
        position: relative;
    }
    .xian{
        width: 0.03rem;
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
        height: 4.00rem;
        margin: 0 auto;
        position: relative;
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
        float: left;
    }
    .actives{
        font-size: 0.28rem;
        line-height: 0.28rem;
        color:#fa686e;
        display: block;
        float: right;
        margin-right: 0.36rem;
    }
    .money{
        font-size: 0.28rem;
        color:#555555;
        display: block;
        width:70%;
        float: left;
        padding-top: 0.33rem;
        line-height:0.28rem;
    }
    .actives1{
        /*padding-top: 0.30rem;*/
        position: absolute;
        top:0.90rem;
        right:0.10rem;
    }

</style>