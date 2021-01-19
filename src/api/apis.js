import service from "./request";

export const getCamera = function(params){
  return service.get(`https://www.i-school.net/3rd_party/api_cm5g/device/deviceGetIPCAMUrl?schoolId=1132008${params}`)
}
