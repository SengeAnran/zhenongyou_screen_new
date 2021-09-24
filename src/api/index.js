import service from "../utils/request";

// 村落概况
// const path = process.env.VUE_APP_ENV === "production"? "" : "/api";
const path = "/api";

export function getVillageOverview(params) {
  return service({
    url: path + "/villageOverview",
    method: "get",
    params,
  });
}
// 村景星级分类
export function getStarRating(params) {
  return service({
    url: path + "/starRating",
    method: "get",
    params,
  });
}
// 农家乐经营一件事
export function getFarmhouseManagement(params) {
  return service({
    url: path + "/farmhouseManagement",
    method: "get",
    params,
  });
}
// 农家乐数量分布
export function getAgritainmentDistribution(params) {
  return service({
    url: path + "/agritainmentDistribution",
    method: "get",
    params,
  });
}
// 历史文化重点保护村类型
export function getHistoryCultureType(params) {
  return service({
    url: path + "/historyCultureType",
    method: "get",
    params,
  });
}

// 历史文化重点保护村数量分布
export function getHistoryCultureDistribution(params) {
  return service({
    url: path + "/historyCultureDistribution",
    method: "get",
    params,
  });
}
// 24节气村数量分布
export function getSolarTermDistribution(params) {
  return service({
    url: path + "/solarTermDistribution",
    method: "get",
    params,
  });
}
// 农业文化遗产地数量分布
export function getAgriculturalHeritageDistribution(params) {
  return service({
    url: path + "/agriculturalHeritageDistribution ",
    method: "get",
    params,
  });
}
//  历史文化村落保护项目数量分布
export function getProtectionItem(params) {
  return service({
    url: path + "/protectionItem",
    method: "get",
    params,
  });
}
//  历史文化村落保护项目数量分布
export function getLocationDistribution(data) {
  return service({
    url: path + "/locationDistribution",
    method: "post",
    data,
  });
}

// 人气活动
export function getPopularActivities(params) {
  return service({
    url: path + "/popularActivities",
    method: "get",
    params,
  });
}


// （市级以下）24节气村数量分布
export function getCitySolarTermDistribution(params) {
  return service({
    url: path + "/citySolarTermDistribution",
    method: "get",
    params,
  });
}

// （市级以下）农业文化遗产地数量分布
export function getCityAgriculturalHeritage(params) {
  return service({
    url: path + "/cityAgriculturalHeritage",
    method: "get",
    params,
  });
}

// （市级以下）历史文化重点保护村数量分布
export function getCityHistoryCulture(params) {
  return service({
    url: path + "/cityHistoryCulture",
    method: "get",
    params,
  });
}

// （市级以下）农家乐数量分布
export function getCityAgritainment(params) {
  return service({
    url: path + "/cityAgritainment",
    method: "get",
    params,
  });
}

// （市级以下）历史文化村落保护项目数量分布
export function getCityProtectionItem(params) {
  return service({
    url: path + "/cityProtectionItem",
    method: "get",
    params,
  });
}