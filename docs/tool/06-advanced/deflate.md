# 数据压缩与解压

```typescript
const { Base64 } = require('js-base64');
const pako = require('pako');
 
// 压缩
export function deflate(data: any) {
  if (!data) return data;
  // 判断数据是否需要转为JSON
  const dataJson = typeof data !== 'string' ? JSON.stringify(data) : data;
 
  // 使用Base64.encode处理字符编码，兼容中文
  const base64Str = Base64.encode(dataJson)
  const uint8Array = pako.deflate(base64Str, { level: 6 }); // 0表示不压缩，1表示压缩时间最快，压缩率最小；9表示压缩率最大，时间最长；默认6
  const arr = Array.from(uint8Array) as number[];
 
  let s = '';
  arr.forEach((item) => {
    s += String.fromCharCode(item);
  });
 
  return btoa(s);
}
 
 
// 解压
export function inflate(base64Str: string) {
  const strData = atob(base64Str);
  const charData = strData.split('').map(function (x) {
    return x.charCodeAt(0);
  });
  const binData = new Uint8Array(charData);
 
  let inflateData;
  try {
    inflateData = pako.inflate(binData);
  } catch (_) {
    return base64Str;
  }
 
  // 切片处理数据，防止内存溢出报错
  const chunk = 8 * 1024;
  let str = '';
  let i;
  for (i = 0; i < inflateData.length / chunk; i++) {
    str += String.fromCharCode.apply(null, inflateData.slice(i * chunk, (i + 1) * chunk));
  }
  str += String.fromCharCode.apply(null, inflateData.slice(i * chunk));
 
  const originData = Base64.decode(str);
 
  // 对象或数组进行JSON转换
  try {
    return JSON.parse(originData);
  } catch (_) {
    return originData;
  }
}
```