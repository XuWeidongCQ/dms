<template>
  <x-box>
    <div class="xu-row dev-panel-wrapper">
      <div class="xu-col-9">
          <pu-ke-yy106></pu-ke-yy106>
      </div>
      <div class="xu-col-3">
        <div class="real-ope-info"></div>
      </div>
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
.real-ope-info {
  height: 100%;
  background-color: #e2e2e2;
}
</style>