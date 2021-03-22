# Python的bisect模块解析
在平时使用python对list进行操作时，有时候会遇到这种情况：我们想要向一个已经排序好的list插入新元素，但不想改变原list的顺序，也就是说新元素的目标是插入到符合原list顺序的位置（比如数字2作为新元素被插入list[1, 3, 4]后，list应变成[1, 2, 3, 4]）,bisect模块刚好可以实现这个简单的需求。

## 1. bisect_left
假设a为一个有序的list，x为新元素，lo和hi作为边界index规定了函数的一个查询子集（即a[lo: hi]）。

```python
def bisect_left(a, x, lo=0, hi=None):
    """返回x插入a后所在位置的index（如果a中存在与x等值的元素，则插入到左侧）"""
    
    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    return lo
```

## 2. bisect_right
```python
def bisect_right(a, x, lo=0, hi=None):
    """返回x插入a后所在位置的index（如果a中存在与x等值的元素，则插入到右侧）"""

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    return lo
```

## 3. insort_left
```python
def insort_left(a, x, lo=0, hi=None):
    """将x插入a（如果a中存在与x等值的元素，则插入到左侧）"""

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    a.insert(lo, x)
```

## 4. insort_right
```python
def insort_right(a, x, lo=0, hi=None):
    """将x插入a（如果a中存在与x等值的元素，则插入到右侧）"""
    
    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    a.insert(lo, x)
```