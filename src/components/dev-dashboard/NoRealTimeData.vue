<template>
  <div class="real-time-panel-wrapper">
    <span class="no-ope-info">目前没有正在进行的手术</span>
  </div>
</template>

<script>
export default {
  props:['operationNumber','deviceCode'],
  created(){
    // console.log('默认',this.operationNumber)
  }
}
</script>

<style scoped>
.no-ope-info {
  display: block;
  font-size: 60px;
  color: rgba(120, 120, 120);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  white-space: nowrap;
}
</style>