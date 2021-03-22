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
      assert isSorted(a, 0, i);
    }
    assert isSorted(a);
  }

  public static void sort(Object[] a, Comparator comparator) {
    int n = a.length;
    for (int i = 0; i < n; i++) {
      int min = i;
      for (int j = i+1; j < n; j++) {
        if (less(comparator, a[j], a[min])) min = j;
      }
      exch(a, i, min);
      assert isSorted(a, comparator, 0, i);
    }
    assert isSorted(a, comparator);
  }
  
  // is v < w ?
  private static boolean less(Comparable v, Comparable w) {
    return v.compareTo(w) < 0;
  }

  // is v < w ?
  private static boolean less(Comparator comparator, Object v, Object w) {
    return comparator.compare(v, w) < 0;
  }
      
      
  // exchange a[i] and a[j]
  private static void exch(Object[] a, int i, int j) {
    Object swap = a[i];
    a[i] = a[j];
    a[j] = swap;
  }

  // is the array a[] sorted?
  private static boolean isSorted(Comparable[] a) {
    return isSorted(a, 0, a.length - 1);
  }
      
  // is the array sorted from a[lo] to a[hi]
  private static boolean isSorted(Comparable[] a, int lo, int hi) {
    for (int i = lo + 1; i <= hi; i++)
      if (less(a[i], a[i-1])) return false;
    return true;
  }

  // is the array a[] sorted?
  private static boolean isSorted(Object[] a, Comparator comparator) {
    return isSorted(a, comparator, 0, a.length - 1);
  }

  // is the array sorted from a[lo] to a[hi]
  private static boolean isSorted(Object[] a, Comparator comparator, int lo, int hi) {
    for (int i = lo + 1; i <= hi; i++)
      if (less(comparator, a[i], a[i-1])) return false;
    return true;
  }

  // print array to standard output
  private static void show(Comparable[] a) {
    for (int i = 0; i < a.length; i++) {
      StdOut.println(a[i]);
    }
  }

  /**
    * Reads in a sequence of strings from standard input; selection sorts them; 
    * and prints them to standard output in ascending order. 
    *
    * @param args the command-line arguments
    */
  public static void main(String[] args) {
    String[] a = StdIn.readAllStrings();
    Selection.sort(a);
    show(a);
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
