# Javascript

## 深拷贝
```js
function cloneDeep() {
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
节流： 动作绑定事件，动作发生后一段时间后触发事件，在这段时间内，如果动作又发生，则无视该动作，直到事件执行完后，才能重新触发。
```js
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

// solution2 间隔时间反转标志位
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


```
防抖：动作绑定事件，动作发生后一定时间后触发事件，在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。
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