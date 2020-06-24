
const DEVICE_API = {
  //1.获取接入平台的设备数目
  getDevTotalNums:{
    method:'get',
    url:'/platform/device/count'
  },
  //2.获取设备历史每天的总采集时长
  getDevHistoryCollectTime:{
    method:'get',
    url:'/platform/device/history_collection_time'
  },
  //3.获取设备历史每天的开机数目
  getDevHistoryTurnOnNums:{
    method:'get',
    url:'/platform/device/history_device_open_number'
  },
  //4.获取仪器的历史采集数据
  getDevHistoryData:{
    method:'get',
    url:'/platform/operation/detail/device_history_data'
  },
  //5.获取医疗设备分布饼图的数据
  getDevNum:{
    method: 'get',
    url:'/platform/device/access_device_type_and_number'
  }
}

export default DEVICE_API