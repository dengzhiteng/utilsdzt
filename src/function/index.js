/**
 * @description 防抖函数 非立即触发事件后函数不会立即执行，而是在 n 秒后执行
 * @param {Function} func - 需要防抖处理的函数
 * @param {number} delay - 防抖间隔
 * @returns {Function}
 */
export function debounce (func, wait) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}

/**
 * @description 节流函数
 * @param {Function} func - 需要节流处理的函数
 * @param {number} wait - 节流阀值
 * @returns {Function}
 */
export function throttle (func, wait) {
  let previous = 0;
  return function () {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}

/**
 * @description 深拷贝
 * @param {*} obj 
 * @returns 
 */
export function deepClone (obj) {
  // 过滤一些特殊情况
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (typeof window !== "undefined" && window.JSON) {
    return JSON.parse(JSON.stringify(obj));
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  // 不直接创建空对象的目的：克隆的结果和之前保持所属类  =》 即能克隆普通对象，又能克隆某个实例对象
  let newObj = new obj.constructor(); 
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}


/**
 * @description 获取url 中的参数
 * @param {*} variable  
 * @returns 
 */
export function getUrlParams (field) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == field) {
      return pair[1];
    }
  }
  return false;
}

/**
 * @description 获取url
 * @returns 
 */
export function getUrl () {
  var domain = "";
  url = location.href;
  offset = url.indexOf("?");
  if (offset >= 0) {
    domain = url.substring(0, offset);
  } else {
    domain = url;
  }
  return domain;
}


/**
 * @description 根据身份证号码获取出生日期，性别，年龄
 * @param cardNo {string} 证件号 
 * @returns 出生日期，性别，年龄
 */
export function getCardInfo (cardNo) {
  const birthDay =cardNo.substring(6, 10) +"-" +cardNo.substring(10, 12) +"-" +cardNo.substring(12, 14);
  const sex = parseInt(cardNo.substr(16, 1)) % 2 == 1 ? "男" : "女";
  let myDate = new Date();
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let age = myDate.getFullYear() - cardNo.substring(6, 10) - 1;
  if (
    cardNo.substring(10, 12) < month ||
    (cardNo.substring(10, 12) == month && cardNo.substring(12, 14) <= day)
  ) {
    age++;
  }
  return {
    birthDay,
    age,
    sex,
  };
}


/**
 * @description 保留2位小数 （截取) 默认保留2位，可以通过unit 参数进行设置
 * @param {*} x
 * @param {*} [unit]
 * @returns
 */
export function toDecimal2 (x, unit) {
  const len = unit ? unit : 2;
  if ((!x && x != 0) || isNaN(+x)) {
    return "--";
  }
  x = (+x).toFixed(len + 1);
  x = x.substring(0, x.length - 1);
  return x;
}


/**
 * @description 过滤对象中 boolean 为false 的值，比如 '' null false undefined
 * @param {*} params 
 * @returns 
 */
export function filterObjectEmpty (params) {
  const obj = {};
  Object.keys(params).map((key) => {
    if (params[key] instanceof Array) {
      obj[key] = params[key];
    } else {
      params[key] && (obj[key] = params[key]);
    }
  });
  return obj;
}

/**
 * @description 检测设备类型(手机返回true,反之false)
 * @returns 
 */
export const deviceDetection = () => {
  const sUserAgent = navigator.userAgent.toLowerCase();
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  const bIsMidp = sUserAgent.match(/midp/i) == "midp";
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  const bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  const bIsAndroid = sUserAgent.match(/android/i) == "android";
  const bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  const bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  return (
    bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM
  );
};

/**
 * @description 获取浏览器型号以及版本
 * @returns 
 */
export const getBrowserInfo = () => {
  const ua = navigator.userAgent.toLowerCase();
  const re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
  const m = ua.match(re);
  const Sys = {
    browser: m[1].replace(/version/, "'safari"),
    version: m[2],
  };
  return Sys;
};
