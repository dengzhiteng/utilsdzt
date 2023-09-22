/**
 * @description 设置Cookie
 * @param {string} key - 存储的键
 * @param {any} value - 存储的值
 * @param {number} [day] - 过期时间
 */
export function setCookie(key, value, day) {
  if (day !== 0) {
    //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var expires = day * 24 * 60 * 60 * 1000;
    var date = new Date(+new Date() + expires);
    document.cookie =
      key + "=" + escape(value) + ";expires=" + date.toUTCString();
  } else {
    document.cookie = key + "=" + escape(value);
  }
}

/**
 * @description 获取Cookie
 * @param key
 */
export function getCookie(key) {
  const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  return arr ? decodeURIComponent(arr[2]) : null;
}

/**
 * @description 清除Cookie
 * @param {string} key - 存储的键
 * @param {string} [domain] - 共享Cookie域名
 */
export function removeCookie(key, domain) {
  setCookie("", key, -1, domain);
}
