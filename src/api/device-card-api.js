
const DEVICE_CARD_API = {
  //1.获取序列号
  getDevCardSerialNumbers:{
    method:'get',
    url:'/platform/device_card/device_serial_number_list'
  },
  //2.获取卡片统计信息
  getDevCardStatisticInfo:{
    method:'get',
    url:'/platform/device_card/device_statistic_info'
  },
  //3.获取某一台仪器参与的手术信息
  getOpeInfosOfDev:{
    method:'get',
    url:'/platform/device_card/device_finished_operation_list'
  }
}

export default DEVICE_CARD_API
