// 手机
export const reg_mobilePhone = /^(13|14|15|16|17|18|19)\d{9}$/;
// 固话
export const reg_specialPhone = /^(0\d{2,3})-?(\d{7,8})$/;
// 姓名
export const reg_fullName = /^[\u4e00-\u9fa5]{2,4}$/;
// 邮箱
export const reg_email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
// 身份证
export const reg_idCard = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/;

export const idCard18Reg =
  /(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)|(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/;
// 邮政编码
export const reg_postCode = /^[1-9]\d{5}$/;
// 账号 字母和数字
export const reg_account = /^[a-zA-Z][a-zA-Z0-9]{4,15}$/;
// 密码 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export const reg_pwd =
  /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
// qq账号
export const reg_qq = /^[1-9][0-9]{4,10}$/;
// 微信账号
export const reg_wx = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
// 车牌
export const reg_cart = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
// 网址
export const reg_url = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
