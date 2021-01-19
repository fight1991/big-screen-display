export const createJSONUrl = function(jsonName){
  if(process.env.NODE_ENV==='development'){
    return `/apis/${jsonName}`
  }else{
    return `/scyd/json/${jsonName}.json`
  }
}

export const setDocumentTitle=function(){
  let systemName = localStorage.systemName
  document.title=systemName
  window.reload=function(){
    setDocumentTitle()
  }
}

export const formatNumUnit = function(num){
  if (isNaN(parseFloat(num))) return;
  let numStr = num.toString().split('')
  if(numStr.length>8){
    return (num/100000000).toFixed(2) + '亿'
  }
  if(numStr.length>6){
    return (num/1000000).toFixed(2)+'千万'
  }
  if(numStr.length>4){
    return (num/10000).toFixed(2)+'万'
  }
}
export const echartsSize = function (size,defalteWidth = 1920) {
  let docEl = document.documentElement,
    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = (clientWidth / defalteWidth);
  return Number((size*fontSize).toFixed(3));
}


export function refreshScale(){
  let baseWidth = document.documentElement.clientWidth;
  let baseHeight = document.documentElement.clientHeight;
  let appStyle = document.getElementById('app').style;
  let realRatio = baseWidth/baseHeight
  let designRatio = 16/9
  let scaleRate =  baseWidth/1920
  if(realRatio>designRatio){
    scaleRate = baseHeight/1080
  }
  appStyle.transformOrigin = 'left top';
  appStyle.transform=`scale(${scaleRate}) translateX(-50%)`;
  appStyle.width = `${baseWidth/scaleRate}px`
}