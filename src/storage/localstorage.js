/**
 * @description 获取localStorage值
 * @param {string} key 
 */
export const getStorage = (key) => {
  let data = localStorage.getItem(key);
  if (!data) return;
  data = JSON.parse(data);
  const day = data.validDay ? data.validDay : 0
  const isValidDay = new Date().getTime() - Number(data.saveTime) > 86400000 * day
  if (isValidDay) {
    return data.value
  } else {
    localStorage.removeItem(key)
    return false
  }
}


/**
 * @description  localStorage 设置值
 * @param {*string} key 存储的键
 * @param {*any} value 存储的值
 * @param {*number} validDay 有效天数
 */
export const setStorage = (key, value, validDay) => {
  if (!validDay) {
    localStorage.setItem(key, value);
    return true
  }
  const params = {
    saveTime: new Date().getTime(),
    validDay,
    value,
  };
  localStorage.setItem(key, JSON.stringify(params));
  return true
}

/**
 * @description 移除
 * @param {string} key 存储的键
 */
export const removeStorage = (key) => {
  if (!key) {
    throw new Error('key is required');
  }
  localStorage.removeItem(key);
  return true
}

/**
 * @description 清空所有
 */
export const clearAllStorage = () => {
  localStorage.clear();
  return true
}
