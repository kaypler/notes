# 贪心算法

## 1663.具有给定数值的最小字符串
`中等`小写字符的数值 是它在字母表中的位置（从 1 开始），因此 a 的数值为 1 ，b 的数值为 2 ，c 的数值为 3 ，以此类推。
字符串由若干小写字符组成，字符串的数值 为各字符的数值之和。例如，字符串 "abe" 的数值等于`1 + 2 + 5 = 8`。
给你两个整数 n 和 k 。返回长度等于 n 且数值等于 k 的**字典序最小**的字符串。[详细](https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/)

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    const s = new Array(n).fill('a');
    k = k - n;
    for (let i = n-1; i >= 0 && k > 0; --i) {
        if (k > 25) s[i] = 'z', k -= 25;
        else s[i] = String.fromCharCode(97+k), k -= k;
    }
    return s.join('');
};
```