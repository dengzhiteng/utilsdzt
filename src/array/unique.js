/** @module 数组-array */
import {isArray} from '../is'

/**
 * 基本类型数组去重
 * @param {Array} arr - 需要去重的数组
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

/**
 * 对象数组单个键值匹配去重
 * @param {Array} arr - 需要去重的数组
 * @param {String} key - 单个键值
 */
export function uniqueKeyInArr(arr,key) {
  const cache = {}
  return arr.reduceRight((item,next) => {
    if (!cache[next[key]]) {
      cache[next[key]] = true
      item.push(next)
    }
    return item
  }, [])
}

/**
 * 对象数组完全匹配去重
 * @param {Array} arr - 需要去重的数组
 */
export function uniqueObjInArr(arr) {
  if (!isArray(arr)) return arr
  return Array.from(new Set(arr.map((item) => JSON.stringify(item)))).map((v) => JSON.parse(v))
}
