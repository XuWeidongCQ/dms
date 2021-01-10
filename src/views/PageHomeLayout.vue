<template>
  <div class="home-page-wrapper">
    <div class="xu-row mb15">
      <div class="xu-col-3">
        <total-dev-panel></total-dev-panel>
        <div class="interval"></div>
        <dev-category-pie></dev-category-pie>
        <div class="interval"></div>
        <total-ope-panel></total-ope-panel>
        <div class="interval"></div>
        <ope-history-chart></ope-history-chart>
      </div>
      <div class="xu-col-9">
        <real-time-panel></real-time-panel>
      </div>
    </div>
  </div>
</template>

<script>
import RealTimePanel from "@/components/page-home-layout/RealTimePanel";
import TotalDevPanel from "@/components/page-home-layout/TotalDevPanel";
import TotalOpePanel from "@/components/page-home-layout/TotalOpePanel";
import DevCategoryPie from "@/components/page-home-layout/DevCategoryPie";
import OpeHistoryChart from "@/components/page-home-layout/OpeHistoryChart";

export default {
  components: {
    RealTimePanel,
    TotalDevPanel,
    TotalOpePanel,
    DevCategoryPie,
    OpeHistoryChart,
  }
};
</script>

<style scoped>

</style>