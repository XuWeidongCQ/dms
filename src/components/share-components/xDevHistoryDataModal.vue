<template>
  <!-- 一台仪器在某一场手术中的监测数据弹窗  -->
  <x-modal @close="close">
    <div class="chart-wrapper">
      <x-basic-chart 
      :type="'line'"
      :xName="'时间'"
      :source="source"
      :areaStyle="null"
      :legend="{
        orient: 'vertical',
        top:15,
        right:15,
        selectedMode: true,
        show:true,
        textStyle:{
          fontSize:13,
          color:'#111'
        },
        backgroundColor:'rgba(0,0,0,0.1)'
      }"
      ></x-basic-chart>
    </div>
  </x-modal>
</template>

<script>
import xModal from '@/x-views/xModal'
import xBasicChart from "@/components/share-components/xBasicChart"
export default {
  components:{xModal,xBasicChart},
  props:['operationNumber','serialNumber'],
  data(){
    return {
      source:{}
    }
  },
  methods:{
    getData(operationNumber,serialNumber){
      this.$http['getDevHistoryData']({
        params:{operationNumber:this.operationNumber,serialNumber:this.serialNumber}
      }).then(res => {
        const {data} = res
        if(data){
          this.source = {}
          for(const key in data){
            if(key === 'time'){
              this.source['x'] = data[key].map(ele => ele.split('T')[1])
            } else {
              this.source[key] = data[key].map(ele => ele===-1000?-5:ele)
            }
          }
        }
      })
    },
    close(){
      this.$emit('close')
    }
  },
  created(){
    this.getData(this.operationNumber,this.serialNumber)
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 400px;
  width: 1200px;
}
</style>