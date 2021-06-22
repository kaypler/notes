# 回溯

## 剑指 Offer 38. 字符串的排列
`中等`输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
[详细](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)

```js
var permutation = function (s) {
    const rec = [], vis = [];
    const n = s.length;
    const arr = Array.from(s).sort();
    const perm = [];
    
    const backtrack = function (arr, i, n, perm) {
        if (i === n) {
            rec.push(perm.join(''));
            return;
        }
        for (let j = 0; j < n; ++j) {
            if (vis[j] || (j > 0 && !vis[j-1] && arr[j-1]===arr[j])) {
                continue;
            }
            vis[j] = true;
            perm.push(arr[j]);
            backtrack(arr, i+1, n, perm);
            perm.pop();
            vis[j] = false;
        }
    }

    backtrack(arr, 0, n, perm);
    return rec;
}
```