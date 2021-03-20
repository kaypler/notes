# 正则表达式校验

## isBankCode
```js
// 判断是否为银行卡
export function isBankCode(bankCode) {
    const reg = /^(?:[1-9]{1})(?:\d{15}|\d{18})$/
    return reg.test(bankCode)
}
```

## isChinese
```js
// 判断是否为中文
export function isChinese(str='') {
    return (/[\u4E00-\u9FA5]+/.test(str));
}
```

## isEmail
```js
// 判断是否为邮箱
export function isEmail(emailStr){
    emailStr = emailStr.toString()
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
    return reg.test(emailStr)
}
```

## isEmoji
```js
// 是否包含表情Emoji
export function isEmoji (str){
  const emojiReg = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\u3030/ig;
	 return emojiReg.test(str);
}
```

## isIdCard
```js
// 判断是否为身份证
export function isIdCard(str){
    const idCardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return idCardReg.test(str)
}
```

## isIp
```js
// 判断是否为IP
export function isIp(str) {
	 var reg = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
     if(reg.exec(str)!=null){
         if(RegExp.$1<0||RegExp.$1>255) return false;
         if(RegExp.$2<0||RegExp.$2>255) return false;
         if(RegExp.$3<0||RegExp.$3>255) return false;
         if(RegExp.$4<0||RegExp.$4>255) return false;
         return true;
     }else{
         return false;
     }
}
```

## isPhone
```js
// 判断是否为手机号码
export function isPhone(str) {
    const phoneNumReg = /^1[3456789]\d{9}$/;

    str = (str+'').replace(/\s/g, '');
    return phoneNumReg.test(str)
}
```

## isTwoDecimal
```js
// 检验是否为保留两位小数
export function isTwoDecimal(str) {
    const reg = /^\d+(\.\d{1,2})?$/;
    return reg.test(str);
}
```

## isUrl
```js
// 判断是否为Url
export function isUrl(url) {
    if (!url) return false
    let match2 = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
    return match2.test(url)
}
```
