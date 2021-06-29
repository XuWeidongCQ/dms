<template>
  <x-box>
    <div class="xu-box-title">
      <span>{{ devTypeCode | codeToDevType }}</span>
    </div>
    <div class="chart-wrapper">
      <x-chart :option="initOptions(radarData)"></x-chart>
    </div>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox.vue'
import xChart from '@/x-views/xChart.vue'
import { getCodeTypes } from '@/global/devTypeCode';

const codeTypes = getCodeTypes()
export default {
  components:{xBox,xChart},
  props:{
    devTypeCode:{
      type:String,
      default:''
    },
    radarData:{
      type:Array,
      default:() => []
    }
  },
  methods:{
    handData(obj){
      const entries = Object.entries(obj)
      const usedEntries = entries.filter(val => val[1])
      const len = entries.length
      return (usedEntries.length / len).toFixed(2)
    },
    initOptions(radarData){    
      if(radarData.length === 0){
        return null
      }
      for(const elm of radarData){
        elm['usedDaysInPast30Days'] = this.handData(elm)
      }
      const data = radarData.map(val => {
        const value = [
          val['averageUsageReliabilityLevel'],
          val['averageUsageExperienceLevel'],
          val['averageMaintenanceOverallProcessSatisfactionLevel'],
          val['averageMaintenanceRecordCounter'],
          val['usedDaysInPast30Days'],
          val['averageHistoryMaintenanceCostSum'],
          val['devicePurchasePrice'],
          val['totalProfitMoney'],  
        ]
        return {
          value:value,
          name:val['deviceName']
        }
      })
      const legend = data.map(val => val['name'])
      // console.log(radarData)
      return {
        legend: {
          data: legend,
          orient:'vertical',
          right:0
        },
        tooltip: {
            trigger: 'item'
        },
        radar: {
          indicator: [
              { name: '体验满意度', max: 5},
              { name: '可靠性满意度', max: 5},
              { name: '维修满意度', max: 5},
              { name: '维修次数'},
              { name: '30天使用率', max: 1},
              { name: '维保费用'},
              { name: '购买价格/元'},
              { name: '总收益/元'}
          ],
          center:['40%','50%'],
          radius:'75%'
        },
        series: [{
            type: 'radar',
            data: data
        }]
      }
    }

  },
  filters:{
    codeToDevType:function(val){
      if(val){
        return codeTypes[val]
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 435px;
}
</style>