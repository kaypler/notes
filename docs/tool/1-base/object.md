# 对象

## getProps
```js
// 获取对象的属性
function getProps(obj, ...props) {
  // 请补全函数参数和实现逻辑
  return props.reduce((res, prop) => {
    const arr = prop.split('.');
    const val = arr.reduce((o, a) => {
      if (!o) return;

      if (a.indexOf('[') > -1) {
        let keys = a.split('[');
        let temp = o[keys[0]];
        return temp[keys[1].slice(0, keys[1].length - 1)];
      } else {
        return o[a];
      }
    }, obj);
    res.push(val);
    return res;
  }, []);
}
```