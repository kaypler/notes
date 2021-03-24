# 排序篇

## 215. 数组中的第K个最大元素
`中等`在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。[详细](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

var quickSelect = function(nums, lo, hi, index) {
    let q = randomPartition(nums, lo, hi);
    if (q == index) {
        return nums[q];
    } else {
        return q < index ? quickSelect(nums, q+1, hi, index) : quickSelect(nums, lo, q - 1, index);
    }
}

var randomPartition = function(nums, lo, hi) {
    let r= Math.floor(Math.random() * (hi - lo) + lo);
    [nums[lo], nums[r]] = [nums[r], nums[lo]];
    return partition(nums, lo, hi);
}

var partition = function(nums, lo, hi) {
    let i = lo, j = hi + 1;
    const v = nums[lo];

    while(true) {
        while(nums[++i] < v) if (i == hi) break;
        while(v < nums[--j]) if (j == lo) break;
        if (i >= j) break;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    [nums[lo], nums[j]] = [nums[j], nums[lo]];
    return j;
}
```