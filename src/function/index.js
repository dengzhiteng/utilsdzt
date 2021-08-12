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
 *
 */
export function deepCopy(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          //如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

/***
 * 获取url 中的参数
 * variable 字段名
 */
export function getUrlParam(variable) {
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
