# 数组

## 80.删除有序数组中的重复项 II
`中等`给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
[详细](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/)
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int i = 0;
        for (int n : nums)
            if (i < 2 || n > nums[i-2])
                nums[i++] = n;
        return i;
    }
}
```

## 88.合并两个有序数组
`简单`给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
[详细](https://leetcode-cn.com/problems/merge-sorted-array/)
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1;
    let tail = m + n - 1;
    var cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
};
```

## 1109. 航班预订统计
`中等`这里有 n 个航班，它们分别从 1 到 n 进行编号。
有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
请你返回一个长度为 n 的数组 answer，其中 answer[i] 是航班 i 上预订的座位总数。
[详细](https://leetcode-cn.com/problems/corporate-flight-bookings/)


```java
class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] nums = new int[n];
        // 差分数组
        for (int[] booking : bookings) {
            nums[booking[0] - 1] += booking[2];
            if (booking[1] < n) {
                nums[booking[1]] -= booking[2];
            }
        }
        // 前缀和
        for (int i = 1; i < n; ++i) {
            nums[i] += nums[i - 1];
        }
        return nums;
    }
}
```

## 1893. 检查是否区域内所有整数都被覆盖
`简单`给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 `ranges[i] = [starti, endi]` 表示一个从 starti 到 endi 的 闭区间 。
如果闭区间 `[left, right]` 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。
已知区间 `ranges[i] = [starti, endi]` ，如果整数 x 满足 `starti <= x <= endi` ，那么我们称整数x 被覆盖了。
[详细](https://leetcode-cn.com/problems/check-if-all-the-integers-in-a-range-are-covered/)
```java
class Solution {
    public boolean isCovered(int[][] ranges, int left, int right) {
        int[] diff = new int[52];
        for (int[] range : ranges) {
            ++diff[range[0]];
            --diff[range[1] + 1];
        }

        int curr = 0;
        for (int i = 1; i <= 50; ++i) {
            curr += diff[i];
            if (i >= left && i <= right && curr <= 0) {
                return false;
            }
        }
        return true;
    }
}
```

