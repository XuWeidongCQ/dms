<template>
  <div class="panel-wrapper">
    <div class="chart-wrapper">
      这是曲线区
    </div>
    <div class="indicator-wrapper">
      <div>
        <span class="indicator-label">Ai</span>
        <span class="indicator-num">2</span>
      </div>
      <div>
        <span class="indicator-label">BSR</span>
        <span class="indicator-num">123</span>
      </div>
      <div>
        <span class="indicator-label">EMG</span>
        <span class="indicator-num">23</span>
      </div>
    </div>
  </div>
</template>

<script>
import xBasicChart from '@/components/share-components/xBasicChart'
export default {
  components:{xBasicChart},
  props:[],
  data(){
    return {
      EEG:[],
      Ai:[],
      BSR:[],
      EMG:[]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.panel-wrapper {
  padding: 10px;
}
.chart-wrapper {
  height: 422px;
  background-color: #cccccc;
  margin-bottom: 10px;
}
.indicator-wrapper {
  display: flex;
  height: 240px;
}
.indicator-wrapper > div {
  flex: 1;
  border: 3px solid #ffffff;
  border-radius: 10px;
  height: 100%;
  position: relative;
}
.indicator-wrapper > div:nth-child(2){
  margin: 0 10px;
}
.indicator-label {
  position: absolute;
  top:15px;
  left: 15px;
  font-size: 40px;

}
.indicator-num {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 90px;
  color: #ffffff;
}
</style>