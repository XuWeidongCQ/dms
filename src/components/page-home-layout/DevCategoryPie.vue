<template>
  <x-box>
    <div class="xu-box-title">
      <span>医疗设备分布</span>
    </div>
    <div class="chart-wrapper">
      这是饼图
    </div>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox'
export default {
  components:{xBox}
}
</script>

<style scoped>
.chart-wrapper {
  height: 195px;
}
</style>