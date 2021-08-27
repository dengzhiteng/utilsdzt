/**
 * 防抖函数 非立即  触发事件后函数不会立即执行，而是在 n 秒后执行
 * @param {Function} func - 需要防抖处理的函数
 * @param {number} delay - 防抖间隔
 * @returns {Function}
 */
export function debounce(func, delay) {
  let timer;
  return function () {
    let context = this; // 注意 this 指向
    let args = arguments; // arguments中存着e
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
 * 节流函数
 * @param {Function} func - 需要节流处理的函数
 * @param {number} wait - 节流阀值
 * @returns {Function}
 */
export function throttle(func, wait) {
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

/****
 * 深拷贝
 */
export function deepClone(obj) {
  // 过滤一些特殊情况
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (typeof window !== "undefined" && window.JSON) {
    // 浏览器环境下 并支持window.JSON 则使用 JSON
    return JSON.parse(JSON.stringify(obj));
  }
  if (obj instanceof RegExp) {
    // 正则
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    // 日期
    return new Date(obj);
  }
  let newObj = new obj.constructor(); // 不直接创建空对象的目的：克隆的结果和之前保持所属类  =》 即能克隆普通对象，又能克隆某个实例对象
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

/***
 * 获取url 中的参数
 * variable 字段名
 */
export function getUrlParams(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

function getUrl() {
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

/***
 * 输入一个身份证号码，等到 出生日期，性别，年龄
 * UserCard
 */
export function getIdCardInfo(UserCard) {
  //出生日期
  const birthDay =
    UserCard.substring(6, 10) +
    "-" +
    UserCard.substring(10, 12) +
    "-" +
    UserCard.substring(12, 14);
  //性别
  const sex = parseInt(UserCard.substr(16, 1)) % 2 == 1 ? "男" : "女";
  //年龄
  let myDate = new Date();
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let age = myDate.getFullYear() - UserCard.substring(6, 10) - 1;
  if (
    UserCard.substring(10, 12) < month ||
    (UserCard.substring(10, 12) == month && UserCard.substring(12, 14) <= day)
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
 * 保留2位小数 （截取) 默认保留2位，可以通过unit 参数进行设置
 * @param {*} x
 * @param {*} [unit]
 * @returns
 */
export function toDecimal2(x, unit) {
  const len = unit ? unit : 2;
  if ((!x && x != 0) || isNaN(+x)) {
    return "--";
  }
  x = (+x).toFixed(len + 1);
  x = x.substring(0, x.length - 1);
  return x;
}

/****
 * 过滤对象中 boolean 为false 的值，比如 '' null false undefined
 */
export function filterObjectEmpty(params) {
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
