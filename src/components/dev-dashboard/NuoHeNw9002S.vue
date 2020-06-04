<template>
  <div class="real-time-panel-wrapper">
    <div class="chart-wrapper">
      这是曲线区 EMG
    </div>
    <div class="indicator-wrapper">
      <div>
        <span class="indicator-label">CSI,麻醉深度指数</span>
        <span class="indicator-num">2</span>
      </div>
      <div>
        <span class="indicator-label">BS,爆发抑制比</span>
        <span class="indicator-num">123</span>
      </div>
      <div>
        <span class="indicator-label">SQI,信号质量指数</span>
        <span class="indicator-num">23</span>
      </div>
    </div>
  </div>
</template>

<script>
import { createWs } from '@/api/websocket.js'
export default {
  //deviceCodeList表示该手术场次中所有使用的仪器列表，用来确定该仪器面板是否显示
  props:['operationNumber','deviceCode','deviceCodeList'],
  data(){
    return {
      EMG:[],
      CSI:[],
      BS:[],
      SQI:[],

    }
  },
  computed: {
    trigger:function(){
      return '' + this.operationNumber + this.deviceCode
    }
  },
  methods:{

  },
  watch:{
    'operationNumber':{
      handler(newVal,oldVal){
        // this.$destroy()
      },
      // immediate:true
    }
  },
  created(){
    console.log('诺和开启ws',this.operationNumber,this.deviceCode)
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 400px;
  background-color: rgba(80,80,80);
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