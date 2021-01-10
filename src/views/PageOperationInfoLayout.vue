<template>
  <div>
    <div class="xu-row mb15">
      <div class="xu-col-6">
        <dev-history-collect-time-chart/>
      </div>
      <div class="xu-col-6">
        <dev-history-turn-on-num-chart/>
      </div>
    </div>
    <div class="xu-row">
      <div class="xu-col-12">
        <ope-table></ope-table>
      </div>
    </div>
  </div>
</template>

<script>
import DevHistoryTurnOnNumChart from "@/components/page-operation-layout/DevHistoryTurnOnNumChart";
import DevHistoryCollectTimeChart from "@/components/page-operation-layout/DevHistoryCollectTimeChart";
import OpeTable from "@/components/page-operation-layout/OpeTable";


export default {
  components:{DevHistoryCollectTimeChart,DevHistoryTurnOnNumChart,OpeTable}
}
</script>

<style scoped>

</style>