# Vue

## 从new一个Vue对象开始

**初始化**：
- 初始化生命周期、事件、 render
- 调用 beforeCreate 钩子函数
- 初始化 props、methods、data、computed 与 watch ，并且对 options 中的数据进行"响应式化"（双向绑定）以及完成依赖收集
- 调用 created 钩子函数
- 挂载组件

**模板编译**：
- parse 解析阶段。用正则等方式解析 template 中的指令、class、style等数据，形成 ast 。
- optimize 优化阶段。标记 static 静态节点。在新旧节点比较变更时，diff 算法会直接跳过静态节点，这里优化了 patch 的性能。
- generate 代码生成阶段。将 ast 转化成 render function 字符串，得到结果是 render 的字符串以及 staticRenderFns 字符串。

**patch**：
- 如果新旧 VNode 都是静态的，同时它们的 key 相同（代表同一节点），并且新的 VNode 是 clone 或者是标记了 once （标记 v-once 属性，只渲染一次），那么只需要替换 elm 以及 componentInstance 即可。
- 新老节点均有 children 子节点，则对子节点进行 diff 操作，调用 updateChildren 方法。
- 如果老节点没有子节点而新节点存在子节点，先清空老节点 DOM 的文本内容，然后为当前 DOM 节点加入子节点。
- 当新节点没有子节点而老节点有子节点的时候，则移除该 DOM 节点的所有子节点。
- 当新老节点都无子节点的时候，只是文本的替换。

**diff**:
[参考](https://cloud.tencent.com/developer/article/1006029)


## 异步更新队列
Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。
如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。
然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、
MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。