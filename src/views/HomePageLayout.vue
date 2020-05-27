<template>
  <div class="home-page-wrapper">
    <div class="xu-row">
      <div class="xu-col-4">
        <dev-history-turn-on-num-chart></dev-history-turn-on-num-chart>
      </div>
    </div>
    <div class="xu-row">
      <div class="xu-col-4">
        <dev-history-collect-time-chart></dev-history-collect-time-chart>
      </div>
    </div>
  </div>
</template>

<script>
import DevHistoryTurnOnNumChart from '@/components/home-page-layout/DevHistoryTurnOnNumChart'
import DevHistoryCollectTimeChart from '@/components/home-page-layout/DevHistoryCollectTimeChart'
export default {
  components:{DevHistoryTurnOnNumChart,DevHistoryCollectTimeChart}
}
</script>

<style scoped>

</style>