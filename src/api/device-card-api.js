
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
  }
}

export default DEVICE_CARD_API
