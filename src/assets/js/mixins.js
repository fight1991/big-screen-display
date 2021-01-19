import api from "../../api/index";
import qs from 'qs'
export default {
  methods: {
    /*
     * @description 下钻操作混入，对区域数据(regionCountsData)和学校信息（schoolInfo)定义依赖
     * @method nextFloor 地图及图表等进入下级区域操作交互响应
     * @params {string} targetType 操作类型 （area-区域，school-学校）
     * @params {string} targetName 区域/学校名
     * @params {function} areaCallback 操作区域时请求数据的回调
     * */
    nextFloorMixin(targetName, targetType, areaCallback) {
      if (!targetType) return;
      let currentRouteName = this.$route.name;
      if (targetType === "area") {
        this.regionCountsData.forEach(item => {
          if (item.areaName == targetName && item.allCnt) {
            this.area_id_old.push(item.areaId);
            this.area_level_old.push(item.areaLevel);
            this.area_code_old.push(item.areaCode);
            this.area_name_old.push(item.areaName);
            localStorage.area_id = item.areaId;
            localStorage.area_level = item.areaLevel;
            localStorage.area_code = item.areaCode;
            localStorage.area_name = item.areaName;
            let routeTitleMap = {
              equipmentArea: "教育装备",
              gateWayArea: "网络安全"
            };
            this.$emit(
              "getDataTitle",
              `${targetName}${routeTitleMap[currentRouteName]}大数据`
            );
            // 请求数据
            typeof areaCallback === "function" && areaCallback();
          }
        });
      } else if (targetType === "school") {
        this.schoolInfo.forEach(item => {
          if (targetName === item.areaName) {
            if (this.$route.path === "/zy/equipmentArea") {
              window.open(
                `${window.location.origin}/zy/equipment/${
                  item.areaId
                }/${encodeURIComponent(item.areaName).replace(/%/g, "%25")}`
              );
            } else {
              window.open(
                `${window.location.origin}/zy/gateWay/${
                  item.areaId
                }/${encodeURIComponent(item.areaName).replace(/%/g, "%25")}`
              );
            }
          }
        });
      }
    },
    /*
     * @description 用于表格中需要直接跳转到学校网络应用大数据
     * @params {string} schoolId 学校区域Id
     * @params {string} schoolName 学校名称
     * */
    clickToSchoolMixin(schoolId, schoolName) {
      window.open(
        `${window.location.origin}/zy/gateWay/${schoolId}/${encodeURIComponent(
          schoolName
        ).replace(/%/g, "%25")}`
      );
    },
    // 跳转致学教育应用大数据看板
    redirectToZhiXue() {
      let queryStr = "";
      let baseUrl = "https://www.i-school.net/html/smart-edu/app-statistic.html"
      if(location.href.indexOf('5g.andedu.com.cn')>-1){
        baseUrl='https://5g.andedu.com.cn:10443/html/smart-edu/app-statistic.html'
      }
      queryStr += `areaCode=${localStorage.area_code}`;

      location.href = `${baseUrl}?${queryStr}`;
      // 区域跳转
      // if (this.$route.path.indexOf("Area") > -1) {
      //   queryStr += `areaCode=${localStorage.area_code}`;
      //   location.href = `${baseUrl}/statistic-loading.html?${queryStr}`;
      // } else {
        // 0730 改造学校应用拿来自己做——不再跳转致学
        // this.$axios(api.toggleSchoolId, {
        //   method: "post",
        //   params: { schoolId: this.$route.params.id, type: "0" }
        // })
        //   .then(res => {
        //     if (res.data.code === 200) {
        //       let transformedId = res.data.data.schoolId;
        //       location.href = `${baseUrl}/app-statistic-school.html?schoolId=${transformedId}`;
        //     } else {
        //       console.log("学校Id转换失败");
        //     }
        //   })
        //   .catch(() => {
        //     console.log("转换失败");
        //   });
      // }
    },
    // url参数转换
    transformUrlQuery(baseUrl) {
      let url = baseUrl || window.location.href;
      var reg_url = /^[^\?]+\?([\w\W]+)$/, //匹配url连接后的参数部分
        //exec()方法匹配字符串中的元素，返回一个数组，0项表示全部匹配的内容，1项表示正则的（）内匹配的内容。
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g, //匹配参数key=value表达式
        arr_url = reg_url.exec(url), //返回匹配结果
        ret = {}; //get the result object
      if (arr_url && arr_url[1]) {
        //如果传入的是一个url,且url有参数
        var str_para = arr_url[1], //参数部分的赋值
          result;
        while ((result = reg_para.exec(str_para)) != null) {
          ret[result[1]] = result[2];
        }
      }
      return ret;
    },
    // 学校Id转换
    transformSchoolId(schoolId,transformType) {
      let params = {
        schoolId: schoolId,
        type: transformType?transformType:"1"
      }
      return this.$axios(api.toggleSchoolId, {
        method: "post",
        params: params
      })
        .then(res => {
          console.log(res)
          if (res.data.code === 200 && res.data.data.schoolId) {
            let transformedData = res.data.data;
            return transformedData;
          } else {
            alert("未查到该学校相关信息");
            // window.history.back(-1);
          }
        })
        .catch(() => {
          console.log("转换失败");
        });
    },
    // areaCode跳转信息获取
    transformAreaCode(areaCode) {
      return this.$axios(api.toggleAreaCode, {
        method: "post",
        params: { areaCode: areaCode },
        headers: {
          token: localStorage.token
        }
      })
        .then(res => {
          if (res.data.code === 200 && res.data.data.areaCode) {
            let data = res.data.data;
            return data;
          } else {
            console.log("区域转换失败");
            alert("未查到该区域相关信息");
            setTimeout(() => {
              window.history.back(-1);
            }, 1000);
            return null;
          }
        })
        .catch(err => {
          console.log("区域转换", err);
          return null;
        });
    },
    // kb值单位转换
    transformSizeUnit(num, recursiveTimes = 0, baseUnit) {
      let unitArr = ["KB", "MB", "GB", "TB"];
      if (baseUnit) {
        recursiveTimes = unitArr.indexOf(baseUnit);
      }
      if (num < 1024 && recursiveTimes === 0) {
        return num + baseUnit ? baseUnit : "Kb";
      }
      recursiveTimes++;
      let res = num / 1024;
      let unit = "";
      switch (recursiveTimes) {
        case 1:
          unit = "MB";
          break;
        case 2:
          unit = "GB";
          break;
        case 3:
          unit = "TB";
          break;
        case 4:
          unit = "PB";
          break;
        case 5:
          unit = "EB";
          break;
      }
      if (res < 1024) {
        return res.toFixed(1) + unit;
      } else {
        return this.transformSizeUnit(parseFloat(res), recursiveTimes);
      }
    }
  }
};
