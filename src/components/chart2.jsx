import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

import baseEchartOption from "../shared/base-echarts-options";
import createEchartsOptions from "../shared/create-echarts-options";
import px from "../shared/px";
const Chart2=()=>{
    const divRef=useRef(null)
    useEffect(()=>{
        var myChart=echarts.init(divRef.current)
        myChart.setOption(createEchartsOptions({
            ...baseEchartOption,
            xAxis: {
                show:false,
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            legend:{
                show:true,
                top:'90%',
                left:'35%',
                textStyle:{
                    fontSize:px(12),
                    color:'white',
                    textShadowOffsetX:0,
                    textShadowOffsetY:0,
                    textShadowColor:'white',
                    textShadowBlur:px(3)

                }
            },
            yAxis: {
                axisTick:{
                    show: false
                },
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
                    name: '刑事案件',
                    type: 'bar',
                    data: [33, 89, 54, 69, 64, 53,55,68],
                    itemStyle:{
                        normal:{
                            color:new echarts.graphic.LinearGradient(0,0,1,0,[{
                                offset:0,
                                color:'#2034f9'
                            },{
                                offset: 1,
                                color:'#04a1ff'
                            }]                            )
                        }
                    }
                },
                {
                    name: '民事案件',
                    type: 'bar',
                    data: [65, 58, 51, 72, 41, 67,41,47],
                    itemStyle:{
                        normal:{
                            color:new echarts.graphic.LinearGradient(0,0,1,0,[{
                                offset:0,
                                color:'#b92ae8'
                            },{
                                offset: 1,
                                color:'#6773e7'
                            }]                            )
                        }
                    }
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