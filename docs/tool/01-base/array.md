# 数组

## 扁平化
```js
function flatten(arr) {
 let result=[]
 for (let i=0,len=arr.length;i<len;i++) {
  if (Array.isArray(arr[i])) {
   result=result.concat(flatten(arr[i]))
  } else {
   result.push(arr[i])
  }
 }
 return result
}
```

## 打乱顺序
```js
export const shuffle = (arr) => {
  const result = [];
  let random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }
  return result;
};
```

## 去重
```js
function unique(arr) {
    let appeard=new Set()
    return arr.filter(item=>{
        //创建一个可以唯一标识对象的字符串id
        let id=item+JSON.stringify(item)
        if (appeard.has(id)) {
            return false
        } else {
            appeard.add(id)
            return true
        }
    })
}
```

## 参数数组转成json字符串
```typescript
function (params = Array<{ param: string, value: string }>) {
  if (!Array.isArray(params) || !params.length) {
    return '{}';
  }

  const paramsStr = params
    .filter(item => item.param && item.value)
    .reduce((str, item, index, arr) => {
      let isJSON = false;

      try {
        JSON.parse(item.value);
        isJSON = true;
      // eslint-disable-next-line no-empty
      } catch (e) {}

      const value = isJSON ? item.value : `"${item.value}"`;
      str += `"${item.param}":${value}`;
      if (index === arr.length - 1) {
        str += '}';
      } else {
        str += ',';
      }
      return str;
    }, '{');

  return paramsStr;
}
```
