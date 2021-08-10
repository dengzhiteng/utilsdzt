const dayjs = require("dayjs");

/***
 * 对日期进行格式化
 */
export function dateFormat(date, formats) {
  return dayjs(date).format(formats || "YYYY-MM-DD");
}

/***
 * 当前时间
 *
 */
export function currentDates() {
  const currentDates = {
    timestamp: dayjs().valueOf(), // 单位是毫秒
    weeks: dayjs().day(), // 周几
    date: dayjs().format("YYYY-MM-DD"), // 日期
  };
  return currentDates;
}
