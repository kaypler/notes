# 混合应用开发最佳实践

## 兼容性

### JS 兼容性
1. 安卓10及以下不支持 `String.prototype.replaceAll` 方法

### CSS 兼容性
1. flex 布局中的 `gap` 属性安卓 11 不支持

## Webview 数据通信

### 1. storage
`localStorage.setItem` 之后其它 webview 会监听到 `storage` 事件。

```js
import { useEffect } from 'react';

type StorageChangeHandler = (ev: StorageEvent) => void;

export function useStorageEffect(handler: StorageChangeHandler, deps?: string[]) {

  useEffect(() => {
    const storageHandler = (ev: StorageEvent) => {
      if (!deps?.length || deps.includes(ev.key as string)) {
        handler(ev);
      }
    }

    window.addEventListener('storage', storageHandler);
    return () => {
      window.removeEventListener('storage', storageHandler);
    };
  }, []);

}
```

用法：
```js
useStorageEffect((ev) => {
  console.log(ev);
}, ['some-key']);
```
