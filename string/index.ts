
/**
 * 金额每三位正数添加逗号，支持保留小数
 * @example
 * ```js
 * toDecimal(10000000000000, 2) // 10,000,000,000.00
 * ```
 *
 * @param {string/number} textt - 需要被替换的文本
 * @param {number} len - 保留小数位数
 * @returns {string}
 */
export function toDecimal(text: string | number, len: number) {
  text = text.toString()
  if (/[^0-9.]/.test(text) || text == null || text == '') return ''
  text = text.replace(/^(\d*)$/, '$1.')
  text = (text + '00').replace(/(\d*\.\d\d)\d*/, '$1')
  text = text.replace('.', ',')
  const re = /(\d)(\d{3},)/
  while (re.test(text)) text = text.replace(re, '$1,$2')
  text = text.replace(/,(\d\d)$/, '.$1')
  if (len == 0) {
    // 不带小数位(默认是有小数位)
    const a = text.split('.')
    if (a[1] == '00') {
      text = a[0]
    }
  }
  return text
}


/**
 * 隐藏/替换字符串中间几位
 * @example
 * ```js
 * spliceText(18255558888, 3, 4, '****') // 182\*\*\*\*8888
 * ```
 *
 * @param {string/number} text - 需要被替换的文本
 * @param {number} start - start从前往后第几位
 * @param {number} last - end从后往前第几位
 * @param {string} replaceText - 用来替换的字符
 * @returns {string}
 */
export function spliceText(text: string | number, start: number, last: number, replaceText: string) {
  const reg = new RegExp('^(.{' + +start + '})(?:\\d+)(.{' + +last + '})$')
  return `${text}`.replace(reg, '$1' + replaceText + '$2')
}