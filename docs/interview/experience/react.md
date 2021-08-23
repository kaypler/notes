# React

## shallowEqual的流程
- 第一步，直接通过 === 判断是否相等，如果相等，那么返回true。正常情况只要调用 React.createElement 会重新创建props，props都是不相等的。
- 第二步，如果新老props有一个不为对象，或者不存在，那么直接返回false。
- 第三步，判断新老props，key组成的数组数量等不想等，说明props有增加或者减少，那么直接返回false。
- 第四步，遍历老的props ,发现新的props没有与之对应，或者新老props不同等,那么返回false。
- 默认返回true。

## setState的运行原理
默认情况下 `setState` 是异步的，原因是 React 内部有一个性能优化机制：**batchUpdates批处理**。
- 这个性能优化机制是为了多次调用 `setState` 触发更新的时候，合并成一个更新，减少因状态更新引起的页面渲染过多而导致的性能问题。
- 在 React 的生命周期函数中调用 `setState` 函数，会执行 batchUpdates，这个时候会加入一个 `batchedContext` 的标志
    有这个标志使得 `setState` 的 action 放入到 batchedUpdateQueue 中。
- 因此，调用 `setState` 后不会立刻执行更新，而是等到 React 上下文结束了，取消 `batchedContext` 的标志，这个时候就是同步执行了。

setTimeout 函数包裹的 `setState` 不在 React 执行的上下文里，因此会同步执行。

## Hook的动机
1. Hook使你在无需修改组件结构的情况下复用状态逻辑。
2. Hook将组件中相互关联的部分拆分成更小的函数。
3. Hook使你在非class的情况下可以使用更多的React特性。

## useEffect 与 useLayoutEffect 的区别
- useEffect 不会阻塞浏览器渲染，useLayoutEffect 会阻止浏览器渲染。
- useEffect 会在浏览器渲染结束后执行，useLayoutEffect 则是在 dom 更新完成后浏览器绘制前执行。

## React17 与 React16 合成事件的差异
React 合成事件会把 `SyntheticEvent` 实例将被传递给你的事件处理函数，它是浏览器的原生事件的跨浏览器包装器。
除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口，包括 `stopPropagation()` 和 `preventDefault()`。
当你需要使用浏览器的底层事件时，只需要使用 `nativeEvent` 属性来获取即可。

> React 事件绑定的时刻是在 reconciliation 阶段，会在原生事件的绑定前执行。

- React16 把事件委托到 document 对象上，当真实 DOM 元素触发事件时，会先处理原生事件，然后会冒泡到 document 对象后再处理 React 事件。
- React17 事件委托的对象不再是 document, 而是挂载的容器了。


::: warning 注意：
从 v17 开始，`e.persist()` 将不再生效，因为 `SyntheticEvent` 不再放入事件池中。
:::

### React16 实现
```js
function dispatchEvent(event) {
    let paths = [];
    let current = event.target;
    while (current) {
        paths.push(current);
        current = current.parentNode;
    }
    // [child, parent, document]
    // 模拟捕获和冒泡，其实在这个时候，原生的捕获阶段已经结束了
    for (let i = paths.length - 1; i >= 0; i--) {
        let handler = paths[i].onClickCapture;
        handler && handler();
    }
    for (let i = 0; i < paths.length; i++) {
        let handler = paths[i].onClick;
        handler && handler();
    }
}
// 注册 React 事件的事件委托
document.addEventListener('click', dispatchEvent);
```

### React17 实现
```js
function dispatchEvent(event, useCapture) {
    let paths = [];
    let current = event.target;
    while (current) {
        paths.push(current);
        current = current.parentNode;
    }

    if (useCapture) {
        for (let i = paths.length - 1; i >= 0; i--) {
            let handler = paths[i].onClickCapture;
            handler && handler();
        }
    } else {
        for (let i = 0; i < paths.length; i++) {
            let handler = paths[i].onClick;
            handler && handler();
        }
    }
}
// 注册 React 事件的事件委托
document.getElementById('root').addEventListener('click', (event) => dispatchEvent(event, true), true);
document.getElementById('root').addEventListener('click', (event) => dispatchEvent(event, false));
```

## Redux 的基本原则
- **唯一数据源**：应用的数据状态应该只存储在唯一的一个 Store 上；
- **保持状态只读**：不能直接修改 Store，必须通过派发一个 action 对象完成；
- **数据改变只能通过纯函数完成**：这个纯函数就是 Reducer。
