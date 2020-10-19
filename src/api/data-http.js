import axios from 'axios'
import deviceApi from './device-api'
import operationApi from './operation-api'
import deviceCardApi from './device-card-api'
import operationMarkApi from './operation-mark-api'
import opeMidEvaluationApi from './ope-mid-evaluation-api'

import showAlert from '@/x-views/xAlert/xAlert'

const dataPool = axios.create({
  baseURL:'http://www.dms.yuhualab.com:10086/eval'
  // baseURL:'http://172.20.29.106:10086/eval'
})

//请求拦截器
dataPool.interceptors.request.use(config => {
  const {method} = config
  return config
},error => {
  showAlert('无法获取数据,请检查网络','failure')
  return Promise.reject(error)
})

//响应拦截器
dataPool.interceptors.response.use(res => {
  const {config:reqConfig,data:resData} = res;
  const {method:reqMethod,data:reqData} = reqConfig;
  const {code} = resData
  if(code === 200){ //200才是成功
    return resData
  } 
  return resData
},error => {
  return Promise.reject(error)
})


const http = {}
const api = Object.assign(
    {},
    deviceApi,
    operationApi,
    deviceCardApi,
    operationMarkApi,
    opeMidEvaluationApi
  )


for(let key in api){
  const {method,url} = api[key]
  switch(method){
    case 'get':
      http[key] = function(config={}){
        return dataPool[method](url,config)
      }
    break;
    case 'post':
      http[key] = function(data={},config={}){
        return dataPool[method](url,data,config)
      }
    break;
    case 'delete':
      http[key] = function(config={}){
        return dataPool[method](url,config)
      }
    break;
    default:
      http[key] = null
  }
}

export default http
