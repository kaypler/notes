# 微前端

## 微前端解决的问题
- 不同团队（技术栈不同），同时开发一个应用
- 每个团队开发的模块都可以独立开发，独立部署
- 实现增量迁移

## 微前端解决方案
可以将一个应用划分成若干子应用，将子应用打包成一个个的模块。当路径切换时加载不同的子应用，这样每个子应用都是独立的，从而解决了前端协同开发的问题。
子应用需要暴露固定的钩子: bootstrap、mount、unmount。

- iframe、webComponent
- 2018年 Single-SPA 诞生了，single-spa 是一个用于前端微服务化的 Javascript 前端解决方案（本身没有处理样式隔离，js 执行隔离），实现了路由劫持和应用加载
- 2019年 qiankun 基于 Single-SPA 提供了开箱即用的 API （single-spa + sandbox + import-html-entry），接入简单
- 2020年 EMP 基于 webpack5 module federation，接入成本低，解决第三方依赖包问题 

## iframe 的问题
- url 不同步，浏览器刷新 iframe url 状态丢失，后退前进按钮无法使用
- UI 不同步，DOM 结构不共享
- 全局上下文完全隔离，内存变量不共享
- 慢，每次子应用进入都是一次浏览器上下文重建，资源重新加载的过程

## single-spa 的缺陷
- 不能动态加载js文件
- 样式不隔离
- 没有js沙箱的机制

## CSS 隔离方案
 
**子应用之间样式隔离**： 
- Dynamic StyleSStylesheet：动态样式表，当应用切换时移除老应用样式，添加新应用样式

**主应用和子应用之间样式隔离**：
- BEM（Block Element Modifier）：约定项目前缀
- CSS-Module：打包时生成不冲突的选择器名
- Shadow DOM：真正意义上的隔离
- css-in-js

## js 沙箱

**快照沙箱**：
```js
class SnapshotSandbox {
    constructor() {
        this.proxy = window;
        this.modifyPropMap = {}; // 记录在window上的修改
        this.active();
    }
    active() {
        this.windowSnapshot = {};
        for (const prop in window) {
            if (window.hasOwnProperty(prop)) {
                this.windowSnapshot[prop] = window[prop];
            }
        }

        Object.keys(this.modifyProp).forEach(p => {
            window[p] = this.modifyMap[p];
        })
    }
    inactive() {
        for (const prop in window) {
            if (window.hasOwnProperty(prop)) {
                if (window[prop] !== this.windowSnapshot[prop]) {
                    this.modifyProp[prop] = window[prop];
                    window[prop] = this.windowSnapshot[prop];
                }
            }
        }
    }
}

const sandbox = new SnapshotSandbox();

((window) => {
    window.a = 1;
    window.b = 2;
    console.log(window.a, window.b);
    sandbox.inactive();
    console.log(window.a, window.b);
    sandbox.active();
    console.log(window.a, window.b); 
})(sandbox.proxy)
```
**代理沙箱**：
```js
class ProxySandbox {
    constructor() {
        const rawWindow = window;
        const fakeWindow = {};
        const proxy = new Proxy(fakeWindow, {
            set(target, p, value) {
                target[p] = value;
                return true;
            },
            get(target, p) {
                return target[p] || rawWindow[p];
            }
        });
        this.proxy = proxy;
    }
}

// test
let sandbox1 = new ProxySandbox();
let sandbox2 = new ProxySandbox();
window.a = 1;
((window) => {
    window.a = 'hello';
    console.log(window.a);
})(sandbox1.proxy);
((window) => {
    window.a = 'world';
    console.log(window.a);
})(sandbox2.proxy);
```

