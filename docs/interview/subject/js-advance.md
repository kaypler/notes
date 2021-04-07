# JS真题

## 位运算

### 1. -7按位取反后的结果
::: details 查看答案
6 万能公式：`~x = - (x+1)` [详细](/algorithm/base/4-bitwise-negation)
:::

## 数组

### 1. [1, 2, 3, 4, 10].map(parseInt)的结果
::: details 查看答案
[1, NaN, NaN, NaN, 4]
:::

### 2. 下面代码输出什么
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

## 函数
### 1. 下面代码输出什么
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

### 2. 下面代码输出什么
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


### 3. 下面代码输出什么
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

## 作用域
### 1. 下面代码输出什么
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

### 2. 下面代码输出什么
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

### 3. 下面代码输出什么
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

### 4. 下面代码输出什么
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

### 5. 下面代码输出什么
```js
var name = 'window';
function Foo() {
  this.name = 'Foo';
  this.a = () => {
    console.log(this.name);
  }
}

Foo.prototype = {
  b: () => {
    console.log(this.name);
  }
}

var foo = new Foo();
foo.a();
foo.b();
```
::: details 查看答案
Foo window。对象不构成单独的作用域，导致this指向window
:::

## 对象
### 1. 下面代码输出什么
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


### 2. 下面代码输出什么
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

### 3. 下面代码输出什么
```js
String('11') == new String('11');
String('11') === new String('11');
```
::: details 查看答案
true, false<br>
两者类型不一样，一个是`string`，一个是`object`。`==` 时做了隐式转换，调用了`toString`
:::

## 异步
### 1. 下面代码输出什么
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

### 2.写出下面代码执行结果打印的先后顺序
```js
console.log("AAAA");
setTimeout(() => console.log("BBBB"), 1000);
const start = new Date();
while (new Date() - start < 3000) {}
console.log("CCCC");
setTimeout(() => console.log("DDDD"), 0);
new Promise((resolve, reject) => {
  console.log("EEEE");
  foo.bar(100);
})
.then(() => console.log("FFFF"))
.then(() => console.log("GGGG"))
.catch(() => console.log("HHHH"));
console.log("IIII");
```
::: details 查看答案
AAAA CCCC EEEE IIII HHHH BBBB DDDD <br>
t1排在前面t2排在后面（这个原因是while造成的）
:::

### 3. 写出下面代码执行结果打印的先后顺序
```js
async function async1() {
  console.log("AAAA");
  async2();
  console.log("BBBB");
}
async function async2() {
  console.log("CCCC");
}
console.log("DDDD");
setTimeout(function () {
    console.log("FFFF");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("GGGG");
  resolve();
}).then(function () {
  console.log("HHHH");
});
console.log("IIII");
```
::: details 查看答案
DDDD AAAA CCCC BBBB GGGG IIII HHHH FFFF <br>
这道题的坑就在于 async中如果没有await，那么它就是一个纯同步函数。
:::

### 4.写出下面代码执行输出的结果
```js
async function t() {
    let a = await fn().then((res)=>{return res})
    console.log(a);
}
async function fn(){
    await new Promise((resolve)=>{
        resolve("lagou")
    })
    return "lala"
}
t()
```
::: details 查看答案
lala <br>
首先考虑 fn() 执行返回一个promise对象，因为fn()执行有返回值lala，所以这个promise对象的状态resolve的值是lala，且将这个lala当作下一个then中回调函数的参数，所以打印的结果是lala。
:::

### 5.谈一谈下列两种写法的区别
```js
//第一种
promise.then((res) => {
    console.log('then:', res);
}).catch((err) => {
    console.log('catch:', err);
})
//第二种
promise.then((res) => {
    console.log('then:', res);
}, (err) => {
    console.log('catch:', err);
})
```
::: details 查看答案
第一种 catch 方法可以捕获到 catch 之前整条 promise 链路上所有抛出的异常。
第二种 then 方法的第二个参数捕获的异常依赖于上一个 Promise 对象的执行结果。
:::

## this指向
### 1、写出打印结果，并分析出原因
```js
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1); 
```
::: details 查看答案
method函数当中调用的fn函数是全局当中的函数，所以this指向的是window，this.length就是10。上面说了，arguments[0] ()代表的是调用arguments里面的第一项，
也就是传参进来的fn，所以这个this指向的是arguments，method函数接收的参数是两个，所以arguments.length就是2。最后的输出结果就是 10 2
:::

### 2、写出打印结果，并分析出原因
```js
function a(xx){
  this.x = xx;
  return this;
};
var x = a(5);
var y = a(6);

console.log(x.x);
console.log(y.x);
```
::: details 查看答案
a函数传了一个参数5，那么this.x就被赋值为了5，函数a的this指向的是window，也就是window.x = 5。上面我们说过，这个函数返回的是this，
也就是this指向的window，x = a(5)就相当于window.x = window，此时的x被赋值为了window。下面又执行了y = a(6)，也就是说，x的值再次发生了改变，
边为了6，y则被赋值为了window。console.log(x.x)就相当于console.log(6.x)，输出的自然是undefined。console.log(y.x)，输出的相当于是console.log(window.x)，
得到的值自然是6。最后输出的结果为 undefined 6
:::

## es6

### 1. typeof typeof Symbol(123)的结果 
::: details 查看答案
string
:::

### 2.Reflect.ownKeys、Object.getOwnPropertyNames、Object.keys的区别
::: details 查看答案
Reflect.ownKeys方法用于返回对象自身的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
Object.getOwnPropertyNames返回对象自身的所有字符串属性。
Object.keys返回对象自身所有可以枚举的字符串属性。
:::