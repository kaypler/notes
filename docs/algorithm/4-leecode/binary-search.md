# 二分查找

## 81.搜索旋转排序数组 II
`中等`已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，
使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。
给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。
[详细](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/)
```python
class Solution:
    def search(self, nums: List[int], target: int) -> bool:        
        l = 0
        r = len(nums) - 1
        while l<=r:
            mid = (l+r) // 2
            if nums[mid] == target:
                return True

            if nums[mid] == nums[l]:  # l和mid重复，l加一
                l += 1
            elif nums[mid] == nums[r]:  # mid和r重复，r减一
                r -= 1
            elif nums[mid] > nums[l]:  # l到mid是有序的，判断target是否在其中
                if nums[l] <= target < nums[mid]:  # target在其中，选择l到mid这段
                    r = mid - 1
                else:  # target不在其中，扔掉l到mid这段
                    l = mid + 1
            elif nums[mid] < nums[r]:  # mid到r是有序的，判断target是否在其中
                if nums[mid] < target <= nums[r]:
                    l = mid + 1
                else:
                    r = mid - 1 
        return False
```

## 153.寻找旋转排序数组中的最小值
`中等`已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
[详细](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
```python
class Solution:
    def findMin(self, nums):
        l,r= 0,len(nums) -1
        while l < r:
            if nums[l] < nums[r]:
                return nums[l]
            mid = (l + r) // 2
            if nums[mid] >= nums[r]:
                l = mid +1
            else:  
                r = mid
        return nums[l]
```