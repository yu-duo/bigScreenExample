function createReda(selectorId){
    // 基于准备好的dom，初始化echarts实例
/*    var myChart = echarts.init(document.getElementById(selectorId));
    var data = [{
        title: '**省'
    },
        ['本周'],
        [{
            name: '文本1',
            max: 150
        }, {
            name: '文本2',
            max: 150
        }, {
            name: '文本3',
            max: 150
        }, {
            name: '文本4',
            max: 150
        }, {
            name: '文本5',
            max: 150
        }],
        [43, 100, 28, 3, 150],
    ]
    var option = {
        color: ['#9DD060', '#35C96E', '#4DCEF8'],
        tooltip: {},
        radar: {
            center: ['50%', '55%'],
            radius: ["25%", "70%"],
            name: {
                textStyle: {
                    color: '#72ACD1'
                }
            },
            splitLine: {
                lineStyle: {

                    color: 'rgba(255,255,255,.0',

                    width: 2

                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)',
                    width: 1,
                    type: 'dotted'

                },
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
                }
            },
            indicator: data[2]
        },
        series: [{
            name: '',
            type: 'radar',
            data: [{
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[3],
                name: data[1][0]
            },
                {
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[4],
                    name: data[1][1]
                },
                {
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[5],
                    name: data[1][2]
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });*/
    let data={
        "orderNum":[
            "39",
            "77",
            "96",
            "41",
            "24",
            "17",
        ],
        "categoryArr":[
            "订购附属",
            "新装",
            "拆机",
            "改客户资料",
            "补换卡",
            "过户",
        ],
        "avgTime":[
            "10.79",
            "17.05",
            "14.84",
            "10.07",
            "5.58",
            "10.36",
        ],
        "legendArr":[
            "耗时时间",
            "订单量"
        ]
    }
    var maxOrder=Math.max.apply(null,data.orderNum);
    var option = {
        title : {text:'',subtext:'',top:'3',right:'0'},
        tooltip: {trigger: 'axis'},
        grid: {left: '15%',right: '15%',bottom: '18%',top:'15%'},
        xAxis: {type: 'category',axisLine: {lineStyle: {color: '#57617B'}},axisLabel: {interval:0,textStyle: {color:'#fff',}},data: data.categoryArr},
        yAxis:[
            {
                type: 'value',name: '',
                axisLine: {lineStyle: {color: '#57617B'}},
                axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#fff'},formatter:'{value}分'},
                splitLine: {show: false}
            },
            {
                type: 'value',name: '',max:maxOrder+parseInt(maxOrder*0.2),
                axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#fff'},formatter:'{value}笔'},
                splitLine: {
                    show: true,
                    lineStyle:{
                        type:'dashed',
                        color: ['#25CEF3']
                    }
                }
            }
        ],
        series: [
            {
                name:'耗时时间',
                type:'line',
                yAxisIndex:0,
                smooth: false,
                symbolSize:5,
                lineStyle: { normal: {width: 2}},
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(230, 48, 123, 0.8)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(230, 48, 123, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: { color: '#DA2F78'}},
                data:data.avgTime
            },
            {
                name:'订单量',
                type:'bar',
                barWidth:12,
                yAxisIndex:1,
                itemStyle : {
                    normal: {
                        barBorderRadius:[10, 10, 0, 0],
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "#4033F9"
                        }, {
                            offset: 0.8,
                            color: "#BA97F9"
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                data:data.orderNum
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(selectorId));
    myChart.clear();
    if(data.orderNum.length>0){
        myChart.setOption(option);
    }else{
        noDataTip($("#"+selectorId));
    }
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
