
import util from '@/utils/util'


export default {
  formatterDate(val){
    return util.getFormatterDate(val*1000).YYYYMMDDHHMMSS
  },
  formatterSex(val){
    return val===1?'男':'女'
  },
  formatterDevName(val) {
    const reg = /(?<=\().+?(?=\))/g;
    const res = val.match(reg);
    if (res) {
      return res.join(" ");
    } else {
      return "";
    }
  }
}