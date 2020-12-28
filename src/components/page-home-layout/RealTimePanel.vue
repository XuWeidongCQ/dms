<template>
  <x-box>
    <div class="xu-row">
      <div class="xu-col-9">
        <div v-if="isDemoMode">
          <component :is="demoPanel"></component>
        </div>
        <div v-else>
          <div v-for="ope in opeInProcess" :key="ope.operationNumber">
            <div v-show="selOperationNumber == ope.operationNumber">
              <keep-alive>
                <component :is="currentPanel" 
                :operationNumber='selOperationNumber'
                :deviceCode="selDeviceCode"
                ></component>
              </keep-alive>
            </div>
          </div>
          <div v-show="opeInProcess.length == 0">
            <component :is="'NoRealTimeData'" 
            :operationNumber='selOperationNumber'
            :deviceCode="selDeviceCode"
            ></component>
          </div>
        </div>
      </div>
      <div class="xu-col-3">
        <div class="mb15">
          <span class="xu-text-main-color">演示模式</span>
          <x-swi v-model="isDemoMode" class="float-right"></x-swi>
        </div>
        <div class="real-ope-info">
          <span class="fa fa-bed"> 正在进行的手术</span>
          <ul class="process-ope-wrapper xu-add-scrollBar">
            <li v-for="ope in opeInProcess" 
            :key="ope.operationNumber"
            :class="{'active':selOperationNumber === ope.operationNumber}"
            @click="changeOpe(ope.operationNumber)"
            >
              {{ ope.operationNumber + '#' + ope.operationName + '#' + ope.hospitalOperationNumber}}
            </li>
          </ul>
          <span class=" fa fa-desktop"> 使用仪器</span>
          <ul class="process-ope-wrapper xu-add-scrollBar" v-show="opeInProcess.length !== 0">
            <li v-for="(dev,index) in opeUseDev" 
            :key="index"
            :class="{'active':selDeviceCode === dev.deviceCode}"
            @click="changeDev(dev.deviceCode)"
            >
              {{ index + 1 + '.' + dev.deviceName }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox'
import NoRealTimeData from '@/components/dev-dashboard/NoRealTimeData'
import PuKeYy106 from '@/components/dev-dashboard/PuKeYy106'
import NuoHeNw9002S from '@/components/dev-dashboard/NuoHeNw9002S'
import YiAn8700A from '@/components/dev-dashboard/YiAn8700A'
import BLTA8 from '@/components/dev-dashboard/BLTA8'
import AiQinEGOS600A from '@/components/dev-dashboard/AiQinEGOS600A'
import MindaryT8 from '@/components/dev-dashboard/MindaryT8'
import MindaryWATOEX65 from '@/components/dev-dashboard/MindaryWATOEX65'
import xSwi from '@/x-views/xSwi'
import XSwi from '@/x-views/xSwi.vue'

const pattern = {
  0:'NoRealTimeData',
  30:'NuoHeNw9002S',
  31:'PuKeYy106', 
  32:'BLTA8',
  33:'YiAn8700A',
  42:'MindaryT8',
  43:'MindaryWATOEX65',
  50:'AiQinEGOS600A'
}

export default {
  components:{
    xBox,
    xSwi,
    PuKeYy106,
    NoRealTimeData,
    NuoHeNw9002S,
    YiAn8700A,
    BLTA8,
    AiQinEGOS600A,
    MindaryT8,
    MindaryWATOEX65
  },
  data(){
    return {
      opeInProcess:[],
      opeUseDev:[],
      selOperationNumber:0,
      selDeviceCode:0,
      currentPanel:'NoRealTimeData',
      opePanelPattern:{},//用来存放所有手术的面板组件
      timer:null,
      isDemoMode:true,//用来控制是否是演示模式
      demoPanel:'BLTA8'
    }
  },
  methods:{
    //1.获取正在进行的手术 -- 3s定时访问
    getOpeInProcessData(){
      console.log('获取正在进行的手术')
      this.$http['getOpeInProcess']()
      .then(res => {
        const { data } = res
        let opeInProcess = []
        // console.log(data)
        this.opeInProcess = data.map(ele => {
          return {
            operationNumber:ele.operationNumber,
            operationName:ele.operationName,
            hospitalOperationNumber:ele.hospitalOperationNumber
          }
        });
        opeInProcess = this.opeInProcess.map(ele => ele.operationNumber)
        //初始化选中的手术
        if(this.opeInProcess.length > 0){
          if(!opeInProcess.includes(this.selOperationNumber)){
            this.selOperationNumber = this.opeInProcess[0].operationNumber
          }
        } else {
          this.selOperationNumber = 0
        };
      })
    },
    //2.初始化某一场手术的仪器组件
    initOneOpePanel(opeUseDev){
      for(let ele of opeUseDev){
        this.opePanelPattern[ele.deviceCode] = pattern[ele.deviceCode]
      }
    },
    getOpeUseDevData(operationNumber){
      this.selDeviceCode = 0 //这里的初始化很很重要
      this.$http['getOpeUseDev']({
        params:{operationNumber:operationNumber}
      }).then(res => {
        const {data} = res
        this.opeUseDev = data.map(ele => {
          return {deviceCode:ele.deviceCode,deviceName:ele.deviceName}
        });
        //默认的deviceCode选择手术的第一台仪器
        if(this.opeUseDev.length > 0){
          this.selDeviceCode = this.opeUseDev[0].deviceCode
        } else {
          this.selDeviceCode = 0
        };
        //初始化某一场手术的仪器组件
        this.initOneOpePanel(this.opeUseDev)
      })
    },
    changeOpe(operationNumber){
      this.selOperationNumber = operationNumber
    },
    changeDev(deviceCode){
      this.selDeviceCode = deviceCode
    }
  },
  watch:{
    'selOperationNumber':function(){
      this.getOpeUseDevData(this.selOperationNumber)
    },
    'selDeviceCode':function(){
      // console.log(`选择的deviceCode${this.selDeviceCode}`)
      if(this.opePanelPattern[this.selDeviceCode]){
        this.currentPanel = this.opePanelPattern[this.selDeviceCode]
      } else {
        this.currentPanel = pattern['0']
      }
      
    },
    'isDemoMode':function(newVal,oldVal){
      //只有不是演示模式才能发起发起请求
      clearInterval(this.timer)
      if(!newVal){
        this.getOpeInProcessData()
        this.timer = setInterval(() => {
          this.getOpeInProcessData()
        },3000)
      }
    }
  },
  created(){
    //如果是不是演示模式才进行数据请求
    if(!this.isDemoMode){
      this.getOpeInProcessData()
      this.timer = setInterval(() => {
        this.getOpeInProcessData()
      },3000)
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.real-ope-info {
  height: 96%;
  background-color: #f8f8f8;
  box-sizing: border-box;
  /* border: 1px solid #24c79f; */
  border-radius: 5px;
  color: #111;
  /* outline:1px solid black; */
}
.real-ope-info > span {
  display: inline-block;
  /* font-size: 18px; */
  padding: 10px 5px;
  width: 100%;
  box-sizing: border-box;
}
.process-ope-wrapper{
  margin-bottom: 20px;
  height: 320px;
  /* outline: 1px solid red; */
}
.process-ope-wrapper > li {
  padding: 8px 5px;
  cursor: pointer;
  border-bottom: 1px solid #e9ecef;
  font-size: 14px;
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
}
.active {
  background-color: #24c79f !important;
  color: #ffffff !important;
  transition: background-color 0.3s;
}
</style>