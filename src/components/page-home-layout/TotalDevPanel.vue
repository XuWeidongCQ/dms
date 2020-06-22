<template>
  <x-box class="panel-wrapper bg-white">
    <span>{{ total }}</span>
    <p>平台已接入的医疗设备总数</p>
    <span class="fa fa-desktop"></span>
  </x-box>
</template>

<script>
import xBox from '@/x-views/xBox'
export default {
  components:{xBox},
  data(){
    return {
      total:0
    }
  },
  methods:{
    getData(){
      this.$http['getDevTotalNums']()
      .then(res => {
        const { data } = res
        this.total = data
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>
.panel-wrapper {
  color: #35ae47;
}
.panel-wrapper > span:last-child {
  position: absolute;
  top:20px;
  right: 20px;
  font-size:60px
}
.panel-wrapper > span:first-child {
  font-size: 35px;
}
.panel-wrapper > p {
  font-size: 12px;
}
</style>