import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

import baseEchartOption from "../shared/base-echarts-options";
import createEchartsOptions from "../shared/create-echarts-options";
import px from "../shared/px";

const Chart3=()=>{
    const divRef=useRef(null)
    useEffect(()=>{
        var myChart=echarts.init(divRef.current)
        myChart.setOption(createEchartsOptions({
            ...baseEchartOption,
            legend: {

                bottom: px(-5),
                textStyle: {color: 'white'},
                itemWidth: px(16),
                itemHeight: px(9),
            },
            grid: {
                x: px(20),
                x2: px(20),
                y: px(20),
                y2: px(39),
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2015','2016','2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
            },
            yAxis: {
                splitLine: {lineStyle: {color: '#073E78'}},
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    }
                },
                axisLine:{show:false},
                type: 'value'
            },

            series:[
                {
                    name: '抢劫',
                    type: 'line',
                    data: [0.01, 0.05, 0.03, 0.04, 0.09, 0.06, 0.07, 0.08, 0.05].reverse()
                },
                {
                    name: '醉驾',
                    type: 'line',
                    data: [0.04, 0.01, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.07].reverse()
                },
                {
                    name: '盗窃',
                    type: 'line',
                    data: [0.08, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.10].reverse()
                },
                {
                    name: '故意杀人',
                    type: 'line',
                    data: [0.05, 0.03, 0.06, 0.07, 0.05, 0.09, 0.10, 0.11, 0.06].reverse()
                },
                {
                    name: '故意伤人',
                    type: 'line',
                    data: [0.05, 0.06, 0.07, 0.08, 0.01, 0.10, 0.11, 0.12, 0.13].reverse()
                }
            ].map(obj => ({
            ...obj,
            symbol: 'circle',
            symbolSize: px(12),
            lineStyle: {width: px(2)}
        }))
        }))
    },[])
    return(<div className="bordered qsAnalyse">
        <h2>发案趋势分析</h2>
        <div ref={divRef} className="chartsS3"></div>
    </div>)
}
export default Chart3



