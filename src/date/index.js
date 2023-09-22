const dayjs = require("dayjs");
const isoWeek = require("dayjs/plugin/isoWeek");
const dayOfYear = require("dayjs/plugin/dayOfYear");
dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);

/**
 * @description 对日期进行格式化
 * @param {*} dateString  日期
 * @param {*} formats 格式
 * @returns 
 */
export const dateFormat=(dateString, formats)=> {
  return dayjs(dateString).format(formats || "YYYY-MM-DD");
}

/**
 * @description 当前日期信息
 * @returns 
 */
export const currentDates=()=> {
  return {
    timestamp: dayjs().valueOf(), // 单位:毫秒
    date: dayjs().format("YYYY-MM-DD"),
    year: dayjs().year(),
    month: dayjs().month() + 1,
    day: dayjs().date(),
    weekday: dayjs().isoWeekday(),
    dayOfYear: dayjs().dayOfYear(),
  };
}

/**
 * @description 计算两个日期之间相差的天数
 * @param {*} date1 
 * @param {*} date2 
 * @returns number
 */
export const daysBetween=(date1, date2)=> {
  const aDate = new Date(date1);
  const bDate = new Date(date2);
  const aDay = 24 * 60 * 60 * 1000;
  const diffDay = (bDate - aDate) / aDay;
  return diffDay;
}

/**
 * @description 比较两个日期的大小
 * @param {*} date1 
 * @param {*} date2 
 * @returns Boolean
 */
export const compareDate=(date1, date2)=> {
  const oDate1 = new Date(date1);
  const oDate2 = new Date(date2);
  return oDate1.getTime() > oDate2.getTime()
}
