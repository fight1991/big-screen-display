
// let requestUrl =  "http://10.136.106.229:10000"; //研发云教育应用API
let requestUrl =
  process.env.NODE_ENV === "production"
    ? window.location.origin
    : "http://10.136.106.229:10000";
let studentsUrl =
  process.env.NODE_ENV === "production"
    ? "http://10.136.107.220:10000"
    : "http://10.136.107.220:10000";
export default {
    requestUrl,
    /* 公共 */
    getSchoolLogin: requestUrl + "/api/device/login/token", /*单点登录-获取学校信息*/
    getPageIco: requestUrl + "/api/device/school/info",  /* 网页ico地址*/
    toggleSchoolId: requestUrl + "/api/device/common/converter/schoolId", /* 平台与大数据 学校Id转换 */
     /* 应用看板路由权限 */
    routerPermission: requestUrl + "/api/device/schoolMenu/v1/getMenuElement", // 应用看板路由权限
    /* 总览 */
    getDeviceProportion: requestUrl + "/api/device/school/getDeviceProportion", //设备占比率
    getOnlineDeviceProportion:requestUrl + "/api/device/school/getOnlineDeviceProportion", //查询学校在线设备比例
    getSchoolMonitorDevicesStream: requestUrl + "/api/application/schoolSafety/v1/getSchoolAllMonitorDevicesStream", //查询学校下监控视频流
    getSchoolConsumption: requestUrl + "/api/teaching/overview/schoolConsumption", //学期消费统计
    getSchoolMonthConsume: requestUrl + "/api/teaching/overview/schoolMonthConsume", //本月消费统计
    getSchoolGenderRate: requestUrl +"/api/teaching/overview/schoolGenderRate", //学校男女比例
    getSchoolPerson: requestUrl +"/api/teaching/overview/schoolPerson", //学校人数情况
    getSchoolSubjectTeacherRate: requestUrl +"/api/teaching/overview/schoolSubjectTeacherRate", //各科目教师占比

    /* 考勤， 教学管理 */
    getAttendRate: requestUrl + '/api/teaching/attend/attendRate', //全校学生缺勤比（今日）
    getFactNumber: requestUrl + '/api/teaching/attend/factNumber', //实际到校人数（今日）
    getAttendPerson: requestUrl + '/api/teaching/attend/getAttendPerson', //【教学管理】当日学校教师、学生考勤
    getStudentGradeRatio: requestUrl + '/api/teaching/attend/getStudentGradeRatio', //【教学管理】查询学生年级分布占比
    getStudentSituation: requestUrl + '/api/teaching/attend/getStudentSituation', //【教学管理】教学管理各年级学生到校情况
    getTeacherDepartmentRatio: requestUrl + '/api/teaching/attend/getTeacherDepartmentRatio', //【教学管理】查询教师部门分布占比
    getMeetSign: requestUrl + '/api/teaching/attend/meetSign', //会议签到情况（本周）
    getRecordNumber: requestUrl + '/api/teaching/attend/recordNumber', //各年级学生刷卡情况（今日）
    getSignPerson: requestUrl + '/api/teaching/attend/signPerson', //各会议签到人员列表（本周）
    getStatisticsData: requestUrl + '/api/teaching/attend/statisticsData', //【教学管理】教学管理今日累计统计数据
    getStudentRecord: requestUrl + '/api/teaching/attend/studentRecord', //分页查询各班学生刷卡情况（今日）

    // 应用大数据
    getThirdUserSchool: requestUrl + "/api/application/common/v1/getThirdUserSchool", //(代理)获取三方用户机构信息
    getThirdSchool: requestUrl + "/api/application/common/v1/getThirdSchool", //(代理)获取三方学校信息
    applicationGroupType: requestUrl + "/api/application/common/v1/getSchoolType", // 教育学段（小学、初中、高中、其他）
    applicationAmount: requestUrl + "/api/application/school/v1/getApplicationAmount", // (代理)【学校（应用总数）】获取机构下应用总数
    applicationGroupUsers: requestUrl + "/api/application/school/v1/getStatsSchoolUser", // (代理)统计机构用户数量
    applicationInfo: requestUrl + "/api/application/school/v1/getApplicationInfo", // (代理)【学校（应用分类）】获取机构下应用分类占比详情
    applicationRank: requestUrl + "/api/application/school/v1/getApplicationRank", // (代理)【学校（应用排行）】获取机构下应用排行
    applicationActive:  requestUrl + "/api/application/school/v1/getApplicationActive", // 应用活跃数据度

    /* 学校网络大数据 */
    userBehaviorAnalysis: requestUrl + "/api/network/school/userBehaviorAnalysis", //用户行为倾向分析
    getDataTrafficUsedRankList:
        requestUrl + "/api/network/school/getDataTrafficUsedRankList", //学校流量使用情况排名查询
    getSensitiveWord: requestUrl + "/api/network/school/getSensitiveWord", //学校敏感词
    getGatewayInfo: requestUrl + "/api/network/school/getGatewayInfo", // 网关概况
    getNetworkOverview: requestUrl + "/api/network/school/getNetworkOverview", //网络看板概况
    getDeviceAlarmInfo: requestUrl + "/api/network/school/getDeviceAlarmInfo", //设备告警
    dataTrafficUsageTrends:
        requestUrl + "/api/network/school/dataTrafficUsageTrends", // 流量使用趋势

    /*  装备大数据 */
    deviceOverviewTotal: requestUrl + "/api/device/school/deviceOverview", // 总览数量
    devicePercentage: requestUrl + "/api/device/school/getDeviceProportion", // 各类设备占比
    deviceUsed: requestUrl + "/api/device/school/getDeviceUsedProportion", // 设备使用率
    deviceOutOfOrder: requestUrl + "/api/device/school/getDeviceErrorInfo", // 故障设备情况
    deviceOverviewStatus: requestUrl + "/api/device/school/typeList/count", //各类设备在线状态
    deviceOnlinePercentage:requestUrl + "/api/device/school/getDeviceOnlineDuration", // 设备在线时长占比
    deviceCheckInfo: requestUrl + "/api/device/school/deviceCheckInfo", // 最近一次盘点情况
    newDeviceCount: requestUrl + "/api/device/school/term/newDeviceCount", // 近3年设备新增

     /* 平台与大数据 学校Id转换 */
    toggleSchoolId: requestUrl + "/api/device/common/converter/schoolId",
    toggleAreaCode: requestUrl + "/api/device/common/converter/areaCode",
    /* 网页ico地址*/
    getPageIco: requestUrl + "/api/device/school/info",

    /* 学生画像*/
    synBasicStudent: studentsUrl + "/api/student/Integrate/basicStudent", // 获取学生信息
    synBasic: studentsUrl + "/api/student/Integrate/basic", // 获取学生基本信息
    couPerformance: studentsUrl + "/api/student/performance/trend", // 总分成绩走势
    couRank: studentsUrl + "/api/student/rank/trend", // 排名走势
    couScore: studentsUrl + "/api/student/score/trend", // 学生考试分数走势（本学期）
  }