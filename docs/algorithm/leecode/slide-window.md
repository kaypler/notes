# 滑动窗口
>滑窗背后的原理：<br>
本质上来说，滑窗是双指针，一根指针指向左端点，一根指针指向右端点。<br>
右指针移动可以表示扩张窗口，左指针移动表示缩小窗口。<br>
如果当前元素满足题目要求时，可以挪动右指针尝试更优解，并且更新需要记录的变量（元素，元素个数++等）<br>
如果当前窗口内的元素不满足条件，可以挪动左指针尝试调整，并且更新需要记录的变量（元素，元素个数--等）<br>
通过以上步骤窗口就开始“滑动”起来，在滑动过程中，要记得及时更新答案。一般为求最大或最小。<br>

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

## 1004. 最大连续1的个数 III
`中等` 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
返回仅包含 1 的最长（连续）子数组的长度。[详细](https://leetcode-cn.com/problems/max-consecutive-ones-iii/)

### 解题思路
异或：参与运算的两个值，如果两个相应bit位相同，则结果为0，否则为1。即：
0^0 = 0，1^0 = 1，0^1 = 1，1^1 = 0

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

## 1438. 绝对差不超过限制的最长连续子数组
`中等`给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。
如果不存在满足条件的子数组，则返回 0 。[详细](https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

### 解题思路
为了方便统计当前窗口内的最大值与最小值，我们可以使用平衡树：
* 语言自带的红黑树，例如C++中的std::multiset，Java中的TreeMap；
* 第三方的平衡树库，例如Python中的sortedcontainers（事实上，这个库的底层实现并不是平衡树，但各种操作的时间复杂度仍然很优秀）；
来维护窗口内元素构成的有序集合。

### 代码
```java
class Solution {
  public int longestSubarray(int[] nums, int limit) {
    TreeMap<Integer, Integer> map = new TreeMap<Integer, Integer>();
    int n = nums.length;
    int left = 0, right = 0;
    int ret = 0;
    while (right < n) {
      map.put(nums[right], map.getOrDefault(nums[right], 0) + 1);
      while (map.lastKey() - map.firstKey() > limit) {
        map.put(nums[left], map.get(nums[left]) - 1);
        if (map.get(nums[left]) == 0) {
          map.remove(nums[left]);
        }
        left++;
      }
      ret = Math.max(ret, right - left + 1);
      right++;
    }
    return ret;
  }
}
```