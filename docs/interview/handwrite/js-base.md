# javascript底层函数实现

## new
```js
function create() {
	// 创建一个空的对象
  var obj = new Object(),
	// 获得构造函数，arguments中去除第一个参数
  Con = [].shift.call(arguments);
	// 链接到原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Con.prototype;
	// 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  var ret = Con.apply(obj, arguments);
	// 优先返回构造函数返回的对象
	return ret instanceof Object ? ret : obj;
};
```

## instanceof
```js
function new_instance_of(leftVaule, rightVaule) { 
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
      return false;	
    }
    if (leftVaule === rightProto) {
      return true;	
    } 
    leftVaule = leftVaule.__proto__ 
  }
}
```

## apply
```js
Function.prototype.apply = function(thisArg, args) {
  if (typeof this !== 'function') { 
    throw new TypeError('Error')
  }
  thisArg = thisArg || window
  thisArg.fn = this
  let result
  if(args) {
    result = thisArg.fn(...args)
  } else {
    result = thisArg.fn()
  }
  delete thisArg.fn
  return result
}  
```

## call
```js
Function.prototype.call = function(thisArg, args) {
  // this指向调用call的对象
  if (typeof this !== 'function') { // 调用call的若不是函数则报错
    throw new TypeError('Error')
  }
  thisArg = thisArg || window
  thisArg.fn = this   // 将调用call函数的对象添加到thisArg的属性中
  const result = thisArg.fn(...[...arguments].slice(1)) // 执行该属性
  delete thisArg.fn   // 删除该属性
  return result
}
```

## bind
bind的实现原理比call和apply要复杂一些，bind中需要考虑一些复杂的边界条件。bind后的函数会返回一个函数，而这个函数也可能被用来实例化:
```js
Function.prototype.bind = function(thisArg) {
    if(typeof this !== 'function'){
        throw new TypeError(this + 'must be a function');
    }
    // 存储函数本身
    const _this  = this;
    // 去除thisArg的其他参数 转成数组
    const args = [...arguments].slice(1)
    // 返回一个函数
    const bound = function() {
        // 可能返回了一个构造函数，我们可以 new F()，所以需要判断
        if (this instanceof bound) {
            return new _this(...args, ...arguments)
        }
        // apply修改this指向，把两个函数的参数合并传给thisArg函数，并执行thisArg函数，返回执行结果
        return _this.apply(thisArg, args.concat(...arguments))
    }
    return bound
}
```
