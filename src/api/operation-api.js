const OPERATION_API = {
  //1.获取总手术场次
  getTotalOpe:{
    method: 'get',
    url:'/platform/operation/count_operation_number'
  },
  //2.获取历史手术采集信息
  getOpeHistoryCases:{
    method:'get',
    url:'/platform/operation/history_operation_number'
  },
  //3.获取已完成手术信息分页查询 page size
  getOpeInfos:{
    method:'get',
    url:'platform/operation/list'
  }
}

export default OPERATION_API