<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/back.png" class="back">
            <span class="title">登录</span>
        </header>
        <!--内容-->
        <main>
            <form action="">
            <div class="name">
                <span class="michen">登录帐号</span>
                <input type="text" class="bill-name" placeholder="请输入登录帐号" v-model="username" required>
            </div>
            <div class="name billsNO">
                <span class="michen billno">登录密码</span>
                <input type="text" class="bill-name billno" placeholder="请输入登录密码" v-model="password" required>
            </div>
            <button class="anniu" @click="login">
                <span class="anniu-wenzi">登录</span>
            </button>
            <span class="note">忘记密码，请联系校园代理</span>
            </form>
        </main>
        <p v-show="showTishi" class="showTishi">{{tishi}}</p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:()=>({
            showTishi: false,
            tishi: "",
            username:"",
            password:"",
        }),
        methods:{
            goback:function(){

                this.$router.go(-1);
            },
            login:function(){

                    this.$axios.post("/login",{user:this.username,password:this.password}).then(res=>{
                        let {err_code,msg,data}=res.data;
                        if(this.username==""){
                            this.tishi="请输入登录账号";
                            this.showTishi=true;
                        }else if(this.password==""){
                            this.tishi="请输入登录密码";
                            this.showTishi=true;
                        }else if(this.username!=""&&this.password!=""){
                            if(err_code=='0'){
                                if(data.level=='2'){
                                    this.$router.push({name:"index"});
                                    localStorage.user=JSON.stringify(res.data.data);
                                }else if(data.level=='3'){
                                    this.$router.push({name:"index3"});
                                }
                            }else if(err_code=='1001'){
                                this.tishi=msg;
                                this.showTishi=true;
                            }else if(err_code=='1003'){
                                this.tisi=msg;
                                this.showTishi=true;
                            }
                        }
                        console.log(this.username);
                            console.log(this.password)
                            console.log(res)

                    })

            },


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
        border-bottom:0.02rem solid #e0e0e0;
        line-height: 0.93rem;
    }
    .back{
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#555555;
        margin-left:2.80rem;
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