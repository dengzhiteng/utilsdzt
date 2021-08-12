/**
 * 原生的 请求
 * @param {*} option
 */
export function ajax(option) {
  //1.创建对象
  var xhr = new XMLHttpRequest();
  //2.设置请求行(get请求数据写在url后面)
  // 如果是get请求 并且有数据
  if (option.type == "get" && option.data) {
    option.url += "?";
    option.url += option.data;
    // 直接设置为null 方便后续使用
    option.data = null;
  }
  xhr.open(option.type, option.url);
  //3.设置请求头(get请求可以省略,post不发送数据也可以省略)
  if (option.type == "post" && option.data) {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  //3.5注册回调函数
  xhr.onload = function () {
    // 增加判断类型的代码
    var type = xhr.getResponseHeader("content-type");
    // 说明是xml
    if (type.indexOf("xml") != -1) {
      option.success(xhr.responseXML);
    } else if (type.indexOf("json") != -1) {
      // 如果是json
      option.success(JSON.parse(xhr.responseText));
    } else {
      // 如果都不是
      option.success(xhr.responseText);
    }
  };
  //4.请求主体发送(get请求为空，或者写null，post请求数据写在这里，如果没有数据，直接为空或者写null)
  xhr.send(option.data);
}
/**
 * 原生post 请求
 * @param {*} url
 * @param {*} data
 * @param {*} success
 */
export function post(url, data, success) {
  //1.创建对象success) {
  //1.创建对象
  var xhr = new XMLHttpRequest();
  //2.设置请求行(get请求数据写在url后面)
  xhr.open("post", url);
  //3.设置请求头(get请求可以省略,post不发送数据也可以省略)
  if (data) {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  //3.5注册回调函数
  xhr.onload = function () {
    // console.log(xhr.responseText);
    success(xhr.responseText);
  };
  //4.请求主体发送(get请求为空，或者写null，post请求数据写在这里，如果没有数据，直接为空或者写null)
  xhr.send(data);
}
/**
 * 原生get请求
 * @param {*} url
 * @param {*} data
 * @param {*} success
 */
export function get(url, data, success) {
  //1.创建对象
  var xhr = new XMLHttpRequest();
  //2.设置请求行(get请求数据写在url后面)
  if (data) {
    url += "?";
    url += data;
  }
  xhr.open("get", url);
  //3.设置请求头(get请求可以省略,post不发送数据也可以省略)
  //3.5注册回调函数
  xhr.onload = function () {
    // console.log(xhr.responseText);
    success(xhr.responseText);
  };
  //4.请求主体发送(get请求为空，或者写null，post请求数据写在这里，如果没有数据，直接为空或者写null)
  xhr.send(null);
}
