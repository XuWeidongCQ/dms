<template>
  <x-box class="table-wrapper">
    <div class="xu-box-title">
      <span>已完成手术概况</span>
      <x-badge :value="totalElements + '台'" :type="'success'" class="total-badge"></x-badge>
    </div>
    <x-table 
    :title="['手术顺序号','手术名称','开始时间','结束时间']"
    :size="'normal'"
    :align="'center'"
    :strip="true"
    >
      <tr v-for="ope in opeInfos" :key="ope.patientId">
        <td>{{ ope.operationNumber }}</td>
        <td>{{ ope.operationName }}</td>
        <td>{{ ope.operationStartTime | formatterDate }}</td>
        <td>{{ ope.operationEndTime | formatterDate }}</td>
      </tr>
    </x-table>
    <div class="pager-wrapper">
      <x-pager :pageNum="totalPages" @hasSelectedPage="selPage($event)"></x-pager>
    </div>
  </x-box>
</template>

<script>
import xTable from '@/x-views/xTable'
import xBox from '@/x-views/xBox'
import xPager from '@/x-views/xPager'
import xBadge from '@/x-views/xBadge'
export default {
  components:{xTable,xBox,xPager,xBadge},
  data(){
    return {
      opeInfos:[],
      totalPages:1,
      totalElements:0
    }
  },
  methods:{
    getData(page=0,size=10){
      this.$http['getOpeInfos']({params:{page:page,size:size}})
      .then(res => {
        const {data} = res
        this.opeInfos = data['content']
        this.totalPages = data['totalPages']
        this.totalElements = data['totalElements']
      })
    },
    selPage(page){
      this.getData(page-1)
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>
.pager-wrapper {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.table-wrapper {
  height: 610px;
}
.total-badge {
  font-size:12px;
  vertical-align: bottom;
}
</style>