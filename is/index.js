/**
 * 判断是否是数组
 * @param {*} array - 需要判断的对象
 */
export function isArray(array) {
  return Object.prototype.toString.call(array) == "[object Array]";
}
