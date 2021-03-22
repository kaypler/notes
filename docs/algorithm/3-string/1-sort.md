# 字符串排序

## 低位优先的字符串排序
```java
public class LSD {
  public static void sort(string[] a, int W) {
    int N = a.length;
    int R = 256;
    String aux = new String[N];

    for (int d = W - 1; d >= 0; d--) {
      int[] count = new int[R+1];      // 计算出现频率
      for (int i = 0; i < N; i++) {
        count[a[i].charAt(d) + 1]++;
      }

      for (int r = 0; r < R; r++;) {   // 将频率转换为索引
        count[r+1] += count[r];
      }

      for (int i = 0; i < N; i++) {    // 将元素分类
        aux[count[a[i].charAt(d)]++] = a[i];
      }

      for (int i = 0; i < N; i++) {    // 回写
        a[i] = aux[i];
      }
    }
  }
}
```

## 高位优先的字符串排序
```java
public class MSD {
  private static int R = 256;        // 基数
  private static final int M = 15;   // 小数组的切换阈值
  private static String[] aux;       // 数据分类的辅助数组

  private static int charAt(String s, int d) {
    return d < s.length ? s.chatAt(d) : -1;
  }

  public static void sort(String[] a) {
    int N = a.length;
    aux = new String[N];
    sort(a, 0, N-1, 0);
  }

  private static void sort(String[] a, int lo, int hi, int d) {
    if (hi <= lo + M) {
      return Insertion.sort(a, lo, hi, d);
    }

    int[] count = new int[R+2];      // 计算出现频率
    for (int i = 0; i < N; i++) {
      count[charAt(a[i], d) + 2]++;
    }

    for (int r = 0; r < R+1; r++;) {   // 将频率转换为索引
      count[r+1] += count[r];
    }

    for (int i = lo; i <= hi; i++) {    // 将元素分类
      aux[count[charAt(a[i], d) + 1]++] = a[i];
    }

    for (int i = lo; i <= hi; i++) {    // 回写
      a[i] = aux[i - lo];
    }

    // 递归的以每个字符为键进行排序
    for (int r = 0; r < R; r++) {
      sort(a, lo + count[r], lo + count[r+1] - 1, d+1);
    }
  }
}
```

## 三向字符串快速排序
```java
public class Quick3String {
  private static int charAt(String s, int d) {
    return d < s.length ? s.chatAt(d) : -1;
  }

  public static void sort(String[] a) {
    sort(a, 0, a.length - 1, 0);
  }

  private static void sort(String[] a, int lo, int hi, int d) {
    if (hi <= lo) return;
    int lt = lo, gt = hi;
    int v = charAt(a[lo], d);
    int i = lo + 1;
    while (i <= gt) {
      int t = charAt(a[i], d);
      if (t < v) exch(a, lt++, i++);
      else if (t > v) exch(a, i, gt--);
      else i++;
    }

    sort(a, lo, lt-1, d);
    if (v >= 0) sort(a, lt, gt, d+1);
    sort(a, gt+1, hi, d);
  }
}
```