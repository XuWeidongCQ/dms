<template>
  <x-modal @close="close">
    <div class="ope-detail-wrapper">
      <!-- 第一行 -->
      <div class="xu-row">
        <div class="xu-col-6 info-box">
          <span>患者信息</span>
          <ul class="patient-items-wrapper">
            <li v-for="(val,name,index) in patient" :key="index">
              <span>{{ name }}：</span><span>{{ val }}</span>
            </li>
          </ul>
        </div>
        <div class="xu-col-6 info-box">
          <span>手术信息</span>
          <ul class="ope-items-wrapper">
            <li v-for="(val,name,index) in operation" :key="index">
              <span>{{ name }}：</span><span>{{ val }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 第二行 术中标记信息-->
      <div class="xu-row">
        <div class="xu-col-12 info-box">
          <span>术中标记信息</span>
          <span v-show="markInfos.length === 0">无</span>
          <ul class="mark-items-wrapper xu-add-scrollBar">
            <li v-for="mark in markInfos" :key="mark.id">
              <span>{{ mark.markTime | formatterDate}}</span>
              <span>
                {{ mark.markMainType }} |
                {{ mark.markSubType }} |
                {{ mark.markEvent }} |
                {{ mark.giveMedicineMethod }} |
                {{ mark.giveMedicineVolume }} |
                {{ mark.sideEffect }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 第三行 仪器临床评价信息-->
      <div class="xu-row">
        <div class="xu-col-12 info-box">
           <span>仪器临床评价信息</span>
           <div class="evaluation-items-wrapper xu-add-scrollBar" v-show="evaluationInfos.length > 0">
             <x-table 
             :title="['厂商','仪器','序列号','使用科室','使用体验','临床可靠性','故障情况','记录人']"
             :size="'sm'"
             >
             <tr v-for="evaluation in evaluationInfos" :key="evaluation.id">
               <td>{{ evaluation.companyName }}</td>
               <td>{{ evaluation.deviceName }}</td>
               <td>{{ evaluation.serialNumber }}</td>
               <td>{{ evaluation.deviceDepartment }}</td>
               <td>{{ evaluation.experienceLevel }}</td>
               <td>{{ evaluation.reliabilityLevel }}</td>
               <td>{{ evaluation.knownError +  evaluation.otherError }}</td>
               <td>{{ evaluation.recordName }}</td>
             </tr>
             </x-table>
           </div>
        </div>
      </div>
    </div>
  </x-modal>
</template>

<script>
import xModal from "@/x-views/xModal";
import xTable from "@/x-views/xTable"
export default {
  components: { xModal,xTable},
  props: {
    //1.手术顺序号
    operationNumber: {
      type: Number
    }
  },
  data() {
    return {
      patient: {},
      operation: {},
      evaluationInfos: [],
      markInfos: []
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    getData(operationNumber) {
      this.$http["getOpeDetailInfos"]({
        params: { operationNumber: operationNumber }
      }).then(res => {
        const { operationInfo, evaluationInfo, operationMarks } = res.data;
        this.patient = {
          '身份证号': operationInfo["patientId"],
          '入院ID': operationInfo["admissionId"],
          '性   别': operationInfo["patientSex"] === 1?'男':'女',
          '身   高': operationInfo["patientHeight"] + "cm",
          '体   重': operationInfo["patientWeight"] + "kg",
          '年   龄': operationInfo["patientAge"],
          '既往病史': operationInfo["pastMedicalHistory"],
          '特殊情况': operationInfo["specialCase"]
        };
        this.operation = {
          '手术名称': operationInfo["operationName"],
          '麻醉方式': operationInfo["operationAnesthesiaMode"],
          '是否紧急': operationInfo["operationIsUrgent"]?'是':'否',
          'ASA等级': operationInfo["operationAsaLevel"]
        };
        this.evaluationInfos = evaluationInfo;
        this.markInfos = operationMarks;
      });
    }
  },
  watch: {
    operationNumber:{
      handler(newVal,oldVal){
        // console.log(newVal)
        this.getData(newVal)
      },
      immediate:true
    }
  }
};
</script>

<style scoped>
.ope-detail-wrapper {
  min-width: 1000px;
}
.info-box > span:first-child {
  display: inline-block;
  font-size: 20px;
  padding: 0 0 2px 0;
  border-bottom: 1px solid #24c79f;
  width: 100%;
  box-sizing: border-box;
  color: #24c79f
}
.info-box > ul{
  font-size: 14px;
}
.patient-items-wrapper > li > span:first-child,
.ope-items-wrapper > li > span:first-child{
  display: inline-block;
  width: 100px;
  text-align: right;
}
.mark-items-wrapper {
  max-height: 200px;
}
.mark-items-wrapper > li{
  padding: 5px 0;
}
.mark-items-wrapper > li > span:first-child{
  display: inline-block;
  margin-right: 25px;
}
.evaluation-items-wrapper {
  padding: 5px 0 0 0;
  max-height: 200px;
}
</style>