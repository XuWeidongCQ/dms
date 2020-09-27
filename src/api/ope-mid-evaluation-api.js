import OPERATION_MARK_API from "./operation-mark-api"

const OPE_MID_EVALUATION_API = {
  //1. 获取表格中所需要的排序数据的信息 ?deviceType = [1-7]
  getDevPerformanceEvaluationTable:{
    method:'get',
    url:'/platform/device_performance_evaluation/total_by_device_type'
  }
}

export default OPE_MID_EVALUATION_API