<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">订单详情</span>
        </header>
        <main>
            <div class="state">
                <span class="phone">商品名称：{{order.order_title}}</span>
                <span class="money">订单编号：{{order.order_num}}</span>
                <span class="money">订单类型：{{order.order_type}}</span>
                <span class="money">订单来源：{{order.order_source}}</span>
                <span class="money">用户：{{order.user_name}}</span>
                <span class="money">联系方式：{{order.user_tel}}</span>
                <span class="money">应付金额：{{order.order_money}}元</span>
                <span class="money tcolor" >订单状态：{{order.order_status}}</span>
                <span class="time">下单时间：{{order.order_time}}</span>
                <span class="money tcolor">提成：{{order.profits}}元</span>
                <span class="money">推荐人：{{order.distributor}}</span>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "ordershow",
        data(){
          return{
            order_id:'',
            order:{}
          }
        },
        mounted(){
            this.order_id=this.$route.query.oid;
            this.getdatainfo();
        },
        methods:{
            //获取订单详情
            getdatainfo(){
                let token=JSON.parse(localStorage.getItem('user')).token;
                this.$axios.get('/order',{
                    params:{order_id:this.order_id},
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }
                }).then(res=>{
                    console.log(res.data.data)
                    this.order=res.data.data;
                })
            },
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