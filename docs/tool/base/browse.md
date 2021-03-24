# 浏览器篇

## getIosMainVersion
```js
// 获取ios系统主版本
export function getIosMainVersion() {
    const u = navigator.userAgent; 
    const ver = u.match(/CPU iPhone OS (\d+)_/);
    
    return ver && parseInt(ver[1]);
}
```

## getQueryObj
```js
// 解析url参数
export function getQueryObj(url = '') {
    url = (url || weex.config.bundleUrl).replace('?','<<?>>');
    let queryStr = url.split('<<?>>')[1];
    const pattern = new RegExp('(?:^|&)([^\=&]*)=([^&]*)', 'g');

    let r;
    let obj = Object.create(null);

    while((r = pattern.exec(queryStr)) != null) {
        obj[r[1]] = decodeURIComponent(r[2]);
    } 
    
    return obj;
}
```

## htmlDecode
```js
// html解码
export function htmlDecode(str='') {
    let temp = '';
    if(str.length == 0) return '';
    temp = str.replace(/&amp;/g, '&');
    temp = temp.replace(/&lt;/g, '<');
    temp = temp.replace(/&gt;/g, '>');
    temp = temp.replace(/&nbsp;/g, ' ');
    temp = temp.replace(/&#39;/g, '\'');
    temp = temp.replace(/&quot;/g, '\'');
    return temp; 
}
```

## htmlEncode
```js
// html编码
export function htmlEncode(str='') {
    let temp = '';
    if(str.length == 0) return '';
    temp = str.replace(/&/g, '&amp;');
    temp = temp.replace(/</g, '&lt;');
    temp = temp.replace(/>/g, '&gt;');
    temp = temp.replace(/\s/g, '&nbsp;');
    temp = temp.replace(/\'/g, '&#39;');
    temp = temp.replace(/\'/g, '&quot;');
    return temp;
}
```

## isAlipay
```js
// 判断是否是支付宝
export function isAlipay() {
   return ua.indexOf('alipayclient') !== -1
};
```

## isIos
```js
// 判断是否是ios浏览器
export function isIos() {
    let u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
```
## isSafari
```js
//判断是safari浏览器
export function isSafari() {
    return  /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
}
```

## isWeixin
```js
// 判断是否是微信
export function isWeixin() {
   return ua.indexOf('micromessenger') !== -1
};
```
