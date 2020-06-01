<template>
  <x-box class="dev-panel-wrapper xu-row">
    <div class="xu-col-9">
      <div class="real-panel">
        <pu-ke-yy106></pu-ke-yy106>
      </div>
    </div>
    <div class="xu-col-3">
      <div class="real-ope-info"></div>
    </div>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox'
import PuKeYy106 from '@/components/dev-dashboard/PuKeYy106'
export default {
  components:{
    xBox,
    PuKeYy106,
  }
}
</script>

<style>
.dev-panel-wrapper {
  height: 700px;
}
.real-panel {
  height: 100%;
  background-color: #e2e2e2;
  border-radius: 10px;
}
.real-ope-info {
  height: 100%;
  background-color: #e2e2e2;
}
</style>