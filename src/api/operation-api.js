const OPERATION_API = {
  //1.获取总手术场次
  getTotalOpe:{
    method: 'get',
    url:'/platform/operation/main/count_operation_number'
  },
  //2.获取历史手术采集信息
  getOpeHistoryCases:{
    method:'get',
    url:'/platform/operation/main/history_operation_number'
  },
  //3.获取已完成手术信息分页查询 page size
  getOpeInfos:{
    method:'get',
    url:'platform/operation/main/list_finish'
  },
  //4.获取一场手术的详细信息
  getOpeDetailInfos:{
    method:'get',
    url:'platform/operation/detail/all_info'
  },
  //5.获取目前正在进行的手术
  getOpeInProcess:{
    method:'get',
    url:'/platform/operation/main/processing'
  },
  //6.获取手术使用的仪器
  getOpeUseDev:{
    method:'get',
    url:'platform/operation/main/used_device_info_list'
  }
}

export default OPERATION_API