<template>
  <x-box>
    <div class="xu-box-title">
      <span>设备开机数</span>
      <div class="select-wrapper">
        <x-button :value="'一个月内'" :size="'sm'" :type="'cancel'" @click="getHistoryOf(30)" :class="{'active':days===30}"></x-button>
        <x-button :value="'半个月内'" :size="'sm'" :type="'cancel'" @click="getHistoryOf(15)" :class="{'active':days===15}"></x-button>
        <x-button :value="'一周以内'" :size="'sm'" :type="'cancel'" @click="getHistoryOf(7)" :class="{'active':days===7}"></x-button>
      </div>
    </div>
    <div class="xu-box-content chart-wrapper">
      <x-basic-chart 
      :source="historyData"
      :yName="'数量/台'"
      :xName="'时间'">
      </x-basic-chart>
    </div>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox'
import xBasicChart from '../share-components/xBasicChart'
import xButton from '@/x-views/xButton'
export default {
  components:{xBox,xBasicChart,xButton},
  data(){
    return {
      historyData:null,
      days:15
    }
  },
  methods: {
    getData(days=this.days){
      this.$http['getDevHistoryTurnOnNums']({params:{days:days}})
      .then(res => {
        const {data} = res
        this.historyData = {}
        this.historyData['x'] = Object.keys(data)
        this.historyData['y'] = Object.values(data)
      })
    },
    getHistoryOf(days){
      this.days = days
      this.getData()
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 250px;
}
.select-wrapper {
  position: absolute;
  top:20px;
  right: 20px;
  font-size: 16px;
}
.active {
  background-color: #24c79f;
  color: #ffffff;
}
</style>