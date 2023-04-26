function createPolyGonal(selectorId){
    var myChart7 = echarts.init(document.getElementById(selectorId));//折线图
    var option7 = {
        //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '0',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 5,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                //formatter: '{value} %'
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
            name: '2017年',
            type: 'line',
            //smooth: true,
            data: [2, 6, 3, 8, 5, 8],

            itemStyle: {
                normal: {
                    color: '#2f89cf',
                    opacity: 1,

                    barBorderRadius: 5,
                }
            }
        }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart7.setOption(option7);
    window.addEventListener("resize", function () {
        myChart7.resize();
    });
}
