<template>
  <div class="real-time-panel-wrapper">
    <div class="chart-wrapper">
      <x-basic-chart 
      :xName="'时间'" 
      :yName="'EMG'"
      :type="'line'"
      :color="['#fffd36']"
      :source="{x:x,EMG:EMG}"
      :areaStyle="null"
      >
      </x-basic-chart>
    </div>
    <div class="indicator-wrapper">
      <div>
        <span class="indicator-label">CSI,麻醉深度指数</span>
        <span class="indicator-num">{{ CSI }}</span>
      </div>
      <div>
        <span class="indicator-label">BS,爆发抑制比</span>
        <span class="indicator-num">{{ BS }}</span>
      </div>
      <div>
        <span class="indicator-label">SQI,信号质量指数</span>
        <span class="indicator-num">{{ SQI }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { createWs } from '@/api/websocket.js'
import xBasicChart from '@/components/share-components/xBasicChart'
export default {
  //deviceCodeList表示该手术场次中所有使用的仪器列表，用来确定该仪器面板是否显示
  props:['operationNumber','deviceCode'],
  components: {
    xBasicChart
  },
  data(){
    return {
      MAX_LENGTH:100,
      x:[], //时间
      EMG:[],
      CSI:'--',
      BS:'--',
      SQI:'--',
      ws:null,
      DEV_CODE:'30'
    }
  },
  methods:{
    openWs(operationNumber,deviceCode){
      this.closeWs()
      this.ws = createWs(operationNumber,deviceCode,this.$utils.getFormatterDate().timestamp)
      this.ws.onopen = function(){
        console.log(`手术${operationNumber}的诺和${deviceCode}开启ws`)
      }
      this.ws.onmessage = this.onmessage

    },
    closeWs(){
      if(this.ws){
        console.log(`诺和关闭之前的ws`)
        this.ws.close()
      }
    },
    initData(){
      console.log(`手术${this.operationNumber}的诺和初始化数据`)
      this.x = []
      this.EMG = []
      this.CSI = '--'
      this.BS = '--'
      this.SQI = '--' 
    },
    parseData(data){
      const {bs:BS,csi:CSI,emg:EMG,sqi:SQI,gmtCreate} = JSON.parse(data)
      if(this.EMG.length > this.MAX_LENGTH){
        this.x.shift()
        this.EMG.shift()
      }
      this.EMG.push(EMG)
      this.x.push(gmtCreate.split(' ')[1])
      this.CSI = CSI
      this.BS = BS
      this.SQI = SQI
    },
    onmessage(e){
      console.log(`手术${this.operationNumber}的诺和收到一条数据`)
      this.parseData(e.data)
    }
  },
  watch:{
    'operationNumber':{
      handler(newVal,oldVal){
        if(this.deviceCode === this.DEV_CODE){
          this.initData()
          this.openWs(newVal,this.deviceCode)
        } else {
          this.closeWs()
        }
      },
      immediate:true
    }
  },
  created(){
    // console.log(`手术${this.operationNumber}的诺和开启ws`)
  },
  beforeDestroy(){
    this.closeWs()
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 400px;
  background-color: rgba(120,120,120);
  margin-bottom: 10px;
}
.indicator-wrapper {
  display: flex;
  height: 268px;
}
.indicator-wrapper > div {
  flex: 1;
  border-radius: 10px;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
.indicator-wrapper > div:first-child {
  color: #fffd36;
}
.indicator-wrapper > div:nth-child(2){
  margin: 0 10px;
  color: #fdae96;
}
.indicator-wrapper > div:last-child {
  color: #5bf751;
}
.indicator-label {
  position: absolute;
  top:15px;
  left: 15px;
  font-size: 30px;
}
.indicator-num {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 90px;
}
</style>