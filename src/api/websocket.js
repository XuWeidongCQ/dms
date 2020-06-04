
const WS_BASE_URL = 'ws:172.20.29.112:8080/eval/device-real-time-data'

export function createWs(operationNumber,deviceCode,browserId){
  const url = WS_BASE_URL + '/' + operationNumber +'/'+ deviceCode + '/' + browserId 
  return new WebSocket(url)
}
  
