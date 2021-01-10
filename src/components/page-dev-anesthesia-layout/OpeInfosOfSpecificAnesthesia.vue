<template>
  <div class="xu-col-12">
    <x-specific-dev-evaluation-content :devInfoList="devInfos"></x-specific-dev-evaluation-content>
  </div>
</template>

<script>
import xSpecificDevEvaluationContent from '@/components/share-components/xSpecificDevEvaluationContent'
import { getDevInfos } from '@/global/devTypeCode'

export default {
  components:{
    xSpecificDevEvaluationContent
  },
  data(){
    return {
      devInfos:getDevInfos('麻醉机')
      // [
      //   {
      //     imgUrl:require('../../assets/dev-image/WATO EX55.jpg') ,
      //     deviceCode:'44',
      //     devName:'增强型麻醉工作站',
      //     devType:'WATO EX-55',
      //     devCompany:'深圳迈瑞生物医疗电子股份有限公司'
      //   },
      //   {
      //     imgUrl:require('../../assets/dev-image/Aeon8700A.jpg') ,
      //     deviceCode:'33',
      //     devName:'高档麻醉工作站',
      //     devType:'Aeon8700A',
      //     devCompany:'北京谊安医疗系统股份有限公司'
      //   },
      // ],
    }
  },
  created () {
    console.log(this.devInfos)
  }
}
</script>