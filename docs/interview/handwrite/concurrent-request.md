# 并发请求
要求：任意时刻，同时下载的链接数量不可以超过 3 个。 试写出一段代码实现这个需求，要求尽可能快速地将所有接口中的数据得到。

```js
var urls = [
  'http://jsonplaceholder.typicode.com/posts/1',
  'http://jsonplaceholder.typicode.com/posts/2', 
  'http://jsonplaceholder.typicode.com/posts/3', 
  'http://jsonplaceholder.typicode.com/posts/4',
  'http://jsonplaceholder.typicode.com/posts/5', 
  'http://jsonplaceholder.typicode.com/posts/6', 
  'http://jsonplaceholder.typicode.com/posts/7', 
  'http://jsonplaceholder.typicode.com/posts/8',
  'http://jsonplaceholder.typicode.com/posts/9', 
  'http://jsonplaceholder.typicode.com/posts/10'
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
            promises[res] = handler(sequence[currentIndex]).then(
                () => { return res });
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