# 双指针

## 986. 区间列表的交集
`中等`给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，其中`firstList[i] = [starti, endi]`而`secondList[j] = [startj, endj]`。每个区间列表都是成对不相交的，并且已经排序。返回这两个区间列表的交集 。[详细](https://leetcode-cn.com/problems/interval-list-intersections/)
```js
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let res = [];
    let i = 0;
    let j = 0;

    while (i < A.length && j < B.length) {
        // 左指针取大的
        let left = Math.max(A[i][0], B[j][0]);
        // 右指针取小的
        let right = Math.min(A[i][1], B[j][1]);

        if (left <= right) res.push([left, right]);
        // 子区间上界较大的不移动
        A[i][1] > B[j][1] ? j++ : i++;
    }
    return res;
};
```