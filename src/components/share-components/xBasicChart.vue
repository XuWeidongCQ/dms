<template>
  <div ref="chart" id="chart"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
export default {
  props:{
    //数据项颜色
    color:{
      type:Array,
      default:() => ['#4ea397','#22c3aa','#7bd9a5','#d0648a','#f58db2','#f2b3c9'],
    },
    //图类型 line bar
    type:{
      type:String,
      default:'line'
    },
    //配置图例
    legend:{
      type:Object,
      default:null
    },
    //配置x轴
    xName:{
      type:String,
      default:''
    },
    //配置y轴
    yName:{
      type:String,
      default:''
    },
    //数据 {x:[],y1:[],y2:[],...}
    source:{
      type:Object,
      default:null
    },
    //是否平滑
    smooth:{
      type:Boolean,
      default:false
    },
    //是否填充颜色
    areaStyle:{
      type:Object,
      default:() => {return {}}
    }
  },
  methods: {
    initOption(){
      const option = {}
      option.dataset = {}
      option.dataset.source = this.source
      option.color = this.color
      option.yAxis = {type:'value',nameLocation:'center',nameGap:25,name:this.yName}
      option.xAxis = {type:'category',nameLocation:'center',nameGap:20,name:this.xName}
      option.legend = this.legend
      option.tooltip = {trigger:'item'}
      option.grid = {containLabel: true, left:'25px', right:'5px', top:'15px', bottom:'25px'}
      option.series = []
      for(let key in this.source){
        if(key !== 'x'){
          option.series.push({
            type:this.type,
            areaStyle:this.areaStyle,
            smooth:this.smooth,
            encode:{x:'x',y:key,seriesName:key}
          })
        }
      };
      return option
    },
    draw(){
      const option = this.initOption()
      if(this.$refs['chart']){
        echarts.init(this.$refs['chart']).setOption(option)
      }
    }
  },
  mounted(){
  },
  watch:{
    'source':{
      deep:true,
      handler(newVal,oldVal){ 
        //如果不用nextTick，那么在这个组件初始化的时候由于不能操作DOM而报错
        // this.$nextTick(() => {
          this.draw()
        // })
      },
      immediate:true
    }
  }
}
</script>

<style>
#chart {
  height: 100%;
}
</style>