/** @module 数组-array */

/**
 * 求数组并集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function unionArr(a: any[], b: any[]): any[] {
  return Array.from(new Set([...a, ...b]))
}

/**
 * 求数组交集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function intersectArr(a: any[], b: any[]): any[] {
  return Array.from(new Set([...a].filter(x => b.includes(x))))
}

/**
 * 求数组差集
 *
 * @param {Array} a
 * @param {Array} b
 */
export function differenceArr(a: any[], b: any[]): any[] {
  return Array.from(new Set([...a].filter(x => !b.includes(x))))
}


/**
 * 基本类型数组去重
 *
 * @param {Array} arr - 需要去重的数组
 */
export function uniqueArr(arr: any[]) {
  return Array.from(new Set(arr))
}

/**
 * 判断是否是数组
 * @param {*} array - 需要判断的对象
 */
export function isArray(array) {
  return Object.prototype.toString.call(array) == "[object Array]";
}
