# 跨页面通信技术

## 1. url
通过 url 中携带 query 参数，在 B 页面初始化时获取参数。

优势：浏览器支持效果好、持久化、无需配置。

劣势：语义不明的内部状态暴露在url中不合理 ，同时数据较多时导致url臃肿；仅可用于 A 页面打开新页面 B 的场景，消息传递是单向的。


## 2. cookie
可以将数据保存在 document.cookie 中，通过轮询检查 cookie 是否变化，同样的也可以用 IndexedDB 来这么干，不过 IndexedDB 的API 相对比较复杂。

优势：浏览器支持效果好、无需配置

劣势：cookie 本身是为管理请求状态设计，不应该在每次请求里加一些不相干的参数；如果服务端设置了 httpOnly，则无法在浏览器里修改 cookie。


## 3. window.opener
当我们系统中通过 window.open 打开一个新页面时，window.open 方法会返回一个被打开页面的引用，而被打开页面则可以通过 window.opener 获取到打开它的页面的引用。

优势：点对点通信，跨域的场景下可以使用。

劣势：使用面小，高度依赖 window.open。比如：通过a标签打开B页面，无法使用。

```html
<div id="app">
  <button id="open">window.open</button>
  <a href="/example/Opener.html" target="_blank">a标签打开</a>
  <a href="/example/Opener.html" target="_blank" rel="noreferrer noopener">a标签打开 with noopener</a>
</div>
<script>
  const windowOpens = [];
  window.onload = function() {
    if (window.opener) {
      window.opener.postMessage('syn');
    }
  };
 
  document.getElementById('open').onclick = function () {
    windowOpens.push(window.open('/example/Opener.html'));
  }
 
  window.addEventListener('message', function (e) {
    console.log(e.data);
    windowOpens.forEach((win) => win.postMessage('ack'));
  });
</script>
```


## 4. window.onstorage
如果浏览器同时打开一个域名下面的多个页面，当其中的一个页面通过 localStorage 改变数据时，其他所有页面的 storage 事件会被触发，而原始页面并不触发 storage 事件。localStorage 的原理很简单，浏览器为每个域名划出一块本地存储空间，用户网页可以通过 localStorage 命名空间进行读写。注意 sessionStorage 不能触发 storage 事件，因为多个页面可能不会复用相同的 sessionStorage。

优势：浏览器支持效果好、API直观，onstorage的设定，就像是为了页面间通信做的。

劣势：部分浏览器隐身模式下，无法设置 localStorage，如safari，这样也就导致 onstrage 事件无法使用。

```html
<div id="app">
  <button id="tab">新开 Tab</button>
  <button id="update">触发 LocalStorage 更新</button>
</div>
<script>
  window.onstorage = function(e) {
    console.log(`key: ${e.key}, oldValue: ${e.oldValue}, newValue: ${e.newValue}.`);
  };
 
  document.getElementById('tab').onclick = function () {
    window.open('/example/storage.html');
  }
 
  document.getElementById('update').onclick = function () {
    localStorage.setItem('storage', Date.now());
  }
</script>
```


## 5. Broadcast Channel
Broadcast Channel 可以实现同源下浏览器不同窗口，Tab 页，frame 或者 iframe 下的浏览器上下文 (通常是同一个网站下不同的页面) 之间的简单通讯。它的出现，是为了解决 postMessage 只能点对点通信的问题，广播形式能够在同源的页面下进行一对多的通信。

优势：同源页面一对多的通信。

劣势：IE 浏览器不支持。

```html
<div id="app">
  <button id="open">新开 Tab</button>
  <button id="send">发送消息</button>
  <button id="close">关闭 Broadcast Channel</button>
</div>
<script>
const broadcastChannel = new BroadcastChannel('channelName');
 
broadcastChannel.onmessage = function(e) {
    console.log('监听消息:', e.data);
};
 
document.getElementById('open').onclick = function () {
  window.open('/example/broadcast.html');
}
 
document.getElementById('send').onclick = function () {
  broadcastChannel.postMessage('hello');
}
 
document.getElementById('close').onclick = function () {
  broadcastChannel.close();
}
</script>
```


## 6. Websocket
WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。相比传统的 HTTP 请求/响应模式，WebSocket 能够提供更低的延迟、更高的效率和更可靠的数据传输。在 WebSocket 协议中，客户端和服务器之间会建立一个持久连接，双方可以随时通过该连接进行数据交换，而无需每次都建立新的连接，适用于实时通信、在线游戏、视频流等需要高速、低延迟数据传输的场景。

优势：支持全双工通信，双方可以同时发送和接收数据；支持二进制数据和文本数据的传输。

劣势：需要借助服务端进行通信。

服务端：
```js
const WebSocket = require('ws');
 
// 创建 WebSocket 服务器，监听 8080 端口
const wss = new WebSocket.Server({ port: 8080 });
 
// 用于保存所有连接的客户端
const clients = new Set();
 
// 监听客户端连接事件
wss.on('connection', (ws) => {
  console.log('Client connected');
 
  // 将客户端添加到 Set 中
  clients.add(ws);
 
  // 监听客户端发送的消息事件
  ws.on('message', (data) => {
    const message = data.toString('utf-8');
    console.log(`Received message: ${message}`);
 
    // 将消息广播给所有连接的客户端
    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    }
  });
 
  // 监听客户端断开连接事件
  ws.on('close', () => {
    console.log('Client disconnected');
 
    // 将客户端从 Set 中移除
    clients.delete(ws);
  });
});
```

客户端：
```js
<div id="app">
  <button id="open">新开 Tab</button>
  <button id="send">发送消息</button>
<div>
<script>
  // 创建 WebSocket 对象
  const socket = new WebSocket('ws://127.0.0.1:8080', 'utf-8');
 
  // 监听连接成功事件
  socket.addEventListener('open', event => {
    console.log('Connected to server');
  });
 
  // 监听收到消息事件
  socket.addEventListener('message', event => {
    console.log('Receive Message: ', event.data);
  });
 
  // 监听连接关闭事件
  socket.addEventListener('close', () => {
    console.log('Disconnected from server');
  });
 
  // 监听连接错误事件
  socket.addEventListener('error', () => {
    console.error('Error connecting to server');
  });
 
  // 发送消息
  document.getElementById('send').onclick = function () {
    if (socket.readyState === 1) {
      socket.send('hello');
    }
  }
 
  document.getElementById('open').onclick = function () {
    window.open('/example/ws.html');
  }
</script>
```


## 7. SharedWorker
普通的 worker 一般作为无状态的异步纯函数，用于做计算使用，两个页面实例化同一个路径的 worker 时，worker 中的数据是独立的。而 SharedWorker 接口代表一种特定类型的 worker，可以从几个同源的浏览器上下文中访问，例如几个窗口、iframe 或其他 worker，当SharedWorker被多个页面实例化时，数据是共享的，因此可以用作页面间的通信。SharedWorker 的生命周期很简单，不像 Service Worker有那么多的过程，它只有一条规则，就是当所有创建 SharedWorker 的页面关闭之后，那么 SharedWorker 的生命就走到了尽头。SharedWorker 中的 log 在 console 中看不到，需要打开 chrome://inspect/#workers 查看。

优势：支持页面间的数据状态管理，可以一对多通信。

劣势：兼容性问题，IE 浏览器不支持。

sharedworker.js:
```js
let connections = [];
 
this.addEventListener('connect', event => {
  const port = event.ports[0];
  connections.push(port);
 
  port.addEventListener('message', event => {
    const message = event.data;
    console.log('Worker received message:', message);
 
    // 发送消息到所有连接的客户端
    connections.forEach(connection => {
      if (connection !== event.target) {
        connection.postMessage(`Echo: ${message}`);
      }
    });
  });
 
  port.start();
});
```

客户端：
```html
<div id="app">
  <button id="open">新开 Tab</button>
  <button id="send">发送消息</button>
<div>
<script>
  const worker = new SharedWorker('sharedworker.js');
 
  // 接收消息   
  worker.port.addEventListener('message', event => {
    console.log('Client received message:', event.data);
  });
 
  worker.port.start();
 
  document.getElementById('open').onclick = function () {
    window.open('/example/sharedworker.html');
  }
 
  // 在页面A中将信息传递给页面B
  document.getElementById('send').onclick = function () {
    // 发送消息到共享的 Worker 线程
    worker.port.postMessage('Hello, from Client!');
  }
</script>
```


## 8. Service Worker
Service Worker 充当 Web 应用程序、浏览器与网络之间的代理服务器，它可以拦截网络请求并根据网络是否可用来采取适当的动作、更新来自服务器的的资源。它运行在单独的线程中，不可以操作 DOM，可以通过 postMessage 与页面进行双向通信，可以为页面提供离线体验能力。Service Worker 被设计为完全异步，因此，同步 XHR 和 Web Storage 不能在 Service Worker 中使用，如果需要管理全局数据可以搭配 IndexedDB 使用。

优势：支持离线，可以一对多通信。

劣势：兼容性问题，IE 浏览器不支持；某些浏览器(Firefox)隐身模式下不可用；只可以用于https域名下（本地也可以）。

serviceworker.js:
```js
// 监听页面发过来的消息
this.addEventListener('message', function(event) {
  console.log('[SW] Receive:', event.data);
 
  this.clients.matchAll().then(function(clients) {
    clients.forEach(function(client) {
      // 向其它页面发送消息
      if(!client.focused) {
        client.postMessage(event.data);
      }
    });
  });
});
```

客户端：
```html
<div id="app">
  <button id="open">新开 Tab</button>
  <button id="send">发送消息</button>
<div>
<script>
  // 注册 worker
  navigator.serviceWorker.register('./sw.js',)
    .then((registration) => {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          if (registration.active) {
            clearInterval(interval);
            resolve(registration.active);
          }
        });
      }, 100);
    })
    .then(sw => {
      sw.postMessage({ type: 'load' });
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
 
  // 监听消息
  navigator.serviceWorker.addEventListener('message', (e) => {
    console.log('[Page] Receive: ', e.data);
  });
 
  // 发送消息
  document.getElementById('send').onclick = () => {
    navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({ type: 'ping' });
  };
 
  document.getElementById('open').onclick =  () => {
    window.open('/example/sw.html');
  }
</script>
```
