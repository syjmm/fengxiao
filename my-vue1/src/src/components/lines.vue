<template>
    <div id="main1" style="width: 7rem;height: 6.5rem;">

    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "lines",
        props:["cate"],
        data () {
            return {
                charts: '',
                opinion:[],
                opinionData:[]
            }
        },
        methods:{
            drawPie(id){
                this.charts = echarts.init(document.getElementById(id));
                let token=JSON.parse(localStorage.getItem('user')).token;
                let that = this.$axios.get('/achievement',
                    {    params:{
                            cate:this.cate
                        },
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        }}
                ).then(res=> {
                    this.opinion = res.data.data.name;
                    this.opinionData = res.data.data.list;
                    console.log(this.opinionData)
                    this.charts.setOption({
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        tooltip: {
                            trigger: 'axis',

                        },

                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data:this.opinion
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} '
                            },
                            axisPointer: {
                                snap: true
                            }
                        },

                        series: [
                            {
                                name: '新增人数',
                                type: 'line',
                                symbol: "circle",
                                data: this.opinionData,
                                itemStyle: {
                                    normal: {
                                        color: '#f9444d',

                                    }
                                },
                            }
                        ]
                    })
                })
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