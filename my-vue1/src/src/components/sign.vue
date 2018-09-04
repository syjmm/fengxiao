<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/back.png" class="back" @click="goback">
            <span class="title">申请提现</span>
        </header>
        <!--内容-->
        <main>
            <form action="">
            <div class="name">
                <span class="michen">支付宝</span>
                <input type="text" class="bill-name" placeholder="请输入支付宝帐号" v-model="phone">
            </div>
            <div class="name billsNO">
                <span class="michen billno">姓名</span>
                <input type="text" class="bill-name billno" placeholder="请输入提现人姓名" v-model="name">
            </div>
            <div class="name billsNO">
                <span class="michen micheng2">提现金额</span>
                <input type="text" class="bill-name billno" placeholder="请输入提现金额" v-model="money">
            </div>

            <button type="submit" class="anniu" @click="sign">
                <span class="anniu-wenzi">确认提现</span>
            </button>
            </form>
            <span class="note">预计1-3个工作日到账，节假日顺延</span>
        </main>
        <p v-show="showTishi" class="showTishi">{{tishi}}</p>
    </div>
</template>

<script>
    import qs from 'qs'
    export default {
        name: "sign",
        data(){
           return{
               name:"",
               phone:"",
               money:"",
               showTishi: false,
               tishi: "",
           }
        },
        mounted:function(){
            this.user();
        },
        methods:{
            //获取用户默认支付宝
            user(){
                let token=JSON.parse(localStorage.getItem('user')).token;
                this.$axios.get('/alipay_name',
                    {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        }
                    }).then(res=>{
                        this.name=res.data.data.name;
                        this.phone=res.data.data.alipay;
                })
            },
            goback:function () {
                this.$router.go(-1);
            },
            sign:function () {
                let token=JSON.parse(localStorage.getItem('user')).token;
                this.$axios.post('/apply',
                    qs.stringify({
                            alipay:this.phone,
                            name:this.name,
                            money:this.money

                    }),
                    {
                        headers: {
                            'Authorization': 'Bearer ' + token,

                        }
                    }).then(res=>{
                    let {err_code,msg,data}=res.data;
                    if(this.phone==""){
                        this.tishi="请输入支付宝账号";
                        this.showTishi=true;
                    }else if(this.name==""){
                        this.tishi="请输入姓名";
                        this.showTishi=true;
                    }else if(this.money==""){
                        this.tishi="请输入提现金额";
                        this.showTishi=true;
                    }else if(this.name!=""&&this.phone!=""&&this.money!=""){
                        if(err_code=='0'){
                            this.tishi=msg;
                            this.showTishi=true;
                            this.$router.push({name:"tixian"});

                        }else if(err_code=='1002'){
                            this.tishi=msg;
                            this.showTishi=true;
                        }
                    }
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>
    .showTishi
    {
        text-align: center;
        color: red;
        font-size: 0.28rem;
        padding-top: 0.20rem;
    }
    header{
        width: 100%;
        height: 0.93rem;
        line-height: 0.93rem;
        border-bottom:0.02rem solid #e0e0e0;
    }
    .back{
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#555555;
        margin-left:2.50rem;
    }
    .name{
        width: 6.10rem;
        height: 1.47rem;
        /*background-color: red;*/
        margin-left:0.70rem;
        border-bottom:0.01rem solid #e0e0e0;
    }
    .michen{
        display: block;
        font-size:0.26rem;
        color:#555555;
        margin-top:0.82rem;
        float:left;
        font-weight: bold;
    }
    .bill-name{
        width: 3.39rem;
        height: 0.26rem;
        /*background-color: blue;*/
        float:left;
        border:none;
        outline:none;
        margin:0.82rem 0 0 1.18rem;

    }
    .billsNO{
        height: 1.19rem;
    }
    .billno{
        margin-top:0.54rem;
        margin-right:0.4rem;
    }
    .micheng2{
        margin-top:0.54rem;
    }
    .anniu{
        width: 6.36rem;
        height: 1.78rem;
        display: block;
        margin:0 auto;
        margin-top:0.38rem;
        border:none;
        outline:none;
        background-color: #fff;
        background:url(../assets/images/button.png) no-repeat center;
    }
    .anniu-wenzi{
        font-size:0.36rem;
        color:#ffffff;
        text-align: center;
    }
    .note{
        font-size: 0.26rem;
        color:#a2a2a2;
        display: block;
        text-align: center;
    }
</style>