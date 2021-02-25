# 矩阵
一些矩阵操作相关的题型。

## 832. 翻转图像
`简单`给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。
水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。
反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。[详细](https://leetcode-cn.com/problems/flipping-an-image/)
```js
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  const len = A[0].length;
  const mid = Math.floor((len+ 1) / 2);
  for (const row of A) {
    for (let i = 0; i < mid; i++) {
      // 相同的取反即可
      if (row[i] === row[len - i -1]) {
        row[i] = row[len - i -1] = 1 ^  row[i];
      }
    }
  }
  return A;
};
```

## 867. 转置矩阵
`简单`给你一个二维整数数组matrix， 返回matrix的**转置矩阵**。
矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。[详细](https://leetcode-cn.com/problems/transpose-matrix/)
```js
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  // 行转列
  return matrix[0].map((k, n) => matrix.map((a, m) => a[n]));
};
```