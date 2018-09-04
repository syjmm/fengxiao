<template>
    <div id="main1" style="width: 7rem;height: 7rem;">

    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "bar",
        props:["cate"],
        data () {
            return {
                charts: '',
                opinion:[],
                opinionData:[],

            }
        },

        methods:{
            drawPie(id){

                let token=JSON.parse(localStorage.getItem('user')).token;
                let that = this.$axios.get('/achievement',
                    {    params:{
                            cate:this.cate
                        },
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        }}
                ).then(res=>{
                    this.charts = echarts.init(document.getElementById(id));
                    this.charts.showLoading();
                    this.opinion=res.data.data.name;
                    this.opinionData=res.data.data.list;
                    console.log(this.opinionData)
                    this.charts.setOption({
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: {
                            type : 'category',
                            splitLine: {show:false},
                            data :  this.opinion
                        },
                        yAxis: {
                            type : 'value'
                        },
                        series: [

                            {
                                name: '收入',
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                barWidth: 5,
                                itemStyle: {

                                    barBorderRadius: 20,
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: '#f37404' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#ff1c8b' // 100% 处的颜色
                                        }],
                                        globalCoord: false // 缺省为 false
                                    }
                                },
                                data: this.opinionData
                            }

                        ]
                    })
                    this.charts.hideLoading()
                });


            }
        },
        mounted:function(){

            this.$nextTick(function() {
                this.drawPie('main1')
            })
        },
    }
</script>

<style scoped>

</style>