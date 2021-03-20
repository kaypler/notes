# 设计模式

## 单例模式
[详细](https://segmentfault.com/a/1190000019532633)适用场景：
1. 引用第三方库（多次引用只会使用一个库引用，如 jQuery）
2. 弹窗（登录框，信息提升框）
3. 全局态管理 store (Vuex / Redux)

```js
// 简单版本
let Singleton = function(name) {
    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function() {
    console.log(this.name);
}

Singleton.getInstance = function(name) {
    if (this.instance) {
        return this.instance;
    }
    return this.instance = new Singleton(name);
}

let Winner = Singleton.getInstance('Winner');
let Looser = Singleton.getInstance('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'

// 惰性单例
let getSingleton = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments)); // 确定this上下文并传递参数
    }
}
let createAlertMessage = function(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
}

let createSingleAlertMessage = getSingleton(createAlertMessage);
document.body.addEventListener('click', function(){
    // 多次点击只会产生一个弹窗
    let alertMessage = createSingleAlertMessage('您的知识需要付费充值！');
    alertMessage.style.display = 'block';
})
```

## 工厂模式
[详细](https://segmentfault.com/a/1190000012422198)工厂模式的目的是为了创建对象，它通常在类或者类的静态方法中实现，具有以下目标：
- 当创建相似对象时执行重复操作
- 当编译时不知道具体类型的情况下，为工厂客户提供一个创建对象的接口

```js
function CarMaker() {}

CarMaker.prototype.drive = function() {
  return `I have ${this.doors} doors!`
}

CarMaker.factory = function(type) {
  const constr = type
  if (typeof CarMaker[constr] !== 'function') {
    throw new Error(`${constr} doesnot exist`)
  }
  // 原型继承的方式使得原型继承父类
  if (typeof CarMaker[constr].prototype.drive !== 'function') {
    CarMaker[constr].prototype = new CarMaker()
  }
  return new CarMaker[constr]()
}

CarMaker.Compact = function() { this.doors = 4}
CarMaker.Convertible = function() { this.doors = 2}

const corolla = CarMaker.factory('Compact')
corolla.drive()    // "I have 4 doors!"
```

## 发布订阅模式
```js
class Observer {
  constructor() {
    this.events={}//事件中心
  }
  publish(eventName,...args) {//发布=>调用事件中心中对应的函数
    if (this.events[eventName])
    this.events[eventName].forEach(cb=>cb.apply(this,args))
  }
  subscribe(eventName,callback) {//订阅=>向事件中心中添加事件
    if (this.events[eventName]) {
    this.events[eventName].push(callback)
    } else {
    this.events[eventName]=[callback]
    }
  }
  unSubscribe(eventName,callback) {//取消订阅
    if (events[eventName])
    events[eventName]=events[eventName].filter(cb=>cb!==callback)
  }
}
```