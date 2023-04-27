function createPillarWidthCoordinate(selectorId){
    var myChart2 = echarts.init(document.getElementById(selectorId));//柱状
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['文本1', '文本2'],
            top: '2%',
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: '12',

            },
            itemWidth: 12,
            itemHeight: 12,
            itemGap: 35
        },
        grid: {
            left: '0%',
            top: '40px',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
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
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '14',
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
                    fontSize: '14',
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
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
            name: '文本1',
            type: 'bar',
            data: [2, 3, 3, 9, 15, 12, 6, 4, 6],
            barWidth: '20%', //柱子宽度
            // barGap: 1, //柱子之间间距
            itemStyle: {
                normal: {
                    color: '#2f89cf',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        }, {
            name: '文本2',
            type: 'bar',
            data: [1, 4, 5, 11, 12, 9, 5, 6, 5],
            barWidth: '20%',
            // barGap: 1,
            itemStyle: {
                normal: {
                    color: '#ffe400',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        },
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option);
    window.addEventListener("resize", function () {
        myChart2.resize();
    });

}
function createPillar(selectorId){
    var myChart5 = echarts.init(document.getElementById(selectorId));//柱状无框
    var option5 = {
        grid: {
            left: '0',
            right: '0',
            top: '10%',
            bottom: '24%',
            //containLabel: true
        },
        legend: {
            data: ['协调任务', '需求任务', '开发任务'],
            bottom: 0,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "#fff",
                fontSize: '10',

            },

            itemGap: 5
        },
        tooltip: {
            show: "true",
            trigger: 'item'
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            axisLabel: {
                show: false,
                //   inside: true,
                textStyle: {
                    color: "rgba(255,255,255,1)",
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['业务办量统计']
        }

        ],
        series: [
            {
                name: '协调任务',
                type: 'bar',
                barWidth: '20',

                itemStyle: {
                    normal: {
                        show: true,
                        color: '#20aa92',
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barGap: '100%',
                data: [20],
                label: {
                    formatter: "{c}项",
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontSize: 12,
                        color: 'rgba(255,255,255,.6)',
                    }
                },
            },
            {
                name: '需求任务',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#ffe400',
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barWidth: '20',
                data: [40],
                label: {
                    formatter: "{c}项",
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontSize: 12,
                        color: 'rgba(255,255,255,.6)',
                    }
                },
            },
            {
                name: '开发任务',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#0c93dc',
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barWidth: '20',
                data: [127],
                label: {
                    formatter: "{c}项",
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontSize: 12,
                        color: 'rgba(255,255,255,.6)',
                    }
                },
            },

        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart5.setOption(option5);

    window.addEventListener("resize", function () {
        myChart5.resize();
    });
}
function createCustomPillar(selectorId) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(selectorId));
    var data = {
        "chart": [{
            month: "NO.1",
            value: 600,

        },

            {
                month: "NO.2",
                value: 500,

            },

            {
                month: "NO.3",
                value: 614,

            },

            {
                month: "NO.4",
                value: 442,

            },

            {
                month: "NO.5",
                value: 322

            }

        ]
    }
    var xAxisMonth = [],
        barData = [],
        lineData = [];
    for (var i = 0; i < data.chart.length; i++) {
        xAxisMonth.push(data.chart[i].month);
        barData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].value
        });
        lineData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].ratio
        });
    }

    option = {
        // backgroundColor: "#020d22",
        title: '',
        grid: {
            top: '10%',
            left: '18%',
            bottom: '3%',
            right:'5%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0]["data"].name + "<br/>" + '报警次数: ' + params[1]["data"].value+'次' ;
            }
        },
        xAxis: [{
            type: 'category',
            show: false,
            data: ['NO.1', 'NO.2', 'NO.3', 'NO.4', 'NO.5'],
            axisLabel: {
                textStyle: {
                    color: '#b6b5ab'
                }
            }
        },
            {
                type: 'category',
                position: "bottom",
                data: xAxisMonth,
                boundaryGap: true,
                // offset: 40,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    color: "rgba(255,255,255,0.2)"
                },
                axisLabel: {
                    textStyle: {
                        color: '#b6b5ab'
                    }
                }
            }

        ],
        yAxis: [{
            show: true,
            offset: 52,
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                color: "rgba(255,255,255,0.2)"
            },
            axisLabel: {
                show: true,
                color: '#b6b5ab'
            }
        }, {
            show: false,
            type: "value",
            // name: "合格率(%)",
            nameTextStyle: {
                color: '#ccc'
            },
            axisLabel: {
                color: '#ccc'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        }],
        color: ['#e54035'],
        series: [{
            name: '训练人次',
            type: 'pictorialBar',
            xAxisIndex: 1,
            barCategoryGap: '-80%',
            // barCategoryGap: '-5%',
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                        ];
                        return colorList[params.dataIndex];
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: barData,
        },
            {
                symbol: 'image://data:image/png;base64,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',
                symbolSize: 42,
                name: "完成率",
                type: "line",
                yAxisIndex: 1,
                data: lineData,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        color: {
                            colorStops: [{
                                offset: 0,
                                color: '#821eff'
                            },

                                {
                                    offset: 1,
                                    color: '#204fff'
                                }
                            ],
                        }
                    }
                }
            }
        ]
    }


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
