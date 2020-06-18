<template>
  <div class="xu-col-12">
    <x-specific-dev-evaluation-content :devInfoList="devInfos"></x-specific-dev-evaluation-content>
  </div>
</template>

<script>
import xSpecificDevEvaluationContent from '@/components/share-components/xSpecificDevEvaluationContent'
export default {
  components:{
    xSpecificDevEvaluationContent
  },
  data(){
    return {
      devInfos:[
        {
          imgUrl:require('../../assets/dev-image/BLTA8.jpg') ,
          deviceCode:'32',
          devName:'重症信息化插件式监护仪',
          devType:'A8',
          devCompany:'广东宝莱特医用科技股份有限公司'
        },
      ],
    }
  }
}
</script>