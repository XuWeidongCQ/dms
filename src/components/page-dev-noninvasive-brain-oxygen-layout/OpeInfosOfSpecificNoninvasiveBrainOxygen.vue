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
      devInfos:getDevInfos('无创脑氧饱和度监测仪')
    }
  }
}
</script>