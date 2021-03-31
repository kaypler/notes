# 排序算法

## 选择排序
一种最简单的排序算法是这样的：首先，找到数组中最小的那个元素，其次，将它和数组的第一个元素交换位置（如果
第一个元素就是最小元素那么它就和自己交换）。再次，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置。
如此往复，直到将整个数组排序。这种方法叫做选择排序，因为它在不断地选择剩余元素之中的最小者。
```java
import java.util.Comparator;

public class Selection {
  private Selection() { }

  public static void sort(Comparable[] a) {
    int n = a.length;
    for (int i = 0; i < n; i++) {
      int min = i;
      for (int j = i+1; j < n; j++) {
        if (less(a[j], a[min])) min = j;
      }
      exch(a, i, min);
    }
  }
 
  // is v < w ?
  private static boolean less(Comparable v, Comparable w) {
    return v.compareTo(w) < 0;
  }
   
  // exchange a[i] and a[j]
  private static void exch(Object[] a, int i, int j) {
    Object swap = a[i];
    a[i] = a[j];
    a[j] = swap;
  }
}
```

## 插入排序
通常人们整理桥牌的方法是一张一张的来，将每一张牌插入到其他已经有序的牌中的适当位置。
在计算机的实现中，为了给要插入的元素腾出空间，我们需要将其余所有元素在插入之前都向右移
动一位。这种算法叫做插入排序。
```java
public class Insertion {
  public static void sort(Comparable[] a) {
    int N = a.length;
    for (int i = 1; i < N; i++) {
      for (int j = i; j > 0 && less(a[j], a[j-1]); j--) {
        exch(a, j, j-1);
      }
    }
  }
}
```

## 归并排序
要将一个数组排序，可以先递归地把它分成两半分别排序，然后将结果归并起来。这就是归并排序。
```java
public class Merge {

    private Merge() { }

    private static void merge(Comparable[] a, Comparable[] aux, int lo, int mid, int hi) {
        for (int k = lo; k <= hi; k++) {
            aux[k] = a[k]; 
        }

        // merge back to a[]
        int i = lo, j = mid+1;
        for (int k = lo; k <= hi; k++) {
            if      (i > mid)              a[k] = aux[j++];
            else if (j > hi)               a[k] = aux[i++];
            else if (less(aux[j], aux[i])) a[k] = aux[j++];
            else                           a[k] = aux[i++];
        }
    }

    // mergesort a[lo..hi] using auxiliary array aux[lo..hi]
    private static void sort(Comparable[] a, Comparable[] aux, int lo, int hi) {
        if (hi <= lo) return;
        int mid = lo + (hi - lo) / 2;
        sort(a, aux, lo, mid);
        sort(a, aux, mid + 1, hi);
        merge(a, aux, lo, mid, hi);
    }

    /**
     * Rearranges the array in ascending order, using the natural order.
     * @param a the array to be sorted
     */
    public static void sort(Comparable[] a) {
        Comparable[] aux = new Comparable[a.length];
        sort(a, aux, 0, a.length-1);
    }
    
    // is v < w ?
    private static boolean less(Comparable v, Comparable w) {
        return v.compareTo(w) < 0;
    }
}
```

## 快速排序
快速排序是一种分治的排序算法。它将一个数组分成两个子数组，将两部分独立地排序。
```java
public class Quick {
  public static void sort(Comparable[] a) {
    StdRandom.shuffle(a);     // 消除对输入的依赖
    sort(a, 0, a.length - 1);
  }

  private static void sort(Comparable[] a, int lo, int hi) {
    if (hi <= lo) return;
    int j = partition(a, lo, hi);
    sort(a, lo, j - 1);
    sort(a, j + 1, hi);
  }

  private static int partition(Comparable[] a, int lo, int hi) {
    int i = lo, j = hi + 1;       // 左右扫描指针
    Comparable v = a[lo];         // 切分元素
    while (true) {
      while (less(a[++i], v) if (i == hi) break;
      while (less(v, a[--j])) if (j == lo) break;
      if (i >= j) break;
      exch(a, i, j);
    }
    exch(a, lo, j);
    return j;
  }
}
```

## 优先队列
当一颗二叉树的每个结点都大于等于它的两个子节点时，它被称为**堆有序**。
**二叉堆**是一组能够用堆有序的完全二叉树排序的元素，并在数组中按照层级存储（不使用数组的第一个位置）。

```java
public class MaxPQ<Key extends Comparable<Key>> {
  private Key[] pq;               // 基于堆的完全二叉树
  private int N = 0;              // 存储于pq[1..N]中，pq[0]没有使用

  public MaxPQ(int maxN) {
    pq = (Key[]) new Comparable[maxN+1];
  }

  public boolean isEmpty() { return N == 0; }
  public int size() { return N; }

  public void insert(Key v) {
    pq[++N] = v;
    swim(N);
  }

  public Key delMax() {
    Key max = pq[1];      // 从根结点得到最大元素
    exch(1, N--);         // 将其和最后一个结点交换
    pq[N+1] = null;       // 防止越界
    sink(1);              // 恢复堆的有序性
    return max;
  }

  private boolean less(int i, int j) {
    return pq[i].compareTo(pq[j]) < 0;
  }
  private boolean exch(int i, int j) {
    Key t = pq[i];
    pq[i] = pq[j];
    pq[j] = t;
  }
  private boolean swim(int k) {
    while (k > 1 && less(k/2, k)) {
      exch(k/2, k);
      k = k/2;
    }
  }
  private boolean sink(int k) {
    while (2*k <= N) {
      int j = 2*k;
      if (j < N && less(j, j+1)) j++;
      if (!less(k, j)) break;
      exch(k, j);
      k = j;
    }
  }
}
```

## 堆排序
```java
public class Heap {

    // This class should not be instantiated.
    private Heap() { }

    public static void sort(Comparable[] pq) {
        int n = pq.length;

        // heapify phase
        for (int k = n/2; k >= 1; k--)
            sink(pq, k, n);

        // sortdown phase
        int k = n;
        while (k > 1) {
            exch(pq, 1, k--);
            sink(pq, 1, k);
        }
    }

    private static void sink(Comparable[] pq, int k, int n) {
        while (2*k <= n) {
            int j = 2*k;
            if (j < n && less(pq, j, j+1)) j++;
            if (!less(pq, k, j)) break;
            exch(pq, k, j);
            k = j;
        }
    }

    private static boolean less(Comparable[] pq, int i, int j) {
        return pq[i-1].compareTo(pq[j-1]) < 0;
    }

    private static void exch(Object[] pq, int i, int j) {
        Object swap = pq[i-1];
        pq[i-1] = pq[j-1];
        pq[j-1] = swap;
    }
}
```

## 各种排序算法比较
| 算法        | 是否稳定 | 是否为原地排序 |  时间复杂度 | 空间复杂度  | 备注                 |
| :--------  | :------ | :----------  | :-------- | :-------- | :------------------- |
| 选择排序    | 否       | 是           | N^2       | 1         | 取决于输入元素的排列顺序 |
| 插入排序    | 是       | 是           | N~N^2     | 1         | 取决于输入元素的排列顺序 |
| 希尔排序    | 否       | 是           |           | 1         | 取决于输入元素的排列顺序 |
| 快速排序    | 否       | 是           | NlogN     | lgN       | 运行效率由概率提供保证   |
| 三向快速排序 | 否      |  是           | N~NlogN   | lgN       | 运行效率由概率提供保证，同时也取决于输入元素的分布情况 |
| 归并排序    | 是       | 否           | NlogN     | N         |                      |
| 堆排序      | 否      |  是           | NlogN     | 1         |                      |