
// 网关看板地址
const gateWayUrl = 'http://116.62.125.88:10000'
// 天七接口
const tianqiUrl = 'http://192.168.12.213:8109/api/v1'
let jsonPrefix = ''
if (process.env.NODE_ENV==='production'){
    jsonPrefix = '/scyd'
}
  //--------------------总览------------------------------------
export const pandectEquipmentTypeUrl =
    gateWayUrl + "/api/device/region/getDeviceProportion";       // 设备类型
export const pandectAccessUrl = tianqiUrl + '/tianfu7/overview/doorControl'                // 门禁
export const pandectUrl = jsonPrefix + "/json/pandect.json";  // 总览

export const systemLogin = jsonPrefix + "/json/systemLogin.json";  // 系统名称等
