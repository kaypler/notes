# 动态规划

## 338. 比特位计数
`中等`给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
[详细](https://leetcode-cn.com/problems/counting-bits/)

```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const ans = new Array(num + 1).fill(0);
    let highBit = 0;
    for (let i = 1; i <= num; i++) {
        if ((i & (i - 1)) == 0) {
            highBit = i;
        }
        ans[i] = ans[i - highBit] + 1;
    }
    return ans;
};
```