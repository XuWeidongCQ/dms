
import util from '@/utils/util'


export default {
  //1.标准化时间输出 输入的时间戳单位为秒
  formatterDate(val,format='YYYYMMDDHHMMSS'){
    return util.getFormatterDate(val*1000)[format]
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