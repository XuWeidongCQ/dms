<template>
  <x-box class="panel-wrapper">
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
.panel-wrapper > span:last-child {
  position: absolute;
  top:30px;
  right: 30px;
  font-size:70px;
  color: #778ca2;
}
.panel-wrapper > span:first-child {
  font-size: 50px;
}
.panel-wrapper > p {
  font-size: 12px;
  color:#a6b6c6;
}
</style>