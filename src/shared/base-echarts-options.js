import px from "./px";

const baseEchartOption={
    textStyle:{
        fontSize:px(12),
        color:'#79839E'
    },
    title:{
        show:false
    },
    legend:{
        show:false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        x: px(22),
        y: px(22),
        x2: px(22),
        y2:px(22),
        containLabel: true
    },
 }
 export default baseEchartOption