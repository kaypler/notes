# apply,call,bind 实现
call, apply, bind都是改变函数执行的上下文，说的直白点就是改变了函数this的指向。
不同的是：call和apply改变了函数的this,并且执行了该函数，而bind是改变了函数的this，并返回一个函数，但不执行该函数。

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

# bind
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
