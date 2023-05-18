import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

import baseEchartOption from "../shared/base-echarts-options";
import createEchartsOptions from "../shared/create-echarts-options";
const Chart2=()=>{
    const divRef=useRef(null)
    useEffect(()=>{
        var myChart=echarts.init(divRef.current)
        myChart.setOption(createEchartsOptions({
            ...baseEchartOption,
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },

            yAxis: {
                axisLabel:{
                    formatter(val){
                        if(val.length>3){
                            const array=val.split('')
                            array.splice(3,0,'\n')
                            return array.join('')
                        }else {
                            return val
                        }
                    }
                },
                type: 'category',
                data: ['城关区公安局', '七里河公安局', '西固区公安局', '红谷区公安局', '永登区公安局', '皋兰区公安局','榆中区公安局','新区公安局']
            },
            series: [
                {
                    name: '2011',
                    type: 'bar',
                    data: [3, 89, 34, 49, 44, 23]
                },
                {
                    name: '2012',
                    type: 'bar',
                    data: [25, 38, 31, 12, 41, 7]
                },
            ]
        }))
    },[])
    return(<div className="bordered gxCount">
        <h2>案件破获排名</h2>
        <div ref={divRef} className="charts"></div>
    </div>)
}
export default Chart2