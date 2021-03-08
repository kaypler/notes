# JS真题

## 位运算

### 1. -7按位取反后的结果
::: details 查看答案
-6 万能公式：`~x = - (x+1)` [详细](/algorithm/base/4-bitwise-negation)
:::

## 函数

### 1. [1, 2, 3, 4, 10].map(parseInt)的结果
::: details 查看答案
[1, NaN, NaN, NaN, 4]
:::

### 以下函数运算的结果
```js
function testArg(a, b = 'b') {
  console.log(a === arguments[0]);
  console.log(b === arguments[1]);
  a = 'c';
  b = 'd';
  console.log(a === arguments[0]);
  console.log(b === arguments[1]);
}
testArg('x');
```
::: details 查看答案
true, false, false, false
:::

### 以下函数运算的结果
```js
var add = function(m) {
  var temp = function (n) {
    return add(m + n);
  }
  temp.toString = function() {
    return m.toString(2);
  }
  return temp;
}
console.info(add(3)(4)(5));
```
::: details 查看答案
1100
:::

## es6

### 1. typeof typeof Symbol(123)的结果 
::: details 查看答案
string
:::