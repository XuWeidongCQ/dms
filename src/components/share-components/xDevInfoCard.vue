
<template>
  <x-box class="dev-card-wrapper">
    <div class="dev-img-wrapper">
      <img :src="imgUrl">
    </div>
    <div class="dev-describe-wrapper">
      <p>厂商：{{ devCompany }}</p>
      <p>产品：{{ devName }}</p>
      <p>型号：{{ devType }}</p>  
    </div>
    <div class="dev-statistic-wrapper">
      <div class="left">
        <span>仪器序列号</span>
        <ul class="dev-serial-number-wrapper xu-add-scrollBar">
          <li 
          v-for="(item,index) in serialNumberList" 
          :key="index"
          :class="{'active':item === selSerialNumber}"
          @click="changeSerialNumber(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="chart-wrapper">
          <x-inner-pie-chart 
          :titleText="'平均掉线率'"
          :color="['#019b4c','#e62229','#e0a800']"
          :source="{'y':[1-statisticInfo.averageDropRate,statisticInfo.averageDropRate]}"
          :isModalChart="true"
          ></x-inner-pie-chart>
        </div>
        <p>已使用：{{ statisticInfo.deviceServiceLife }}年</p>
        <p>总采集时长：{{ statisticInfo.operationDurationTimeAll }}秒</p>
        <x-button
        :disable="statisticInfo.dataNumber === 0" 
        :value="'已完成' + statisticInfo.totalFinishOperationNumber + '场手术'"
        :type="'success'"
        @click="emitSelSerialNumber()"
        ></x-button>
      </div>
    </div>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox'
import xInnerPieChart  from '@/components/share-components/xInnerPieChart'
import xButton from '@/x-views/xButton'
export default {
  components: {
    xBox,
    xInnerPieChart,
    xButton
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
      selSerialNumber:'0'
    }
  },
  methods:{
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
      })
    },
    //3.改变仪器序列号
    changeSerialNumber(deviceSerialNumber){
      this.selSerialNumber = deviceSerialNumber
    },
    //4.点击按钮
    emitSelSerialNumber(){
      this.$emit(
        'getOpeInfoOfThisDev',
        {
          deviceCode:this.deviceCode,
          serialNumber:this.selSerialNumber,
          deviceType:this.devType
        }
      )
    }
  },
  watch:{
    'selSerialNumber':function(newVal){
      this.getStatisticInfo(this.deviceCode,newVal)
      // this.emitSelSerialNumber()
    }
  },
  created(){
    this.getSerialNumber(this.deviceCode)
  }
}
</script>

<style scoped>
.dev-card-wrapper {
  width: 500px;
  display: inline-block;
  margin:0 15px;
}


.dev-img-wrapper {
  margin-bottom: 10px;
}
.dev-img-wrapper > img {
  height: 200px;
}
.dev-describe-wrapper > p{
  font-size: 12px;
}
.dev-statistic-wrapper {
  position: absolute;
  background-color: rgba(245, 245, 245);
  width: 260px;
  top: 20px;
  right: 20px;
  bottom: 20px;
  display: flex;
  padding: 5px 0;
  border-radius: 5px;
  font-size: 12px;
}
.dev-statistic-wrapper > div:first-child {
  flex: 2;
  margin-right: 10px;
}
.dev-statistic-wrapper > div:last-child {
  flex: 3;
  text-align: center;
}
.dev-statistic-wrapper  span {
  display: inline-block;
  font-size: 14px;
  padding-bottom: 5px;
  box-sizing: border-box;
  color: #24c79f;
}
.dev-serial-number-wrapper > li{
  white-space: nowrap;
  overflow: hidden;
  padding: 5px 0 5px 5px;
  cursor: pointer;
}
.right > p {
  margin-bottom: 10px;
}

.chart-wrapper {
  height: 150px;
}

.active {
  color: #ffffff;
  background-color: #24c79f;
  transition: background-color 0.4s;
}
</style>