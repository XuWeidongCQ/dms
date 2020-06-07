<template>
  <div>
    <x-dev-info-card 
    v-for="(item,index) in devInfo"
    :imgUrl='item.imgUrl'
    :deviceCode="item.deviceCode"
    :devName="item.devName"
    :devType="item.devType"
    :devCompany="item.devCompany" 
    :key="index"
    >
    </x-dev-info-card>
  </div>
</template>

<script>
import xDevInfoCard from '@/components/share-components/xDevInfoCard'
export default {
  components: {
    xDevInfoCard
  },
  data(){
    return {
      devInfo:[
        {
          imgUrl:require('../../assets/dev-image/NW9002S.jpg') ,
          deviceCode:'30',
          devName:'麻醉深度多参数监护仪',
          devType:'NW-9002S',
          devCompany:'合肥诺和电子科技有限公司'
        },
        {
          imgUrl:require('../../assets/dev-image/ConView YY-106.png') ,
          deviceCode:'31',
          devName:'ConView 麻醉深度监测仪',
          devType:'YY-106',
          devCompany:'浙江杭州普可医疗科技有限公司'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>