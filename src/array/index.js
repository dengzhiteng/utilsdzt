/**
 * @description 数组去重
 * @param {Array} arr 需要去重的数组
 * @returns 
 */
export const uniqueArr = (arr) => {
  return Array.from(new Set(arr));
}

/**
 * @description 求数组并集
 * @param {Array} a
 * @param {Array} b
 */
export const unionArr = (a, b) => {
  return Array.from(new Set([...a, ...b]));
}

/**
 * @description 求数组交集
 * @param {Array} a
 * @param {Array} b
 */
export const intersectArr = (a, b) => {
  return Array.from(new Set([...a].filter((x) => b.includes(x))));
}

/**
 *  @description 求数组差集
 * @param {Array} a
 * @param {Array} b
 */
export const differenceArr = (a, b) => {
  return Array.from(new Set([...a].filter((x) => !b.includes(x))));
}


/**
 * @description 规整多重数组
 * @param {Array} arr - 需要规整的数组
 */
export const flattenArr = (arr) => {
  if (!isArray(arr)) return arr
  return arr.reduce((done, curr) => done.concat(flattenArr(curr)), [])
}

/**
 * @description 实现基本数组的升序或者降序
 * @param {*} arr 
 * @param {*} type desc 降序,asc 升序
 * @returns 
 */
export const sortArr = (arr, type) => {
  if (type !== "desc" || type !== "asc") {
    throw new Error("只能输入 desc 或者 asc")
  }
  return arr.sort(function (a, b) {
    return type == "asc" ? a - b : b - a;
  });
}


/**
 * @description 数组对象中的 按照某个属性排序
 * @param {*} arr 
 * @param {*} key  数组对象中的某个属性值
 * @param {*} type  string,value:desc 降序,asc 升序
 * @returns 
 */
export const sortArrkey = (arr, key, type) => {
  if (type !== "desc" || type !== "asc") {
    throw new Error("只能输入 desc 或者 asc")
  }
  return arr.sort(function (a, b) {
    return type == "asc" ? a[key] - b[key] : b[key] - a[key]
  });
}
