# 事件订阅
观察者模式（observer）广泛的应用于javascript语言中，浏览器事件（如鼠标单击click，键盘事件keyDown）都是该模式的例子。设计这种模式背后的主要原因是促进形成低耦合，在这种模式中不是简单的对象调用对象，而是一个对象“订阅”另一个对象的某个活动，当对象的活动状态发生了改变，就去通知订阅者，而订阅者也称为观察者。

```js
function EventEmitter() {
    //私有属性，保存订阅方法
    this._events = {};
}

//默认最大监听数
EventEmitter.defaultMaxListeners = 10;

EventEmitter.prototype.on = function (type, listener, flag) {
		//保证存在实例属性
    if (!this._events) this._events = Object.create(null);

    if (this._events[type]) {
        if (flag) {//从头部插入
            this._events[type].unshift(listener);
        } else {
            this._events[type].push(listener);
        }

    } else {
        this._events[type] = [listener];
    }
		//绑定事件，触发newListener
    if (type !== 'newListener') {
        this.emit('newListener', type);
    }
};

EventEmitter.prototype.emit = function (type, ...args) {
    if (this._events[type]) {
        this._events[type].forEach(fn => fn.call(this, ...args));
    }
};

EventEmitter.prototype.once = function (type, listener) {
    let _this = this;

    //中间函数，在调用完之后立即删除订阅
    function only() {
        listener();
        _this.off(type, only);
    }
    //origin保存原回调的引用，用于remove时的判断
    only.origin = listener;
    this.on(type, only);
};

EventEmitter.prototype.off = function (type, listener) {
    if (this._events[type]) {
        //过滤掉退订的方法，从数组中移除
        this._events[type] = this._events[type].filter(fn => {
            return fn !== listener && fn.origin !== listener
        });
    }
};
```