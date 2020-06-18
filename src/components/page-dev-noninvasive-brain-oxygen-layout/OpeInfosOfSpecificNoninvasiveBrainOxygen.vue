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
          imgUrl:require('../../assets/dev-image/EGOS600A.jpg') ,
          deviceCode:'50',
          devName:'NIRS局部组织氧饱和度仪',
          devType:'EGOS-600',
          devCompany:'苏州爱琴生物医疗电子有限公司'
        },
      ],
    }
  }
}
</script>