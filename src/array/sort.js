/***
 * 实现基本数组的升序或者降序
 * type: string,value:desc 降序,asce 升序
 */
export function sortArr(arr, type) {
  //  升序
  if (type == "asce") {
    return arr.sort(function (a, b) {
      return a - b;
    });
  } else {
    //  降序
    return arr.sort(function (a, b) {
      return b - a;
    });
  }
}

/***
 * 数组对象中的 按照某个属性排序
 * arr
 * key: 数组对象中的某个属性值
 * type: string,value:desc 降序,asce 升序
 */
export function sortArrkey(arr, key, type) {
  //  升序
  if (type == "asce") {
    return arr.sort(function (a, b) {
      return a[key] - b[key];
    });
  } else {
    //  降序
    return arr.sort(function (a, b) {
      return b[key] - a[key];
    });
  }
}
