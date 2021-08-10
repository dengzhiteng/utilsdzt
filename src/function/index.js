/**
 * 防抖函数
 *
 * @param {Function} fn - 需要防抖处理的函数
 * @param {number} delay - 防抖间隔
 *
 * @returns {Function}
 */
export function debounce(fn: Function, delay: number): Function {
  let timer: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * 节流函数
 *
 * @param {Function} fn - 需要节流处理的函数
 * @param {number} threshold - 节流阀值
 *
 * @returns {Function}
 */
export function throttle(fn: Function, threshold: number): Function {
  let timer: NodeJS.Timeout;
  let start = +new Date();
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    const curr = +new Date() - 0;
    if (curr - start >= threshold) {
      fn.apply(this, args);
      start = curr;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, threshold);
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
