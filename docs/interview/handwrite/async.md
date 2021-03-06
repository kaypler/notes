# Async函数实现
async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。
```js
// 实现
function spawn(genF) {
  return new Promise(function(resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(function(v) {
        step(function() { return gen.next(v) });
      }, function(e) {
        step(function() { return gen.throw(e) });
      })
    }
    step(function() { return gen.next(undefined) });
  })
}

// demo
function example() {
  return spawn(function *() {
    const r1 = yield new Promise(resolve => {
      setTimeout(resolve, 500, 'slowest');
    })
    const r2 = yield new Promise(resolve => {
      setTimeout(resolve, 200, 'slow');
    })
    return [r1, r2]
  })
}
example().then(console.log); // ['slowest', 'slowest']

// async
async function example() {
  const r1 = await new Promise(resolve => {
    setTimeout(resolve, 500, 'slowest');
  })
  const r2 = await new Promise(resolve => {
    setTimeout(resolve, 200, 'slow');
  })
  return [r1, r2]
}
example().then(console.log); // ['slowest', 'slowest']
```