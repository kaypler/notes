# 搜索

## 二分查找

二分查找的基本思想是将长度为 n 的有序数组 a 分成大致相等的两部分，取`a[n/2]`与数 x 做比较，如果`x = a[n/2]`，则找到 x，算法中止；
如果`x < a[n/2]`，则只要在数组 a 的左半部分继续搜索 x，如果`x > a[n/2]`，则只要在数组 a 的右半部搜索 x。

二分查找算法的时间复杂度为：`log2n`。

```js
function binarySearch(arr, x) {
  let lo = 0, hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((hi - lo) / 2) + lo;
    if (arr[mid] === x) {
      return mid
    } else if (arr[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}
```

### leftSearch

返回 x 插入 a 后所在位置的 index，如果 a 中存在与 x 等值的元素，则插入到左侧。

```js
function leftSearch(arr, x) {
  let lo = 0, hi = arr.length - 1;

  while (lo < hi) {
    let mid = Math.floor((hi - lo) / 2) + lo;
    if (arr[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return [lo, hi];
}
```

### rightSearch

返回 x 插入 a 后所在位置的 index，如果 a 中存在与 x 等值的元素，则插入到右侧。

```js
function rightSearch(arr, x) {
  let lo = 0, hi = arr.length - 1;

  while (lo < hi) {
    let mid = Math.floor((hi - lo) / 2) + lo;
    if (x < arr[mid]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return [lo, hi];
}
```
