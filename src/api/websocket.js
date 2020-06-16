
const WS_BASE_URL = 'ws:172.20.29.106:8080/eval/device-real-time-data'

export function createWs(operationNumber,deviceCode,timestamp){
  const url = WS_BASE_URL + '/' + operationNumber +'/'+ deviceCode + '/' + timestamp 
  return new WebSocket(url)
}
  
