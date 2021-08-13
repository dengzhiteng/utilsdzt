/** @module 数组-array */
import { isArray } from "../is";

/**
 * 基本类型数组去重
 * @param {Array} arr - 需要去重的数组
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}
