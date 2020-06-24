<template>
  <x-box>
    <div class="xu-box-title">
      <span>医疗设备分布</span>
    </div>
    <div class="chart-wrapper">
      <x-pie-chart
      v-if="devNum"
      :center="['30%','50%']"
      :radius="['0%','80%']"
      :legend="initLegend()" 
      :source="{'itemName':Object.keys(devNum),'itemValue':Object.values(devNum)}">
      </x-pie-chart>
    </div>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox'
import xPieChart from '@/components/share-components/xPieChart'
export default {
  components:{xBox,xPieChart},
  data(){
    return {
      devNum:null
    }
  },
  methods: {
    //0.初始化饼图的图例
    initLegend(){
      return {
        show:true,
        orient:'vertical',
        right:'10',
        top:'20',
        itemHeight:12,
        textStyle:{
          fontSize:12
        }
      }
    },
    //1.获取数据
    getData(){
      this.$http['getDevNum']()
      .then(res => {
        const {data} = res
        data ? this.devNum = data : ''
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 195px;
}
</style>