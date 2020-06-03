
const WS_BASE_URL = 'ws:'

export function createWs(operationNumber,deviceCode){
  const url = WS_BASE_URL + '/' + operationNumber +'/'+ deviceCode
  return new WebSocket(url)
}
  
