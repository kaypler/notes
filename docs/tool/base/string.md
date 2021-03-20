# 字符串

## 字符串全排列
```js
//抽出一个字符s,对其余的进行排列,将s放在每种排列开头
function combine(str) { 
 if (str.length===1) return [str]
 let results=[]
 for (let i in str) {
  for (let s of combine(str.slice(0,i)+str.slice(1+(+i)))) {
   results.push(str[i]+s)
  }
 }
    //可能会出现类似"aa"=>[aa,aa,aa,aa]的情况,需要去重
 return [...new Set(results)]
}
```

## 去除空格
```js
function trim(str) {
  return str.replace(/(^\s+)|(\s+$)/g,'')//将前空格和后空格替换为空
}
```