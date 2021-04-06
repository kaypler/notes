# 浏览器性能优化

## 浏览器多进程模型
![An image](./images/browse-1.png)

- **浏览器进程**：负责界面显示、用户交互、子进程管理，提供存储等。
- **渲染进程**：每个页卡都有单独的渲染进程，核心用于渲染页面。
- **网络进程**：主要处理网络资源加载（html、css、js等）
- **GPU进程**：3d绘制，提高性能
- **插件进程**：chrome中安装的一些插件

## url请求过程

1. 用户输入url地址，浏览器开始导航
2. 浏览器会准备一个渲染进程用于渲染页面
3. 网络进程加载资源，最终将加载的资源交给渲染进程来处理
4. 渲染完毕显示，进程使用ipc进行通信

- 先去查找缓存，检测缓存是否过期，不过期直接返回缓存内容
- 看域名是否被解析过，NDS协议将域名解析成ip地址(DNS基于UDP)
- 请求是HTTPS，要经过SSL协商
- ip地址来进行寻址，排队等待，最多能发送6个http请求
- tcp创建连接，用于传输（三次握手）
- 利用tcp传输数据(拆分成数据包，可靠有序)，服务器会按照顺序来接受
- http请求 (请求行、请求头、请求体)
- 默认不会断开keep-alive，为了下次传输数据时，可以复用上次的创建的连接
- 服务器收到数据后（响应行、响应头、响应体）
- 服务器返回301、302会进行重定向操作
- 服务器返回304去查询浏览器缓存进行返回

## 渲染流程
![An image](./images/browse-2.png)
1. 浏览器无法直接使用HTML，需要将HTML转化成DOM树。（document）
2. 浏览器无法解析纯文本的css样式，需要对css进行解析，解析成stylesheets。（document.styleSheets）
3. 计算出DOM树中每个节点的具体样式（Attachment）
4. 创建渲染（布局）树，将DOM树中可见节点，添加到布局树中。并计算节点渲染到页面的坐标位置。（layout）
5. 通过布局树，进行分层（根据定位属性、透明属性、transform属性、clip属性等）生成图层树
6. 将不同图层进行绘制，转交给合成线程处理。最终生产页面，并显示到浏览器上（Painting Display）

::: details
**重排(回流) Reflow**：添加元素、删除元素、修改大小、移动元素位置、获取位置相关信息
**重绘 Repaint**：页面中元素样式的改变并不影响它在文档流中的位置
:::

## RAIL模型分析性能
- **Response**: 事件处理最好在50ms内完成
- **Animation**: 在10ms内产生一帧
- **Idle**: 最大化空闲时间
- **Load**: 传输内容到页面可交互的时间不超过5秒

## 性能指标
![An image](./images/browse-3.png)

### TTFB
time to first byte，翻译为首字节时间，是指从请求到数据返回第一个字节所消耗的时间。

**统计逻辑**
```js
function getTTFB() {
  const {
    requestStart,
    responseStart
  } = performance.timing;

  return responseStart - requestStart;
}
```

### FP
FP，全称 First Paint，翻译为首次绘制,是时间线上的第一个时间点，它代表网页的第一个像素渲染到屏幕上所用时间，也就是页面在屏幕上首次发生视觉变化的时间。

**统计逻辑**
```JS
function getFPTime(){
    const timings = performance.getEntriesByType('paint')[0];
    return timings ? Math.round(timings.startTime) : null
}
```

### FCP
FCP，全称 First Contentful Paint，翻译为首次内容绘制，顾名思义，它代表浏览器第一次向屏幕绘内容。

注意：只有首次绘制文本、图片（包含背景图）、非白色的canvas或SVG时才被算作FCP。

**统计逻辑**
通过performance.getEntriesByType('paint’)，取第二个pain的时间，或者通过Mutation Observer观察到首次节点变动的时间。如：
```JS
const domEntries = []
const observer = new MutationObserver((mutationsList)=>{
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
        }
        if (mutation.type == 'addedNodes') {
            //TODO新增了节点，做处理，计算此时的可见性/位置/出现时间等信息，然后 push 进数组
            ...
            domEntries.push(mutation)
        }
    }
});

function getFPTime(){
    const timings = performance.getEntriesByType('paint');
    if(timings.length > 1)return timings[1]
    return timings ? Math.round(timings.startTime) : null
    //伪代码,算 DOM 变化时的最小那个时间，即节点首次变动的时间
    return Math.round(domEntries.length ? Math.min(...domEntries.map(entry => entry.time)) : 0);
}
```

::: warning FP与FCP区别
FP是当浏览器开始绘制内容到屏幕上的时候，只要在视觉上开始发生变化，无论是什么内容触发的视觉变化，在这一刻，这个时间点，叫做FP。
相比之下，FCP指的是浏览器首次绘制来自DOM的内容。例如：文本，图片，SVG，canvas元素等，这个时间点叫FCP。
FP和FCP可能是相同的时间，也可能是先FP后FCP。
:::

### FMP
FMP，全称 First Meaningful Paint，翻译为首次有意义的绘制，是页面主要内容出现在屏幕上的时间, 这是用户感知加载体验的主要指标。
目前尚无标准化的定义, 因为很难以通用的方式去确定各种类型页面的关键内容。

**统计逻辑**
```js
new PerformanceObserver((entryList, observer) => {
  entryList.getEntries()[0];

  observer.disconnect();
}).observe({entryTypes: ['element']})
```

## LCP
Largest Contentful Paint，翻译为最大内容渲染，在viewport中最大的页面元素加载的时间。

**统计逻辑**
```js
new PerformanceObserver((entryList, observer) => {
  const entries = entryList.getEntries();
  console.log(entries[entries.length-1]);

  observer.disconnect();
}).observe({entryTypes: ['largest-contentful-paint']})
```

### FID
FID，全称 First Input Delay，翻译为首次输入延迟，是测量用户首次与您的站点交互时的时间
（即当他们单击链接/点击按钮/使用自定义的JavaScript驱动控件时）到浏览器实际能够回应这种互动的时间。

**统计逻辑**
- 方式一，通过`performanceObserver`(目前支持性为88.78%)观察类型为`first-input`的entry，获得其startTime/duration等数即可
- 方式二，初始化时为特定事件类型(click/touch/keydown)绑定通用统计逻辑事件,开始调用时从event.timeStamp取开始处理的时间
- (这个时间就是首次输入延迟时间)，在事件处理中注册requestIdleCallback事件回调onIdleCallback，当onIdleCallback被执行时，当前时间减开始的event.timeStamp即为duration时间

```js
// 方式一
function getFIDTime(){
    const timings = performance.getEntriesByType('first-input')[0];
    return timings ? timings : null
}

// 或者
new PerformanceObserver((entryList, observer) => {
  const firstInput = entryList.getEntries()[0];
  if (!firstInput) return;

  console.log(firstInput.processingStart - firstInput.startTime);

  observer.disconnect();
}).observe({type: ['first-input'], buffered: true});
// 方式二，以下代码仅代表思路

['click','touch','keydown'].forEach(eventType => {
    window.addEventListener(eventType, eventHandle);
});

function eventHandle(e) {
    const eventTime = e.timeStamp;
    window.requestIdleCallback(onIdleCallback.bind(this, eventTime, e));
}

function onIdleCallback(eventTime, e) {
    const now = window.performance.now();
    const duration = now - eventTime;

    return {
        duration: Math.round(duration),
        timestamp: Math.round(eventTime)
    }

    ['click','touch','keydown'].forEach(eventType => {
        window.removeEventListener(eventType, eventHandle);
    });
}
```

### TTI
TTI，全称 Time To Interactive，翻译为可交互时间，指的是应用在视觉上都已渲染出了，完全可以响应用户的输入了。
是衡量应用加载所需时间并能够快速响应用户交互的指标。

**统计逻辑**
与 FMP 相同，很难规范化适用于所有网页的 TTI 指标定义。

统计方式一：谷歌实验室写的npm包，tti-polyfill
```js
import ttiPolyfill from 'tti-polyfill';

ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
  ga('send', 'event', {
    eventCategory:'Performance Metrics',
    eventAction:'TTI',
    eventValue: tti,
    nonInteraction: true,
  });
});

// 或者
function getTTI() {
  const {
    fetchStart,
    domInteractive
  } = performance.timing;

  return domInteractive - fetchStart;
}
```

统计方式二：在页面加载的一定时间内(如前50s内)，以(domContentLoadedEventStart-navigationStart)+5为起始点，循环寻找，
找到一个5s的窗口，其中网络请求不超过2个且没有长任务（>50ms），再找到该5秒窗口之前的最后一个长任务，该长任务结束的时间点就是可稳定交互时间。
其中长任务可自定义时间或通performance.getEntriesByType('long-task')获取。
```js
// 以下代码仅代表思路
const basicTime = 5000;

function getTTITime(startTime,longTaskEntries, resourceEntries,domContentLoadedTime) {

  let busyNetworkInWindow = [];
  let tti = startTime;

  while (startTime + basicTime <= 50000) { //从前50s 中去找
    tti = startTime;
    longTasksInWindow = longTaskEntries.filter(task => {
      return task.startTime < startTime + basicTime && task.startTime + task.duration > startTime;
    });
    if (longTasksInWindow.length) {
      const lastLongTask = longTasksInWindow[longTasksInWindow.length - 1];
      startTime = lastLongTask.startTime + lastLongTask.duration;
      continue;
    }
    busyNetworkInWindow = resourceEntries.filter(request => {
      return !(request.startTime >= startTime + basicTime || request.startTime + request.duration <= startTime);
    });
    if (busyNetworkInWindow.length > 2) {
      const firstRequest = busyNetworkInWindow[0];
      startTime = firstRequest.startTime + firstRequest.duration;
      continue;
    }
    return Math.max(tti, domContentLoadedTime);
  }
  return Math.max(tti, domContentLoadedTime);
}
```

### FCI
FCI，全称 First CPU Idle，翻译为首次CPU空闲时间代表着一个网页已经满足了最小程度的与用户发生交互行为的时刻。
当我们打开一个网页，我们并不需要等到一个网页完全加载好了，每一个元素都已经完成了渲染，然后再去与网页进行交互行为。
网页满足了我们基本的交互的时间点是衡量网页性能的一个重要指标。

**统计逻辑**
FCI为在FMP之后，首次在一定窗口时间内没有长任务发生的那一时刻，并且如果这个时间点早于`DOMContentLoaded`时间，
那么FCI的时间为`DOMContentLoaded`时间，窗口时间的计算函数可以根据`Lighthouse`提供的计算公式 `N = f(t) = 4 * e^(-0.045 * t) + 1` 进行自定义设计

### FPS
FPS，全称 Frames Per Second，翻译为每秒帧率，表示的是每秒钟画面更新次数，当今大多数设备的屏幕刷新率都是60次/秒。

**统计逻辑**
```js
var lastTime = performance.now();
var frame = 0;
var lastFameTime = performance.now();
var loop = function(time) {
    var now =  performance.now();
    var fs = (now - lastFameTime);
    lastFameTime = now;
    var fps = Math.round(1000/fs);
    frame++;
    if (now > 1000 + lastTime) {
        var fps = Math.round( ( frame * 1000 ) / ( now - lastTime ) );
        frame = 0;    
        lastTime = now;    
    };           
    window.requestAnimationFrame(loop);   
}
```

## 优化方案

### 网络优化策略
- 减少HTTP请求数，合并JS、CSS，合理内嵌CSS、JS
- 合理设置服务器缓存，提高服务器处理速度。（强制缓存、协商缓存）
- 避免重定向，重定向会降低响应速度（301， 302）
- 使用`dns-prefetch`，进行DNS预解析
- 采用域名分片技术，将资源放到不同域名下，解决同一个域名最多处理6个TCP链接问题。
- 采用CDN加速加快访问速度。（指派最近、高度可用）
- gzip压缩优化，对传输资源进行体积压缩。（html, js, css）
- 加载数据优先级：preload(预先请求当前页面需要的资源)，prefetch(将来页面中使用的资源)，将数据缓存到HTTP缓存中。

### 减少回流和重绘
- 脱离文档流
- 渲染时给图片更加固定宽高
- 尽量使用css3动画
- 可以使用will-change提取到单独的图层中

### 图片优化
- 避免空src的图片
- 减小图片尺寸，节约用户流量
- img标签设置alt属性，提升图片加载失败时的用户体验
- 原生的`loading=“lazy“`图片懒加载
- 不同环境下，加载不同尺寸和像素的图片 （srcset）
- 对于较大的图片可以采用渐进式图片
- 采用base64URL减少图片请求
- 采用雪碧图合并图标图片等

### HTML优化
1. 语义化HTML，代码简洁清晰，利于搜索引擎，便于团队开发
2. 提前声明字符编码，让浏览器快速确定如何渲染网页内容
3. 减少HTML嵌套关系，减少DOM节点数量
4. 删除多余空格、空行、注释及无用的属性
5. HTML减少iframe使用（iframe会阻塞onload事件可以动态加载iframe）
6. 避免使用table布局

### CSS优化
1. 减少伪类选择器、减少样式层数、减少使用通配符
2. 避免使用CSS表达式，CSS表达式会频繁求值，当滚动页面或者移动鼠标时都会重新计算（IE6，7）
3. 删除空行、注释、减少无意义的单位、CSS压缩
4. 使用外链CSS，可以对CSS进行缓存
5. 添加媒体字段，只加载有效的CSS文件
6. CSS contain属性将元素进行隔离
7. 减少@import使用，由于@import采用的是串行加载

### JS优化
1. 通过async、defer异步加载文件
2. 减少DOM操作，缓存访问过的元素
3. 操作不直接应用到DOM上，而应用到虚拟DOM上。最后一次性的应用DOM上。
4. 使用webworker解决程序阻塞问题
5. IntersectionObserver实现图片懒加载
6. 虚拟滚动 vertual-scroll-list
7. requestWindowFrame、requestIdleCallback
8. 尽量避免使用eval，消耗时间久
9. 使用事件委托，减少事件绑定个数
10. 尽量使用canvas动画、css3动画
11. pwa
