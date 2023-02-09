# 串行和并行

## 串行执行Promise
```js
var promises = [2, 4, 6, 3, 1].map((i) => {
  return new Promise(resolve => {
    console.log(i);
    resolve(i)
  })
})

function syncRun(promises) {
  let res = [];
  return new Promise(resolve => {
    promises.reduce((pre, next) => {
      return pre.then((data) => {
        res.push(data);
        return next;
      })
    }).then((data) => {
      res.push(data);
      resolve(res)
    })
  });
}	

syncRun(promises).then(res => {
  console.log(res);
})
```

## 并发请求
要求：任意时刻，同时下载的链接数量不可以超过 3 个。 试写出一段代码实现这个需求，要求尽可能快速地将所有接口中的数据得到。

```js
var urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2', 
  'https://jsonplaceholder.typicode.com/posts/3', 
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5', 
  'https://jsonplaceholder.typicode.com/posts/6', 
  'https://jsonplaceholder.typicode.com/posts/7', 
  'https://jsonplaceholder.typicode.com/posts/8',
  'https://jsonplaceholder.typicode.com/posts/9', 
  'https://jsonplaceholder.typicode.com/posts/10'
]

function loadDate (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      resolve(xhr.responseText)
    }
    xhr.open('GET', url)
    xhr.send()
  })
}

function limitLoad(urls, handler, limit) {
    // 对数组进行一个拷贝
    const sequence = [].concat(urls)
    let promises = [];

    //实现并发请求达到最大值
    promises = sequence.splice(0, limit).map((url, index) => {
        // 这里返回的 index 是任务在数组 promises 的脚标
        //用于在 Promise.race 后找到完成的任务脚标
        return handler(url).then(() => {
            return index
        }); 
    });

    // 利用数组的 reduce 方法来以队列的形式执行
    return sequence.reduce((last, url, currentIndex) => {
        return last.then(() => {
            // 返回最快改变状态的 Promise
            return Promise.race(promises)
        }).catch(err => {
            // 这里的 catch 不仅用来捕获前面 then 方法抛出的错误
            // 更重要的是防止中断整个链式调用
            console.error(err)
        }).then((res) => {
            // 用新的 Promise 替换掉最快改变状态的 Promise
            promises[res] = handler(sequence[currentIndex]).then(() => { return res });
        })
    }, Promise.resolve()).then(() => {
        return Promise.all(promises)
    })

}

limitLoad(urls, loadDate, 3).then(() => {
    console.log('所有url数据请求成功');
}).catch(err => {
    console.error(err);
})
```

另一种更好的实现方式：
```js
class RequestLimit {
  constructor (limit) {
    this.limit = Number(limit) || 2; // {1}
    this.blockQueue = [];
    this.currentReqNumber = 0;
  }

  /**
   * 请求
   * @param {*} req 
   */
  async request(req) { // {2}
    if (!req) {
      throw new Error('req is required.');
    }
    if (Object.prototype.toString.call(req) !== '[object Function]') {
      throw new Error('Req must be a function.');
    }
    if (this.currentReqNumber >= this.limit) { // {3}
      await new Promise(resolve => this.blockQueue.push(resolve)); // 阻塞队列增加一个 Pending 状态的 Promise
    } 

    return this._handlerReq(req); // {4}
  }

  /**
   * 内部方法处理请求
   * @param {*} req 
   */
  async _handlerReq(req) {
    this.currentReqNumber++; // {5}
    try {
      return await req();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.currentReqNumber--;
      if (this.blockQueue.length) { // 每完成一个就从阻塞队列里剔除一个
        this.blockQueue[0](); // 将最先进入阻塞队列的 Promise 从 Pending 变为 Fulfilled
        this.blockQueue.shift();
      }
    }
  }
}

const requestLimit = new RequestLimit(2);
(async () => {
  for (let i=0; i<8; i++) {
    requestLimit.request(() => fetch("http://xxx"));
  }
})()
```

方法3:
```js
const pLimit = (concurrency) => {
    if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
      throw new TypeError('Expected `concurrency` to be a number from 1 and up');
    }
  
    const queue = [];
    let activeCount = 0;
  
    const next = () => {
      activeCount--;
  
      if (queue.length > 0) {
        queue.shift()();
      }
    };
  
    const run = async (fn, resolve, ...args) => {
      activeCount++;
  
      const result = (async () => fn(...args))();

      resolve(result);
  
      try {
        await result;
      } catch {}

      next();
    };
  
    const enqueue = (fn, resolve, ...args) => {
      queue.push(run.bind(null, fn, resolve, ...args));
  
      (async () => {
        // 等待所有微任务完成
        await Promise.resolve();
  
        if (activeCount < concurrency && queue.length > 0) {
          queue.shift()();
        }
      })();
    };
  
    const generator = (fn, ...args) =>
      new Promise((resolve) => {
        enqueue(fn, resolve, ...args);
      });
  
    Object.defineProperties(generator, {
      activeCount: {
        get: () => activeCount
      },
      pendingCount: {
        get: () => queue.length
      },
      clearQueue: {
        value: () => {
          queue.length = 0;
        }
      }
    });
  
    return generator;
  };
  
const limit = pLimit(2);
  
function asyncFun(value, delay) {
    return new Promise((resolve) => {
        console.log('start ' + value);
        setTimeout(() => resolve(value), delay);
    });
}

(async function () {
    const arr = [
        limit(() => asyncFun('aaa', 2000)),
        limit(() => asyncFun('bbb', 3000)),
        limit(() => asyncFun('ccc', 1000)),
        limit(() => asyncFun('ccc', 1000)),
        limit(() => asyncFun('ccc', 1000))
    ];
  
    const result = await Promise.all(arr);
    console.log(result);
})();
```

