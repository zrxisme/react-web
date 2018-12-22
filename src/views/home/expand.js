import echarts from 'echarts/lib/echarts';
const mytextStyle={
    color:"#333",                //文字颜色
    fontStyle:"normal",         //italic斜体  oblique倾斜
    fontWeight:"normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
    // fontFamily:"sans-serif",   //字体系列
    fontSize:12,                //字体大小
};


export const StringGraph  = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};



//饼图数据
export const pieOption ={
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};




//雷达图数据
export const randOptions = {
    title: {
        text: ''
    },
    //点击提示标签
    // tooltip: {},
    legend: {
        //图例文字展示
        data: [
            { name: '今日更新投诉量' },
            { name: '昨日更新投诉量' }],
        //图例显示在底部
        bottom: 0,
        //图例背景颜色
        backgroundColor: "transparent",
        // 图例标记的图形宽度。[ default: 25 ]
        itemWidth: 12,
        // 图例标记的图形高度。[ default: 14 ]
        itemHeight: 9,
        //图例文字样式设置
        textStyle: mytextStyle
    },
    radar: {
        //雷达图绘制类型，支持 'polygon' 和 'circle' [ default: 'polygon' ]
        shape: 'polygon',
        splitNumber: 3,
        center: ['50%', '50%'],
        radius: '65%',
        //指示器名称和指示器轴的距离。[ default: 15 ]
        nameGap: 5,
        triggerEvent: true,
        name: {
            textStyle: {
                color: '#999',
                backgroundColor: 'transparent'
                // borderRadius: 3,
                // padding: [3, 5]
            },
            formatter: function (value, indicator) {
                value = value.replace(/\S{4}/g, function (match) {
                    return match + '\n'
                })
                // value = value + '\n' + indicator.value;
                return '{a|' + value + '}' + '\n' + '{b|' + indicator.value + '}'
            },
            //富文本编辑 修改文字展示样式
            rich: {
                a: {
                    color: "#999",
                    fontSize: 12,
                    align: "center"

                },
                b: {
                    color: "#333",
                    fontSize: 17,
                    align: "center"
                }
            }
        },
        // 设置雷达图中间射线的颜色
        axisLine: {
            lineStyle: {
                color: '#ddd',
            },
        },
        indicator: [
            { "name": "车辆已售", "value": 380, "max": 500 },
            { "name": "商家冒充个人", "value": 290, "max": 500 },
            { "name": "商家服务态度差", "value": 450, "max": 500 },
            { "name": "电话无法接通", "value": 300, "max": 500 },
            { "name": "走私套牌抵押车", "value": 480, "max": 500 },
            { "name": "价格高于标价", "value": 200, "max": 500 },
            { "name": "卖新车", "value": 350, "max": 500 },
            { "name": "图片与车款不符合", "value": 333, "max": 500 }
        ],
        //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea: {
            show: false,
            areaStyle: {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        }
    },
    series: [{
        name: '投诉统计',
        type: 'radar',
        //显示雷达图选中背景
        areaStyle: { normal: {} },
        data: [
            {
                value: [380, 290, 450, 300, 480, 200, 350, 333],
                // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        //雷达图背景渐变设置
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.5,
                            color: 'rgba(48,107, 231, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(73,168, 255, 0.7)'
                        }]),
                        //去除刻度
                        opacity: 0,
                        //雷达图边线样式
                        lineStyle: {
                            width: 0,
                            color: '#306BE7',
                        },
                    },
                },
                name: '今日更新投诉量',
                id: "jintian"
            },
            {
                value: [10, 250, 100, 370, 80, 500, 190, 400],
                // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0.5,
                            color: 'rgba(139,241, 134, 0.7)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,208, 131, 1)'
                        }]),
                        opacity: 0,
                        lineStyle: {
                            width: 0,
                            color: '#8BF186',
                        },
                    },
                },
                name: '昨日更新投诉量',
                id: "zuotian"
            }
        ]
    }]
};