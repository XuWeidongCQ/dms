<template>
  <div class="dev-card-infos-wrapper">
    <div class="dev-cards-wrapper">
      <x-dev-info-card 
      v-for="(item,index) in devInfoList"
      :imgUrl='item.imgUrl'
      :deviceCode="item.deviceCode"
      :devName="item.devName"
      :devType="item.devType"
      :devCompany="item.devCompany" 
      :key="index"
      @getOpeInfoOfThisDev="getOpeInfos($event)"
      >
      </x-dev-info-card>
    </div>
    <x-box class="dev-info-table-wrapper">
      <div class="xu-box-title">
        <span>仪器型号:{{ selDeviceType }} 序列号:{{ selDeviceSerialNumber }}</span>
      </div>
      <div class="dev-info-table xu-add-scrollBar">
        <x-table
        :title="['手术顺序号','医院手术号','手术名称','开始时间','结束时间','使用科室','使用体验','临床可靠性','故障情况','记录人']"
        :size="'sm'"
        >
        <tr v-for="ope in opeInfos" :key="ope.operationNumber">
          <td>
            <span>{{ ope.operationNumber }}</span>
            <x-button :value="'详情'" :size="'sm'" :type="'success'" @click="showModal(ope)"></x-button>
          </td>
          <td>{{ ope.hospitalOperationNumber }}</td>
          <td>{{ ope.operationName }}</td>
          <td>{{ ope.operationStartTime | formatterDate}}</td>
          <td>{{ ope.operationEndTime | formatterDate}}</td>
          <td>{{ ope.deviceDepartment }}</td>
          <td>{{ ope.experienceLevel }}</td>
          <td>{{ ope.reliabilityLevel }}</td>
          <td>{{ ope.knownError +  ope.otherError }}</td>
          <td>{{ ope.recordName }}</td>
        </tr>
        </x-table>
      </div>
      <div class="on-ope-hint" v-show="opeInfos.length === 0">请选择查看的仪器</div>
    </x-box>
    <!-- 弹窗 -->
    <x-ope-detail-info 
     v-if="modalShow" 
     @close="modalShow = false"
     :operationNumber = "selOpe.operationNumber"
    >
    </x-ope-detail-info>
  </div>
</template>

<script>
import xDevInfoCard from '@/components/share-components/xDevInfoCard'
import xBox from '@/x-views/xBox'
import xTable from "@/x-views/xTable"
import xButton from "@/x-views/xButton"
import xOpeDetailInfo from "@/components/share-components/xOpeDetailInfo";
export default {
  props:{
    devInfoList:{
      type:Array,
      default:() => []
    }
  },
  components: {
    xDevInfoCard,
    xBox,
    xTable,
    xButton,
    xOpeDetailInfo
  },
  data(){
    return {
      opeInfos:[],
      selDeviceType:'',
      selDeviceSerialNumber:'',
      selOpe:{},
      modalShow:false,
      isTableFirstRender:true
    }
  },
  methods:{
    getData(params){
      this.$http['getOpeInfosOfDev']({
          params:{deviceCode:params.deviceCode + '',deviceSerialNumber:params.serialNumber}
        }).then(res => {
          if(res){
            const {data} = res
            // console.log(res)
            if(data){
              this.opeInfos = data
            }
          }
          // console.log(this.opeInfos)
        })
    },
    getOpeInfos(e){
      if(e.isClick){
        this.selDeviceType = e.deviceType
        this.selDeviceSerialNumber = e.serialNumber
        this.getData(e)
      } else {  
        if(this.isTableFirstRender){
          // console.log(1)
          this.selDeviceType = e.deviceType
          this.selDeviceSerialNumber = e.serialNumber
          this.getData(e)
          this.isTableFirstRender = false
        }
      }
      
    },
    showModal(ope){
      this.selOpe = ope
      this.modalShow = true
    }
  }
}
</script>  

<style scoped>
.dev-cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px; 
}
.dev-info-table {
  height: 430px;
  font-size: 14px;
}
.on-ope-hint {
  position:absolute;
  top:50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 80px;
  color: #cccccc;
}
</style>