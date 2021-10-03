# 浏览器

## DOM
文档对象模型（Document Object Model，**DOM**）是表示和操作HTML和XML文档内容的基础API。
当网页被加载时，浏览器会根据DOM模型，将结构化文档（比如HTML和XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。

节点有7种类型：
- **Document**：整个文档树的顶层节点，nodeType = 9
- **DocumentType**：doctype标签（比如\<!DOCTYPE html>）  
- **Element**：网页的各种HTML标签（比如\<body>、\<a>等），nodeType = 1
- **Attribute**：网页元素的属性（比如class="right"）  
- **Text**：标签之间或标签包含的文本，nodeType = 3
- **Comment**：HTML或XML的注释，nodeType = 8
- **DocumentFragment**：文档的片段，nodeType = 11

## Shadow DOM
可以将Shadow DOM视为“DOM中的DOM”。它是自己独立的DOM树，具有自己的元素和样式，与原始DOM完全隔离。


## async 与 defer
当浏览器碰到 script 脚本的时候：
1. `<script src="script.js"></script>` <br>
没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

2. `<script async src="script.js"></script>` <br>
有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

3. `<script defer src="myscript.js"></script>` <br>
有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

从实用角度来说呢，首先把所有脚本都丢到 `</body>` 之前是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

![An image](./images/async-defer.png)
蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。<br>
此图告诉我们以下几个要点：
1. defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
2. 它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
3. 关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
4. async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行
5. 仔细想想，async 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics

## preload与prefetch
两种预请求的区别：
- **preload**: 这种“资源提示” 告诉浏览器这是一种在这次导航中必须的资源，只是会在之后才会被使用， chrome甚至会在资源加载后3秒没有被使用时打印一个警告
  浏览器通常以中等优先级（非布局阻塞）获取此资源。
- **prefetch**: 这种“资源提示” 告诉浏览器这是一个在未来可能使用到的资源。浏览器通常会在空闲状态取得这些资源，在取得资源之后搁在HTTP缓存以便于实现将来的请求。

## 兼容性问题
1. safari 浏览器不支持后向断言正则匹配: `/(?<!\/)\/([a-zA-Z0-9_-]*?)[?|.]/`

