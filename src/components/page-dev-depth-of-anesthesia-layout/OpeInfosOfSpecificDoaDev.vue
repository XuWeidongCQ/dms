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
      ],
    }
  }
}
</script>