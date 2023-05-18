import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import px from '../shared/px'
import baseEchartOption from "../shared/base-echarts-options";
import createEchartsOptions from "../shared/create-echarts-options";
const Chart1=()=>{
    const divRef=useRef(null)
    useEffect(()=>{
        var myChart=echarts.init(divRef.current)
        myChart.setOption(createEchartsOptions({
            ...baseEchartOption,
            xAxis: [
                {
                    type: 'category',
                    data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '皋兰区','榆中区','兰州新区'],
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        lineStyle:{
                            color: '#083B70'
                        }
                    },
                    axisLabel:{
                        interval:0,
                        fontSize: px(12),
                        formatter(val){
                            if(val.length>2){
                                const array=val.split('')
                                array.splice(2,0,'\n')
                                return array.join('')
                            }else {
                                return val
                            }
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine:{
                        onZero:true,
                        show:true,
                        lineStyle: {
                            color:'#083B70'
                        }
                    },
                    axisLabel:{
                        margin:px(8),
                        fontSize: px(12),
                    },
                    splitLine:{
                        show:false
                    }
                }
            ],
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 15, 40, 25, 30,35,40,15,25]
                }
            ]
        }))
    },[])
    return(<div className="bordered gxCount">
        <h2>案发派出所管辖统计</h2>
        <div ref={divRef} className="charts"></div>
    </div>)
}
export default Chart1