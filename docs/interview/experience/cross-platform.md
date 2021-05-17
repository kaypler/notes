# 跨端

## JSBridge 
主要是给 JavaScript 提供调用 Native 功能的接口，让混合开发中的前端部分可以方便地使用 Native 的功能（例如：地址位置、摄像头）。

而且 JSBridge 的功能不止调用 Native 功能这么简单宽泛。实际上，JSBridge 就像其名称中的Bridge的意义一样，
是 Native 和非 Native 之间的桥梁，它的核心是构建 Native 和非 Native 间消息通信的通道，而且这个通信的通道是双向的。

### 实现原理
JavaScript 是运行在一个单独的 JS Context 中（例如，WebView 的 Webkit 引擎、JSCore）。由于这些 Context 与原生运行环境的天然隔离，
我们可以将这种情况与 RPC（Remote Procedure Call，远程过程调用）通信进行类比，将 Native 与 JavaScript 的每次互相调用看做一次 RPC 调用。

### 通信原理
JavaScript 调用 Native的方式主要有两种：
- **注入API**：通过 WebView 提供的接口，向 JavaScript 的 Context（window）中注入对象或者方法，让 JavaScript 调用时，
  直接执行相应的 Native 代码逻辑，达到 JavaScript 调用 Native 的目的。
- **拦截URL SCHEME**：Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL SCHEME（包括所带的参数）进行相关操作。  

## React Native
React Native 是一套 UI 框架，默认情况下 React Native 会在 Activity 下加载 JS 文件，然后运行在 JavaScriptCore 中解析 Bundle 文件布局，最终堆叠出一系列的原生控件进行渲染。

简单来说就是 通过写 JS 代码配置页面布局，然后 React Native 最终会解析渲染成原生控件，如`<View>`标签对应 ViewGroup/UIView ，`<ScrollView>`标签对应 ScrollView/UIScrollView ，
`<Image>` 标签对应 ImageView/UIImageView 等。


## Flutter
Flutter 中绝大部分的 Widget 都与平台无关， 开发者基于 Framework 开发 App ，而 Framework 运行在 Engine 之上，
由 Engine 进行适配和跨平台支持。这个跨平台的支持过程，其实就是将 Flutter UI 中的 Widget “数据化” ，然后通过 Engine 上的 Skia 直接绘制到屏幕上 。