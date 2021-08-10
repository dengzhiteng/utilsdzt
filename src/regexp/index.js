// 手机
export const reg_mobilePhone = /^(13|14|15|16|17|18|19)\d{9}$/;
// 座机
export const reg_specialPhone = /^(0\d{2,3})-?(\d{7,8})$/;
// 姓名
export const reg_fullName = /^[\u4e00-\u9fa5]{2,4}$/;
// 邮箱
export const reg_email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
// 身份证
export const reg_idCardNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

// 邮政编码
export const reg_postCode = /^[1-9]\d{5}$/;

// 账号 字母和数字
export const reg_account = /^[a-zA-Z][a-zA-Z0-9]{4,15}$/;

// 密码 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export const reg_pwd =
  /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
