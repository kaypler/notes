# Javascript

## 原型
每个对象拥有一个原型对象，对象以其原型为模板，从原型继承方法和属性，这些属性和方法定义在对象的构造器函数的 prototype 属性上，而非对象实例本身。
![An image](./images/prototype.png)

### 原型链
每个对象拥有一个原型对象，通过 __proto__ 指针指向上一个原型 ，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，
最终指向 null。这种关系被称为原型链 (prototype chain)，通过原型链一个对象会拥有定义在其他对象中的属性和方法。
![An image](./images/prototype-chain.png)

## this 解析

### 默认绑定
- **独立函数调用**，可以把默认绑定看作是无法应用其他规则时的默认规则，this指向全局对象。
- **严格模式**下，不能将全局对象用于默认绑定，this会绑定到undefined。只有函数运行在非严格模式下，默认绑定才能绑定到全局对象。在严格模式下调用函数则不影响默认绑定。
```js
function foo() { // 运行在严格模式下，this会绑定到undefined
    "use strict";
    
    console.log(this.a);
}
var a = 2;
// 调用
foo(); // TypeError: Cannot read property 'a' of undefined

function foo() { // 运行
    console.log( this.a );
}

var a = 2;

(function() { // 严格模式下调用函数则不影响默认绑定
    "use strict";
    
    foo(); // 2
})();
```

### 隐式绑定
当函数引用有上下文对象时，隐式绑定规则会把函数中的this绑定到这个上下文对象。对象属性引用链中只有上一层或者说最后一层在调用中起作用。
```js
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2
```

**隐式丢失** 被隐式绑定的函数特定情况下会丢失绑定对象，应用默认绑定，把this绑定到全局对象或者undefined上。
```js
// 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身。
// bar()是一个不带任何修饰的函数调用，应用默认绑定。
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo; // 函数别名
var a = "oops, global"; // a是全局对象的属性
bar(); // "oops, global"
```

参数传递就是一种隐式赋值，传入函数时也会被隐式赋值。回调函数丢失this绑定是非常常见的。
```js
function foo() {
    console.log( this.a );
}

function doFoo(fn) {
    // fn其实引用的是foo
    
    fn(); // <-- 调用位置！
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // a是全局对象的属性
doFoo( obj.foo ); // "oops, global"
```

### 显式绑定
通过call(..) 或者 apply(..)方法。第一个参数是一个对象，在调用函数时将这个对象绑定到this。因为直接指定this的绑定对象，称之为显示绑定。
::: warning
显示绑定无法解决丢失绑定问题。bind函数可以解决这个问题
:::

### new 绑定
在JS中，构造函数只是使用new操作符时被调用的普通函数，他们不属于某个类，也不会实例化一个类。
包括内置对象函数（比如Number(..)）在内的所有函数都可以用new来调用，这种函数调用被称为构造函数调用。
实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。<br>

使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。
1. 创建（或者说构造）一个新对象。
2. 这个新对象会被执行**Prototype**连接。
3. 这个新对象会绑定到函数调用的this。
4. 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。

## 闭包
闭包是指有权访问另外一个函数作用域中的变量的函数。关键在于下面两点：
- 是一个函数
- 能访问另外一个函数作用域中的变量

对于闭包有下面三个特性：
1. 闭包可以访问当前函数以外的变量
2. 即使外部函数已经返回，闭包仍能访问外部函数定义的变量
3. 闭包可以更新外部变量的值

## let 与 const

## let
1. `var`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`。为了纠正这种现象，`let`命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。  
2. 暂时性死区: 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
```js
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
3. `let`不允许在相同作用域内，重复声明同一个变量。
4. `let`实际上为 JavaScript 新增了块级作用域。

## const
1. `const`声明一个只读的常量。一旦声明，常量的值就不能改变。

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

## 节流和防抖
函数节流指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 无视后来产生的函数调用请求，也不会延长时间间隔。3 秒间隔结束后第一次遇到新的函数调用会触发执行，然后在这新的 3 秒内依旧无视后来产生的函数调用请求，以此类推。<br>
函数节流非常适用于函数被频繁调用的场景，例如：window.onresize() 事件、mousemove 事件、上传进度等情况。

实现方案有以下两种:
- 第一种是用时间戳来判断是否已到执行时间，记录上次执行的时间戳，然后每次触发事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经达到时间差（Xms） ，如果是则执行，并更新上次执行的时间戳，如此循环。
- 第二种方法是使用定时器，比如当 scroll 事件刚触发时，打印一个 hello world，然后设置个 1000ms 的定时器，此后每次触发 scroll 事件触发回调，如果已经存在定时器，则回调不执行方法，直到定时器触发，handler 被清除，然后重新设置定时器。

```js
// solution1 间隔时间
function throttle(func, time){
  let activeTime = 0;
  return () => {
    const current = Date.now();
    if(current - activeTime > time) {
      func.apply(this, arguments);
      activeTime = Date.now();
    }
  }
}

// solution2 定时器
function throttle(callback, timeout) {
  let disable; // 触发回调是否禁用
  return function () {
    const context = this; // 持有执行上下文
    const args = arguments; // 记录传参
    if (!disable) { // 首次调用或者贤者时间过了，禁用解除
      callback.apply(context, args); // 可以触发回调
      disable = true; // 马上禁用
      setTimeout(_ => disable = false, timeout); // 贤者时间过了，禁用解除
    }
  }
}

// underscore版本
const throttle = function(func, wait, options) {
  var timeout, context, args, result;
  
  // 上一次执行回调的时间戳
  var previous = 0;
  
  // 无传入参数时，初始化 options 为空对象
  if (!options) options = {};

  var later = function() {
    // 当设置 { leading: false } 时
    // 每次触发回调函数后设置 previous 为 0
    // 不然为当前时间
    previous = options.leading === false ? 0 : _.now();
    
    // 防止内存泄漏，置为 null 便于后面根据 !timeout 设置新的 timeout
    timeout = null;
    
    // 执行函数
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  // 每次触发事件回调都执行这个函数
  // 函数内判断是否执行 func
  // func 才是我们业务层代码想要执行的函数
  var throttled = function() {
    
    // 记录当前时间
    var now = _.now();
    
    // 第一次执行时（此时 previous 为 0，之后为上一次时间戳）
    // 并且设置了 { leading: false }（表示第一次回调不执行）
    // 此时设置 previous 为当前值，表示刚执行过，本次就不执行了
    if (!previous && options.leading === false) previous = now;
    
    // 距离下次触发 func 还需要等待的时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    
    // 要么是到了间隔时间了，随即触发方法（remaining <= 0）
    // 要么是没有传入 {leading: false}，且第一次触发回调，即立即触发
    // 此时 previous 为 0，wait - (now - previous) 也满足 <= 0
    // 之后便会把 previous 值迅速置为 now
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        
        // clearTimeout(timeout) 并不会把 timeout 设为 null
        // 手动设置，便于后续判断
        timeout = null;
      }
      
      // 设置 previous 为当前时间
      previous = now;
      
      // 执行 func 函数
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // 最后一次需要触发的情况
      // 如果已经存在一个定时器，则不会进入该 if 分支
      // 如果 {trailing: false}，即最后一次不需要触发了，也不会进入这个分支
      // 间隔 remaining milliseconds 后触发 later 方法
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  // 手动取消
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  // 执行 _.throttle 返回 throttled 函数
  return throttled;
};
```

防抖函数 debounce 指的是某个函数在某段时间内，无论触发了多少次回调，都只执行最后一次。假如我们设置了一个等待时间 3 秒的函数，在这 3 秒内如果遇到函数调用请求就重新计时 3 秒，直至新的 3 秒内没有函数调用请求，此时执行函数，不然就以此类推重新计时。<br>

举一个小例子：假定在做公交车时，司机需等待最后一个人进入后再关门，每次新进一个人，司机就会把计时器清零并重新开始计时，重新等待 1 分钟再关门，如果后续 1 分钟内都没有乘客上车，司机会认为乘客都上来了，将关门发车。<br>

应用：input 输入回调事件添加防抖函数后，只会在停止输入后触发一次


```js
function debounce(func, time) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(()=> {
      func.apply(this, arguments)
    }, time);
  }
}

/**
 * 进阶版本
 * @description 只要一直调用, callback 将不会被触发
 * 在一次调用结束后, 只有等待 timeout ms 时间, 才能继续调用 callback
 * immediate 决定触发时机
 * @example 
 * 1. 点击按钮发送请求（保存数据之类的）
 * 2. 搜索时自动联想
 * 3. 自动保存
 * 4. Debouncing a resize/scroll event handler
 */
function debounce(callback, timeout, immediate) {
  let timer;
  return function () {
    const context = this; // 持有执行上下文
    const args = arguments; // 记录传参
    const later = function () {
      timer = null; // 贤者时间过了，重振旗鼓，重置为初始状态
      if (!immediate) callback.apply(context, args); // 设置为尾部调用才延时触发
    }
    const callNow = immediate && !timer; // 如果确认允许首部调用，且首次调用，那么本次立即触发
    clearTimeout(timer); // 杀掉上次的计时器，重新计时
    timer = setTimeout(later, timeout); // 重启一个计时器，过了贤者时间之后才触发
    callNow && callback.apply(context, args); // 设置为首部调用立即触发
  }
}
```

## 寄生组合式继承
```js
// 通过借用构造函数来继承属性, 通过原型链来继承方法
// 不必为了指定子类型的原型而调用父类型的构造函数,我们只需要父类型的一个副本而已
// 本质上就是使用寄生式继承来继承超类型的原型, 然后再讲结果指定给子类型的原型
function object(o){ // ===Object.create()
  function F(){};
  F.prototype = o;
  return new F();
}
function c1(name) {
  this.name = name;
  this.color = ['red', 'green'];
}
c1.prototype.sayName = function () {
  console.log(this.name);
}
function c2(name, age) {
  c1.call(this, name)
  this.age = age
}
// 第一步:创建父类型原型的一个副本
// 第二步:为创建的副本添加 constructor 属性, 从而弥补因重写原型而失去的默认的 constructor 属性
// 第三步:将新创建的对象(即副本)赋值给子类型的原型
function inheritPrototype(superType, subType) {
  const prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

inheritPrototype(c1, c2);
// c2的方法必须放在寄生继承之后
c2.prototype.sayAge = function () {
  console.log(this.age);
}
```