<template>
  <div class="real-time-panel-wrapper">
    没有正在进行的手术
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

</style>