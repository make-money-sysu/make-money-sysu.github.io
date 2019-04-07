option = {
    title : {
        text: '中山大学学生消费水平',
        subtext: '结果可能存在偏差'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['女生','男生']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['<500','500~1000','1000~1500','1500~2000','2000~3000','3000~5000','5000~10000','>10000']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'女生',
            type:'bar',
            data:[12, 63, 232, 256, 167, 145, 16, 9],
        },
        {
            name:'男生',
            type:'bar',
            data:[9, 48, 301, 267, 246, 235, 10, 4],
        }
    ]
};
                    