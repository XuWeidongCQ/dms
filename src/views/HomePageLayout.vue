<template>
  <div class="home-page-wrapper">
    <div class="xu-row">
      <div class="xu-col-3">
       <total-dev-panel></total-dev-panel>
       <div class="interval"></div>
       <dev-category-pie></dev-category-pie>
       <div class="interval"></div>
       <total-ope-panel></total-ope-panel>
       <ope-history-chart></ope-history-chart>
      </div>
      <div class="xu-col-9">
        <real-time-panel></real-time-panel>
      </div>
    </div>
    <div class="xu-row">
      <div class="xu-col-4">
        <dev-history-turn-on-num-chart></dev-history-turn-on-num-chart>
        <div class="interval"></div>
        <dev-history-collect-time-chart></dev-history-collect-time-chart> 
      </div>
      <div class="xu-col-8">
        <ope-table></ope-table>
      </div>
    </div>
    <div class="xu-row">
      <div class="xu-col-3">
        
      </div>
    </div>
  </div>
</template>

<script>
import DevHistoryTurnOnNumChart from '@/components/home-page-layout/DevHistoryTurnOnNumChart'
import DevHistoryCollectTimeChart from '@/components/home-page-layout/DevHistoryCollectTimeChart'
import RealTimePanel from '@/components/home-page-layout/RealTimePanel'
import TotalDevPanel from '@/components/home-page-layout/TotalDevPanel'
import TotalOpePanel from '@/components/home-page-layout/TotalOpePanel'
import DevCategoryPie from '@/components/home-page-layout/DevCategoryPie'
import OpeHistoryChart from '@/components/home-page-layout/OpeHistoryChart'
import OpeTable from '@/components/home-page-layout/OpeTable'
export default {
  components:{
    DevHistoryTurnOnNumChart,
    DevHistoryCollectTimeChart,
    RealTimePanel,
    TotalDevPanel,
    TotalOpePanel,
    DevCategoryPie,
    OpeHistoryChart,
    OpeTable
  }
}
</script>

<style scoped>

</style>