# 滑动窗口
>滑窗背后的原理：<br>
本质上来说，滑窗是双指针，一根指针指向左端点，一根指针指向右端点。<br>
右指针移动可以表示扩张窗口，左指针移动表示缩小窗口。<br>
如果当前元素满足题目要求时，可以挪动右指针尝试更优解，并且更新需要记录的变量（元素，元素个数++等）<br>
如果当前窗口内的元素不满足条件，可以挪动左指针尝试调整，并且更新需要记录的变量（元素，元素个数--等）<br>
通过以上步骤窗口就开始“滑动”起来，在滑动过程中，要记得及时更新答案。一般为求最大或最小。<br>

## 1004. 最大连续1的个数 III
`中等` 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
返回仅包含 1 的最长（连续）子数组的长度。[详细](https://leetcode-cn.com/problems/max-consecutive-ones-iii/)

### 代码
``` js
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let i = 0, j = 0;
    while (j < A.length) {
        K -= 1 ^ A[j];
        if (K < 0) {
            K += 1 ^ A[i];
            i += 1;
        }

        j++;
    }

    return j - i;
};
```

## 480. 滑动窗口中位数
`困难`给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。
你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。[详细](https://leetcode-cn.com/problems/sliding-window-median/)
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    const n = nums.length;
    const window = [];
    const ans = [];

    for (let i = 0; i < n; ++i) {
        let aInd = getIndex(window, nums[i]);
        window.splice(aInd, 0, nums[i]);

        if (window.length > k) {
            let rInd = getIndex(window, nums[i - k]);
            window.splice(rInd, 1);
        }

        if (window.length == k) {
            ans.push((window[Math.floor(k/2)] + window[Math.floor((k-1)/2)]) / 2);
        }
    }

    return ans;
};

function getIndex(a, x) {
    let lo = 0, hi = a.length;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (x > a[mid]) lo = mid + 1;
        else hi = mid; 
    }
    return lo;
}
```