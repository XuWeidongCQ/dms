
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
  }
}

export default DEVICE_API