
import util from '@/utils/util'


export default {
  //1.标准化时间输出 输入的时间戳单位为秒
  formatterDate(val,format='YYYYMMDDHHMMSS'){
    return util.getFormatterDate(val)[format]
  },
  //2.
  formatterSex(val){
    return val===1?'男':'女'
  },
  //3.
  formatterDevName(val) {
    const reg = /(?<=\().+?(?=\))/g;
    const res = val.match(reg);
    if (res) {
      return res.join(" ");
    } else {
      return "";
    }
  },
  //4.小数转换为百分数
  numberToPercent(val){
    if(val >= 0 && val <= 1){
      return (val*100).toFixed(2) + '%'
    }
    return val
  }
}