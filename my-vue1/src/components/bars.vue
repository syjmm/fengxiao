<template>
    <div id="main1" style="width: 7rem;height: 6.5rem;">

    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "bars",
        data () {
            return {
                charts: '',
                opinion:[],
                opinionData:[]
            }
        },
        methods:{
            drawPie(id){
                this.charts = echarts.init(document.getElementById(id))
                let token=JSON.parse(localStorage.getItem('user')).token;
                this.$axios.get('/team_achievement',
                    { params:{
                            cate:"d"
                        },
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        }}
                ).then(res=>{
                    this.opinion=res.data.data.name;
                    this.opinionData=res.data.data.list;
                    console.log(this.opinionData)
                    this.charts.setOption({
                        tooltip: {},
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [{
                            type: 'value',
                            show:false,
                            splitLine: {
                                show: false
                            }
                        }],
                        yAxis: [{
                            type: 'category',
                            data: ['张三','张三','张三','张三','张三','张三','张三',],
                            axisLabel:{show:true},
                            axisLine:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            },
                            splitLine:{
                                show:false
                            }

                        }],
                        series: [{
                            type: 'bar',
                            label: {
                                normal: {
                                    position: 'right',
                                    show: true
                                }
                            },
                            barWidth: 20,
                            itemStyle: {
                                barBorderRadius: 20,
                                color:'#f9444d',
                            },
                            data:[12,22,33,44,4,66,76]
                        },]
                    })

                });

            }
        },
        mounted(){

            this.$nextTick(function() {
                this.drawPie('main1')
            })
        }
    }
</script>

<style scoped>

</style>