# 拷贝

## 深拷贝
```js
function cloneDeep(obj) {
  // 当null NaN undefined number string等基本数据类型时直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Date类型
  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  // 正则类型
  if (obj.instanceof RegExp) {
    const Constructor = obj.constructor;
    return new Constructor(obj);
  }
  if (obj instanceof Array || obj instanceof Object) {
    const copyObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copyObj[key] = cloneDeep(obj[key]);
      }
    }
    return copyObj;
  }
}
```