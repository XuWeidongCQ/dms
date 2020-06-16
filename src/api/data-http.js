import axios from 'axios'
import deviceApi from './device-api'
import operationApi from './operation-api'
import deviceCardApi from './device-card-api'

const dataPool = axios.create({
  baseURL:'http://172.20.29.106:8080/eval'
})

//请求拦截器
dataPool.interceptors.request.use(config => {
  const {method} = config
  return config
},error => {
  return Promise.reject(error)
})
//响应拦截器
dataPool.interceptors.response.use(res => {
  const {config:reqConfig,data:resData} = res;
  const {method:reqMethod,data:reqData} = reqConfig;
  const {code} = resData
  if(code === 200){
    return resData
  }
},error => {
  return Promise.reject(error)
})


const http = {}
const api = Object.assign(
  {},
  deviceApi,
  operationApi,
  deviceCardApi
  )


for(let key in api){
  const {method,url} = api[key]
  switch(method){
    case 'get':
      http[key] = function(config={}){
        return dataPool[method](url,config)
      }
      break;
    default:
      http[key] = null
  }
}

export default http
