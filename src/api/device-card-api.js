
const DEVICE_CARD_API = {
  //1.获取序列号 ?deviceCode
  getDevCardSerialNumbers:{
    method:'get',
    url:'/platform/device_card/device_serial_number_list'
  },
  //2.获取卡片统计信息 ?deviceCode deviceSerialNumber
  getDevCardStatisticInfo:{
    method:'get',
    url:'/platform/device_card/device_statistic_info'
  },
  //3.获取某一台仪器参与的手术信息 ?deviceCode deviceSerialNumber
  getOpeInfosOfDev:{
    method:'get',
    url:'/platform/device_card/device_finished_operation_list'
  },
  //4.获取具体某一台仪器的评价统计信息
  getSpecDevEvaluationInfos:{
    method:'get',
    url:'platform/device_evaluation/statistic_one'
  },
  //5.获取某一个型号的仪器的评价统计信息
  getDevEvaluationInfos:{
    method:'get',
    url:'/platform/device_evaluation/statistic_total'
  }
}

export default DEVICE_CARD_API
