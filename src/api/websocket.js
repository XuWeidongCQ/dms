
const WS_BASE_URL = 'ws://www.dms.yuhualab.com:10086/eval/device-real-time-data'

export function createWs(operationNumber,deviceCode,timestamp){
  const url = WS_BASE_URL + '/' + operationNumber +'/'+ deviceCode + '/' + timestamp 
  return new WebSocket(url)
}
  
