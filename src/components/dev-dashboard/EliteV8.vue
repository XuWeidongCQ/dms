<template>
  <div class="real-time-panel-wrapper">
    <div class="row-wrapper">
      <div class="chart-wrapper"></div>
      <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>心率</span>
          <span>(bpm)</span>
          <span>120</span>
          <span>50</span>
        </span>
        <span class="indicator-num">{{hr}}</span>
      </div>
      <div class="indicator-wrapper">
        <div class="indicator-small">
        <span class="indicator-label-small">
          PVCs
         </span>
        <span class="indicator-num-small">
        {{pvcs}}
        </span>
      </div>
        <div class="indicator-small">
        <span class="indicator-label-small">
          ST
         </span>
          <span class="indicator-num-small">
        关
        </span>
        </div>
      </div>
    </div>
    <div class="row-wrapper">
      <div class="chart-wrapper"></div>
      <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>Art</span>
          <span>(mmHg)</span>
          <span>160</span>
          <span>90</span></span>
        <span class="indicator-num">
          <span>{{artSys}}/{{artDia}}</span><span>({{artMap}})</span>
        </span>
      </div>
    </div>
    <div class="row-wrapper">
      <div class="chart-wrapper"></div>
      <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>血氧</span>
          <span>(%)</span>
          <span>100</span>
          <span>90</span></span>
          <span class="indicator-num">{{spo2}}</span>
      </div>
      <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>脉率</span>
          <span>(bpm)</span>
          <span>120</span>
          <span>50</span></span>
        <span class="indicator-num">{{pr}}</span>
      </div>
    </div>
    <div class="row-wrapper">
      <div class="chart-wrapper"></div>
      <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>CVP</span>
          <span>(mmHg)</span>
          <span>10</span>
          <span>0</span></span>
        <span class="indicator-num">{{cvpMap}}</span>
      </div>
      <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>呼吸率</span>
          <span>(rpm)</span>
          <span>30</span>
          <span>0</span></span>
        <span class="indicator-num">{{rr}}</span>
      </div>
    </div>
    <div class="row-wrapper">
      <div class="chart-wrapper"></div>
      <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>血压</span>
          <span>(mmHg)</span>
          <span>160</span>
          <span>90</span></span>
        <span class="indicator-num">
          <span>{{nibpSys}}/{{nibpDia}}</span><span>({{nibpMap}})</span>
        </span>

      </div>
    </div>
    <div class="row-wrapper">
      <div class="chart-wrapper">
        <div class="row-wrapper">
        <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>LAP</span>
          <span>(mmHg)</span>
          <span>10</span>
          <span>0</span></span>
          <span class="indicator-num">{{lapMap}}</span>
        </div>
        <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>体温</span>
          <span>(℃)</span>
         </span>
          <span class="indicator-num-t">
          <span class="indicator-num-sub">
            <span class="label-small">T1</span><span class="number-small">{{temp1.toFixed(1)}}</span>
          </span>
          <span class="indicator-num-sub">
            <span class="label-small">T2</span><span class="number-small">{{temp2.toFixed(1)}}</span>
          </span>
          <span class="indicator-num-sub">
            <span class="label-small">TD</span><span class="number-small">{{this.tempD.toFixed(1)}}</span>
          </span>
          </span>
        </div>
        </div>
      </div>
      <div class="indicator-wrapper">
        <span class="indicator-label">
          <span>P2</span>
          <span>(mmHg)</span>
          <span>160</span>
          <span>90</span></span>
        <span class="indicator-num">
          <span>{{p2Sys}}/{{p2Dia}}</span><span>({{p2Map}})</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EliteV8",
    data(){
      return{
        hr:60,
        pvcs:0,
        artSys:120,
        artDia:80,
        artMap:93,
        spo2:99,
        pr:60,
        cvpMap:7,
        rr:14,
        nibpSys:'--',
        nibpDia:'--',
        nibpMap:'--',
        p2Sys:120,
        p2Dia:80,
        p2Map:93,
        lapMap:'10',
        temp1:36,
        temp2:37
      }
    },
    computed:{
      tempD(){
        return Math.abs(this.temp1 - this.temp2)
      }
    }
  }
</script>

<style scoped>
  .row-wrapper{
    box-sizing: border-box;
    position: relative;
    height: 115px;
    display: flex;
  }
  .chart-wrapper{
    box-sizing: border-box;
    flex: 0 0 550px;
    border-radius: 5px;
  }

  .row-wrapper:not(:last-child) >.chart-wrapper{
    border:1px solid #eeeeee;
  }
  .indicator-wrapper{
    box-sizing: border-box;
    position: relative;
    flex: 1;
    padding: 2px 0;

  }
  .row-wrapper:first-child{
    color: rgb(91,245,8);
  }
  .row-wrapper:nth-child(2),.row-wrapper:last-child{
    color: rgb(223, 85, 106);
  }
  .row-wrapper:nth-child(3){
    color: rgb(103,244,245);
  }
  .row-wrapper:nth-child(4){
    color: rgb(253,72,98);
  }
  .row-wrapper:nth-child(4) > .indicator-wrapper:last-child{
    color: rgb(247,231,17);
  }
  .row-wrapper:nth-child(5){
    color: rgb(255,255,255);
  }
  .row-wrapper:last-child >.chart-wrapper > .row-wrapper >.indicator-wrapper:last-child{
    color: rgb(247,231,17);
  }
  .row-wrapper:first-child >.indicator-wrapper:nth-last-of-type(1){
    flex: 0.5;
  }
  .row-wrapper:last-child >.chart-wrapper > .row-wrapper{
    width: 280px;
  }
  .row-wrapper:last-child >.chart-wrapper > .row-wrapper >.indicator-wrapper{
    flex: 1;
  }
 
  .indicator-label{
    position: absolute;
    left:1px;
    font-size: 12px;
    transform: scale(0.9);
  }
  .indicator-label > span{
    display: block;
  }
  .indicator-label > span:nth-last-child(-n + 2){
    padding-left: 10px;
    text-align: right;
  }
  .indicator-num{
    position: absolute;
    top:50%;
    left:60%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 55px;
  }
  .row-wrapper:nth-child(2) >.indicator-wrapper > .indicator-num{
    font-size: 25px;
  }
  .row-wrapper:nth-child(n+5) >.indicator-wrapper > .indicator-num{
    font-size: 25px;
  }
  .row-wrapper:nth-child(2) >.indicator-wrapper > .indicator-num > span:first-child {
    font-size: 45px;
  }
  .row-wrapper:nth-child(n+5) >.indicator-wrapper > .indicator-num > span:first-child{
    font-size: 45px;
  }
  .row-wrapper:nth-child(3) >.indicator-wrapper:last-child > .indicator-num{
    font-size: 40px;
  }
  .indicator-num-t{
    position: absolute;
    top:50%;
    left:60%;
    transform: translateX(-50%) translateY(-50%);
  }
  .indicator-num-sub{
    display: block;
  }
  .indicator-num-sub > .label-small{
    font-size: 10px;
  }
  .indicator-num-sub > .number-small{
    font-size: 24px;
    margin-left: 10px;
  }
  .indicator-small{
    margin-top: 20px;
  }
  .indicator-label-small,.indicator-num-small{
    font-size: 10px;
    font-weight: bold;
    /*color: rgb(91,245,8);*/
    padding: 8px;
  }
</style>
