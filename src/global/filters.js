
import util from '@/utils/util'


export default {
  formatterDate(val){
    return util.getFormatterDate(val*1000).YYYYMMDDHHMMSS
  }
}