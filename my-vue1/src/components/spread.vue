<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">我要推广</span>
        </header>
        <main>
            <div class="erweima">
                <span class="no">{{usercode.code}}</span>
                <div class="ma">
                    <img src="../assets/images/qr2@2x.png" alt="">
                </div>
            </div>
        </main>
    </div>
</template>

<script>

    export default {
        name: "spread",
        data(){
           return{
               usercode:"",
               token:""
           }
        },
        mounted:function(){
            this.uid=this.$route.query.uid;
            let token=JSON.parse(localStorage.getItem('user')).token;
            this.$axios.get('/extension',
                { headers: {
                        'Authorization': 'Bearer ' + token,
                    }}).then(res=>{
                        this.usercode=res.data.data
                        console.log(res.data)
            })
        },
        methods:{
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
        background: linear-gradient(top, #ff1c8b 0%, #f37404 100%) no-repeat;
        background: -moz-linear-gradient(top, #ff1c8b 0%, #f37404 100%) no-repeat;
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ff1c8b), color-stop(100%,#f37404)) no-repeat ;
        background: -webkit-linear-gradient(top, #ff1c8b 0%,#f37404 100%) no-repeat;
        background: -o-linear-gradient(top, #ff1c8b 0%,#f37404 100%) no-repeat;
        background: -ms-linear-gradient(top, #ff1c8b 0%,#f37404 100%) no-repeat;

    }
    header{
        width: 100%;
        height: 0.88rem;
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
    .erweima{
        width: 6.42rem;
        height: 7.52rem;
        border-radius: 0.20rem;
        background: #fff;
        margin:0 auto;
        margin-top: 0.20rem;
    }
    .no{
        font-size:0.30rem;
        color:#555555;
        display: block;
        text-align: center;
        padding-top: 0.70rem;
        padding-bottom: 0.50rem;
    }
    .ma{
        width: 4.77rem;
        height: 4.77rem;
        margin:0 auto;
    }
    .ma img{
        width: 100%;
        height: 100%;
    }
</style>