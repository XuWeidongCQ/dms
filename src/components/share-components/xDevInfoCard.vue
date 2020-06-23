
<template>
  <x-box class="dev-card-wrapper">
    <!-- 第一行 -->
    <div class="dev-evaluation-wrapper">
      <!-- 仪器信息 -->
      <div class="dev-info-wrapper">
        <div class="dev-img-wrapper">
          <img :src="imgUrl">
        </div>
        <div class="dev-describe-wrapper">
          <p>厂商：{{ devCompany }}</p>
          <p>产品：{{ devName }}</p>
          <p>型号：{{ devType }}</p>  
        </div>
      </div>
      <div class="experience-pie-wrapper">
        <div class="chart-wrapper">
          <x-pie-chart
          titleText="使用体验"
          :radius="['45%','60%']"
          :center="['50%','37%']"
          v-if="devEvaluationInfo"
          :source="{'itemName':Object.keys(this.devEvaluationInfo.experienceLevel),
                    'itemValue':Object.values(this.devEvaluationInfo.experienceLevel)}"
          :legend="initLegend()"
          > 
          </x-pie-chart>
        </div> 
      </div>
      <div class="reliable-pie-wrapper">
        <div class="chart-wrapper">
          <x-pie-chart
          titleText="临床可靠性"
          :radius="['45%','60%']"
          :center="['50%','37%']"
          v-if="devEvaluationInfo"
          :source="{'itemName':Object.keys(this.devEvaluationInfo.reliabilityLevel),
                    'itemValue':Object.values(this.devEvaluationInfo.reliabilityLevel)}"
          :legend="initLegend()"
          > 
          </x-pie-chart>
        </div> 
      </div>
      <div class="error-pie-wrapper">
        <div class="chart-wrapper">
          <x-pie-chart
          titleText="术中故障情况"
          :color="['#4ea397','#d0648a']"
          :radius="['45%','60%']"
          :center="['50%','37%']"
          v-if="devEvaluationInfo"
          :source="{'itemName':['无故障','有故障'],
                    'itemValue':Object.values(this.devEvaluationInfo.error)}"
          :legend="initLegend()"
          > 
          </x-pie-chart>
        </div>
      </div>
    </div>
    <!-- 第二行 -->
    <div class="spec-dev-evaluation-wrapper bg-gray">
      <div class="serial-wrapper xu-add-scrollBar">
        <x-list 
        :items="serialNumberList"
        :activeItem="selSerialNumber"
        @click="changeSerialNumber($event)"
        >
        </x-list>
      </div>
      <div class="spec-dropout-pie-wrapper">
        <div class="dropout-chart-wrapper">
          <x-inner-pie-chart 
          :titleText="'平均掉线率'"
          :radius="['55%','70%']"
          :center="['50%','55%']"
          :color="['#019b4c','#e62229','#e0a800']"
          :source="{'y':[1-statisticInfo.averageDropRate,statisticInfo.averageDropRate]}"
          :isModalChart="true"
          ></x-inner-pie-chart>
        </div>
        <p>已使用：{{ statisticInfo.deviceServiceLife }}年</p>
        <p>总采集时长：{{ statisticInfo.operationDurationTimeAll }}秒</p>
        <x-button
        :disable="statisticInfo.dataNumber === 0" 
        :value="'已完成' + opeNum + '场手术'"
        :type="'success'"
        @click="emitSelSerialNumber(true)"
        ></x-button> 
      </div>
      <div class="spec-experience-pie-wrapper">
        <div class="chart-wrapper">
          <x-pie-chart
          titleText="使用体验"
          :center="['50%','37%']"
          v-if="specDevEvaluationInfo"
          :source="{'itemName':Object.keys(this.specDevEvaluationInfo.experienceLevel),
                    'itemValue':Object.values(this.specDevEvaluationInfo.experienceLevel)}"
          :legend="initLegend()"
          > 
          </x-pie-chart>
        </div> 
      </div>
      <div class="spec-reliable-pie-wrapper">
        <div class="chart-wrapper">
          <x-pie-chart
          titleText="临床可靠性"
          :center="['50%','37%']"
          v-if="specDevEvaluationInfo"
          :source="{'itemName':Object.keys(this.specDevEvaluationInfo.reliabilityLevel),
                    'itemValue':Object.values(this.specDevEvaluationInfo.reliabilityLevel)}"
          :legend="initLegend()"
          > 
          </x-pie-chart>
        </div> 
      </div>
      <div class="spec-error-pie-wrapper">
        <div class="chart-wrapper">
          <x-pie-chart
          titleText="术中故障情况"
          :color="['#4ea397','#d0648a']"
          :center="['50%','37%']"
          v-if="specDevEvaluationInfo"
          :source="{'itemName':['无故障','有故障'],
                    'itemValue':Object.values(this.specDevEvaluationInfo.error)}"
          :legend="initLegend()"
          >
          </x-pie-chart>
        </div> 
      </div>
    </div>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox'
import xInnerPieChart  from '@/components/share-components/xInnerPieChart'
import xButton from '@/x-views/xButton'
import xList from '@/x-views/xList'
import xPieChart from '@/components/share-components/xPieChart'
export default {
  components: {
    xBox,
    xInnerPieChart,
    xButton,
    xList,
    xPieChart
  },
  props:{
    //1.接受一个deviceCode
    deviceCode:{
      type:String,
      default:''
    },
    //2.接受一个厂商
    devCompany:{
      type:String,
      default:''
    },
    //3.接受一个设备图片URL
    imgUrl:{
      type:String,
      default:''
    },
    //4.接受一个设备的名称
    devName:{
      type:String,
      default:''
    },
    //5.接受设备的型号
    devType:{
      type:String,
      default:''
    },
    //6.接受一个可测的参数列表
    devParams:{
      type:Array,
      default:() => {return []}
    }
  },
  data(){
    return {
      serialNumberList:[],
      statisticInfo:{},
      selSerialNumber:'0',
      devEvaluationInfo:null,
      specDevEvaluationInfo:null
    }
  },
  computed:{
    opeNum:function(){
      if(this.statisticInfo.totalFinishOperationNumber){
        return this.statisticInfo.totalFinishOperationNumber
      } else {
        return '--'
      }
    }
  },
  methods:{
    //0.初始化饼图的图例
    initLegend(){
      return {
        show:true,
        orient:'vertical',
        top:'155',
        itemGap:2,
        itemHeight:12,
        textStyle:{
          fontSize:12
        }
      }
    },
    //1.获取所有的序列号
    getSerialNumber(deviceCode){
      this.$http['getDevCardSerialNumbers']({
        params:{deviceCode:deviceCode}
      }).then( res => {
        const { data } = res
        if(data && data.length > 0){
          this.serialNumberList = data
          this.selSerialNumber = data[0]
        }
        
      })
    },
    //2.获取统计信息
    getStatisticInfo(deviceCode,deviceSerialNumber){
      this.$http['getDevCardStatisticInfo']({
        params:{deviceCode:deviceCode,deviceSerialNumber:deviceSerialNumber}
      }).then(res => {
        const {data} = res
        // console.log(data)
        this.statisticInfo = data
        this.emitSelSerialNumber(false)
      })
    },
    //3.改变仪器序列号
    changeSerialNumber(deviceSerialNumber){
      // console.log(deviceSerialNumber)
      this.selSerialNumber = deviceSerialNumber
    },
    //4.获取这个型号仪器的评价统计信息
    getDevEvaluationInfo(deviceCode){
      this.$http['getDevEvaluationInfos']({
        params:{deviceCode:deviceCode}
      }).then(res => {
        const {data} = res
        data ? this.devEvaluationInfo = data:'';
      })
    },
    //5.获取某一个特定序列号仪器的评价统计信息
    getSpecDevEvaluationInfo(deviceCode,deviceSerialNumber){
      this.$http['getSpecDevEvaluationInfos']({
        params:{deviceCode:deviceCode,serialNumber:deviceSerialNumber}
      }).then(res => {
        const {data} = res
        data ? this.specDevEvaluationInfo = data:'';
        // console.log(this.specDevEvaluationInfo.experienceLevel)
      })
    },
    //6.点击按钮
    emitSelSerialNumber(isClick){
      this.$emit(
        'getOpeInfoOfThisDev',
        {
          deviceCode:this.deviceCode,
          serialNumber:this.selSerialNumber,
          deviceType:this.devType,
          isClick:isClick
        }
      )
    }
  },
  watch:{
    'selSerialNumber':function(newVal){
      this.getStatisticInfo(this.deviceCode,newVal)
      this.getSpecDevEvaluationInfo(this.deviceCode,newVal)
      // this.emitSelSerialNumber()
    }
  },
  created(){
    this.getSerialNumber(this.deviceCode)
    this.getDevEvaluationInfo(this.deviceCode)
  }
}
</script>

<style scoped>
.dev-card-wrapper {
  width: 775px;
  margin:0 15px 15px 15px;
}
.dev-evaluation-wrapper {
  display: flex;
  margin-bottom: 10px;
}
.dev-info-wrapper{
  flex:1.2
}
.experience-pie-wrapper,
.reliable-pie-wrapper,
.error-pie-wrapper{
  flex:1;
  text-align: center;
  box-sizing: border-box;
}
.dev-info-wrapper .dev-describe-wrapper>p {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
}

.dev-img-wrapper {
  margin-bottom: 5px;
  text-align: center;
}
.dev-img-wrapper > img {
  height: 180px;
}

.spec-dev-evaluation-wrapper {
  display: flex;
  border-right: 1px solid #24c79f;
  font-size: 12px;
}
.serial-wrapper{
  flex: 0.8;
  box-sizing: border-box;
}
.spec-dropout-pie-wrapper{
  border-left: 1px solid #24c79f;
}
.spec-dropout-pie-wrapper,
.spec-experience-pie-wrapper,
.spec-reliable-pie-wrapper,
.spec-error-pie-wrapper{
  flex:1;
  box-sizing: border-box;
  padding: 5px 0;
}
.spec-dropout-pie-wrapper,
.spec-experience-pie-wrapper,
.spec-reliable-pie-wrapper,
.spec-error-pie-wrapper{
  border-top:1px solid #24c79f;
  border-bottom:1px solid #24c79f;
  text-align: center;
}
.pie-title {
  font-size: 14px;
}
.dropout-chart-wrapper {
  height: 160px;
}
.chart-wrapper {
  height: 237px;
}
</style>