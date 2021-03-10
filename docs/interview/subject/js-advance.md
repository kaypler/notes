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

### 2. 下面代码输出什么
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

### 3. 下面代码输出什么
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

### 4. 下面代码输出什么
```js
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
```
::: details 查看答案
undefined。函数声明优先于变量声明； 在非匿名自执行函数中，函数变量为只读状态无法修改；
:::

### 5. 下面代码输出什么
```js
var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()
```
::: details 查看答案
undefined，10，20。变量声明提升
:::

### 6. 下面代码输出什么
```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```
::: details 查看答案
输出结果：Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]----> [ 2: 1, 3: 2, length: 4, push: ƒ push(), splice: ƒ splice() ]<br>
push 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。push 方法根据 length 属性来决定从哪里开始插入给定的值。如果 length 不能被转成一个数值，则插入的元素索引为 0，包括 length 不存在时。当 length 不存在时，将会创建它。 唯一的原生类数组（array-like）对象是 Strings，尽管如此，它们并不适用该方法，因为字符串是不可改变的。
:::

### 7. 下面代码输出什么
```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) 	
console.log(b.x)
```
::: details 查看答案
undefined，{n: 2}。
相当于b.x = a = {n: 2}
:::

### 8. 下面代码输出什么
```js
// example 1
var a={}, b='123', c=123;  
a[b]='b';
a[c]='c';  
console.log(a[b]);

---------------------
// example 2
var a={}, b=Symbol('123'), c=Symbol('123');  
a[b]='b';
a[c]='c';  
console.log(a[b]);

---------------------
// example 3
var a={}, b={key:'123'}, c={key:'456'};  
a[b]='b';
a[c]='c';  
console.log(a[b]);
```
::: details 查看答案
c, b, c.
- 对象的键名只能是字符串和 Symbol 类型。
- 其他类型的键名会被转换成字符串类型。
- 对象转字符串默认会调用 toString 方法。
:::

### 9. 下面代码输出什么[京东]
```js
function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object()
  o.siteUrl = "http://www.google.com"
} 
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
```
::: details 查看答案
输出：http://www.baidu.com <br>
传进函数的是原对象的地址(或者说引用)，这个地址赋值给了形参(形参看做局部变量)，形参变量此时指向原对象，后面o=new object的时候，
形参变量保存的是新对象的地址，指向的是新的对象，所以第二次的o.siteUrl 也是给这个新对象属性的赋值，和旧对象无关。最后打印website.SiteUrl 的时候，
访问的是旧对象，因为前面的改动都只涉及到形参变量，和website无关，website依然保存着旧对象的引用。
:::

### 10. 下面代码输出什么[京东]
```js
function Foo() {
	Foo.a = function() {
		console.log(1)
	}
	this.a = function() {
		console.log(2)
	}
}
Foo.prototype.a = function() {
	console.log(3)
}
Foo.a = function() {
	console.log(4)
}
Foo.a();
var obj = new Foo();
obj.a();
Foo.a();
```
::: details 查看答案
4, 2, 1
:::

### 11. 下面代码输出什么
```js
String('11') == new String('11');
String('11') === new String('11');
```
::: details 查看答案
true, false<br>
两者类型不一样，一个是`string`，一个是`object`。`==` 时做了隐式转换，调用了`toString`
:::

### 12. 下面代码输出什么
```js
var name = 'Tom';
(function() {
if (typeof name == 'undefined') {
  var name = 'Jack';
  console.log('Goodbye ' + name);
} else {
  console.log('Hello ' + name);
}
})();
```
::: details 查看答案
Goodbye Jack； IIFE内的var穿透了块作用域，name被提升至if()之前，且此时name为undefined。
:::

### 13. 下面代码输出什么
```js
function wait() {
  return new Promise(resolve =>
    setTimeout(resolve, 10 * 1000)
  )
}

async function main() {
  console.time();
  const x = wait();
  const y = wait();
  const z = wait();
  await x;
  await y;
  await z;
  console.timeEnd();
}
main();
```
::: details 查看答案
```js
async function main() {
	console.time();
	const x = await wait(); // 每个都是都执行完才结,包括setTimeout（10*1000）的执行时间
	const y = await wait(); // 执行顺序 x->y->z 同步执行，x 与 setTimeout 属于同步执行
	const z = await wait();
	console.timeEnd(); // default: 30099.47705078125ms
	
	console.time();
	const x1 = wait(); // x1,y1,z1 同时异步执行， 包括setTimeout（10*1000）的执行时间
	const y1 = wait(); // x1 与 setTimeout 属于同步执行
	const z1 = wait();
	await x1;
	await y1;
	await z1;
	console.timeEnd(); // default: 10000.67822265625ms
	
	console.time();
	const x2 = wait(); // x2,y2,z2 同步执行，但是不包括setTimeout（10*1000）的执行时间
	const y2 = wait(); // x2 与 setTimeout 属于异步执行
	const z2 = wait();
	x2,y2,z2;
	console.timeEnd(); // default: 0.065185546875ms
}
```
:::

## es6

### 1. typeof typeof Symbol(123)的结果 
::: details 查看答案
string
:::