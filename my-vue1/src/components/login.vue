<template>
    <div id="main">
        <!--头部-->
        <header>
            <!--<img src="../assets/images/back.png" class="back">-->
            <span class="title">登录</span>
        </header>
        <!--内容-->
        <main>
            <form action="">
            <div class="name">
                <span class="michen">登录帐号</span>
                <input type="text" class="bill-name" placeholder="请输入登录帐号" v-model="username">
            </div>
            <div class="name billsNO">
                <span class="michen billno">登录密码</span>
                <input type="password" class="bill-name billno" placeholder="请输入登录密码" v-model="password">
            </div>
            <div class="name name1">
                <div class="gou" :class="{checked:protocol}" @click="isprotocol"></div>
                <span class="tong">记住密码</span>
            </div>

            <div class="anniu" @click="login">
                <span class="anniu-wenzi">登录</span>
            </div>
            <span class="note">忘记密码，请联系校园代理</span>
            </form>
        </main>
        <p v-show="showTishi" class="showTishi">{{tishi}}</p>
    </div>
</template>

<script>
    import qs from 'qs'
    export default {
        name: "login",
        data:()=>({
            showTishi: false,
            tishi: "",
            username:"",
            password:"",
            token:"",
            protocol:true
        }),
        mounted:function(){
            this.getCookie();
            if(JSON.parse(localStorage.getItem('user')).token){
                this.$router.push({name:'index'})
            }
        },
        methods:{
            goback:function(){

                this.$router.go(-1);
            },
            isprotocol(){
                this.protocol = !this.protocol
            },
            login:function(){


                        if(this.username==""){
                            this.tishi="请输入登录账号";
                            this.showTishi=true;
                        }else if(this.password==""){
                            this.tishi="请输入登录密码";
                            this.showTishi=true;
                        }else if(this.username!=""&&this.password!=""){
                            this.$axios.post("/login",
                                qs.stringify({
                                    user:this.username,
                                    password:this.password
                                })).then(res=>{
                                let {err_code,msg,data}=res.data;
                            if(err_code=='0'){
                                if (this.protocol == true) {
                                    console.log("checked == true");
                                    //传入账号名，密码，和保存天数3个参数
                                    this.setCookie(this.username, this.password, 7);
                                }else {
                                    console.log("清空Cookie");
                                    //清空Cookie
                                    this.clearCookie();
                                }
                                localStorage.user=JSON.stringify(res.data.data);
                                this.$router.push({name:"index"});
                            }else if(err_code=='1001'){
                                this.tishi=msg;
                                this.showTishi=true;
                            }else if(err_code=='1003'){
                                this.tisi=msg;
                                this.showTishi=true;
                            }
                        })
                    }
                        // console.log(this.username);
                        //     console.log(this.password)
                        //     console.log(res)



            },
            //设置cookie
            setCookie(c_name, c_pwd, exdays) {
                var exdate = new Date(); //获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                //字符串拼接cookie
                window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
                window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
            },
            //读取cookie
            getCookie: function() {
                if (document.cookie.length > 0) {
                    var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                    for (var i = 0; i < arr.length; i++) {
                        var arr2 = arr[i].split('='); //再次切割
                        //判断查找相对应的值
                        if (arr2[0] == 'userName') {
                            this.username = arr2[1]; //保存到保存数据的地方
                        } else if (arr2[0] == 'userPwd') {
                            this.password = arr2[1];
                        }
                    }
                }
            },
            //清除cookie
            clearCookie: function() {
                this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
            }


        }

    }
</script>

<style scoped>
    .gou{
        width: 0.30rem;
        height: 0.30rem;
        display: block;
        float:left;
        margin:0.68rem 0.14rem 0.24rem 2.0rem;
        background: url("../assets/images/x_1@2x.png") no-repeat;
        background-size: 0.30rem  0.30rem;
    }
    .gou.checked{
        background: url("../assets/images/x_2@2x.png") no-repeat;
        background-size: 0.30rem  0.30rem;
    }
    .tong{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        float:left;
        margin-top: 0.68rem;
    }
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
        display: block;
       text-align: center;
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
        width:100%;
        height: 1.78rem;
        display: block;
        margin:0 auto;
        margin-top:0.80rem;
        border:none;
        outline:none;
        background-color: #fff;
        position: relative;
        background:url(../assets/images/button.png) no-repeat center;
    }
    .anniu-wenzi{
        font-size:0.36rem;
        color:#ffffff;
        position: absolute;
        top:0;
        left:4.00rem;
        /*text-align: center;*/
        display: block;
        margin-left: -0.50rem;
        line-height: 1.78rem;
    }
    .note{
        font-size: 0.26rem;
        color:#a2a2a2;
        display: block;
        text-align: center;
    }
    .name1{
        border-bottom: none;
        height: 0.2rem;

    }
</style>