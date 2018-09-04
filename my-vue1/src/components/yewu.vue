<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back" @click="goback">
            <span class="title">个人业绩</span>
        </header>
        <main>
            <div class="nav">
                <div class="nav-item" @click="touchtype('d')">
                    <span>日增加</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="cate == ''"></div>
                </div>
                <div class="nav-item" @click="touchtype('m')">
                    <span>月增加</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="cate == 'm'"></div>
                </div>
                <div class="nav-item" @click="touchtype('y')">
                    <span>年增加</span>
                    <div class="lan" v-show="cate == 'y'"></div>
                </div>
            </div>
            <span class="add" v-if="cate == 'm'|| cate == 'd'|| cate == ''">{{date}}新增会员</span>
            <span class="add" v-if="cate == 'y'">直到{{date}}新增会员</span>
            <!--<span class="add">{{date}}新增会员</span>-->
            <span class="num">+{{man}}<span class="man">人</span></span>
            <div class="bar"  v-if="cate == ''">
                <Bar v-bind:cate="'d'"></Bar>

            </div>
            <div class="bar"  v-if=" cate == 'm'">
                <Barss v-bind:cate="'m'"></Barss>

            </div>
            <div class="bar" v-if="cate == 'y'">
                <Lines v-bind:cate="'y'"></Lines>
            </div>
        </main>
    </div>
</template>

<script>
    import Bar from './bar'
    import Barss from './barss'
    import Lines from './Lines'
    export default {
        name: "yewu",
        data(){
            return{
                man:"",
                cate:"",
                date:""
            }
        },
        components: {
            Bar,
            Lines,
            Barss
        },
        mounted:function(){
            this.getorderinfo();
        },
        methods:{
            //日增加
            data(){

            },
            touchtype(type){
                this.cate = (type=='d')?"":type;
                this.getorderinfo();
            },
            getorderinfo(){
                let status = this.cate || "d";
                let token=JSON.parse(localStorage.getItem('user')).token;
                this.$axios.get('/achievement',
                    {   params:{
                           cate:status
                        },
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        }}
                ).then(res=>{
                    this.man=res.data.data.count;
                    this.date=res.data.data.date
                    console.log(res.data.data)
                })
            },
            goback: function () {
                this.$router.go(-1);
            },
        },

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
        height: 7rem;
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