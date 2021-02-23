# 图概念
>**定义** 图是由一组顶点和一组能够将两个顶点相连的边组成的。

## 术语表

当两个顶点通过一条边相连时，我们称两个顶点是**相邻**的，并称该连接*依附于*这两个顶点。
某个顶点的**度数**即为依附于它的边的总数。


::: tip 特殊的图
- 自环，即一条连接一个顶点和其自身的边；
- 连接同一对顶点的两条边称为平行边。数学家常常将含有平行边的图称为**多重图**
:::

::: tip 路径和环
在图中，**路径**是由边顺序连接的一系列顶点。**简单路径**是一条没有重复顶点的路径。
**环**是一条至少含有一条边且起点和终点相同的路径。**简单环**是一条（除了起点和终点必须相同之外）不含有重复顶点和边的环。
路径或者环的**长度**为其中所包含的边数。
:::

::: tip 连通图
如果从任意一个顶点都存在一条路径到达另一个任意顶点，我们称这幅图是**连通图**。
一幅非连通的图由若干连通的部分组成，它们都是其**极大连通子图**。
:::

::: tip 树
**树**是一幅无环连通图。互不相连的树组成的集合称为**森林**。连通图的**生成树**是它的一幅子图，它含有图中的所有顶点且是一棵树。
图的**生成树森林**是它的所有连通子图的生成树的集合。<br>
当且仅当一幅含有V个结点的图G满足下列5个条件之一时，它就是一个树：
- G有V-1条边且不含有环；
- G有V-1条边且是连通的；
- G是连通的，但删除任意一条边都会使它不再连通；
- G是无环的，但添加任意一条边都会产生一条环；
- G中的任意一对顶点之前仅存在一条简单路径。
:::

::: tip 其它概念
**图的密度**是指已经连接的顶点对占所有可能被连接的顶点对的比例。
**二分图**是一种能够将所有结点分为两部分的图，其中图的每条边所连接的两个顶点都分别属于不同的部分。
:::

## 无向图
```java
public class Graph {
  private final int V;         // 顶点数目
  private int E;               // 边的数目
  private Bag<Integer>[] adj;  // 邻接表
  public Graph(int V) {
    this.V = V; this.E = 0;
    adj = (Bag<Integer>[]) new Bag[V];  // 创建邻接表
    for (int v = 0; v < V; V++) {       // 将所有链表初始化为空
      adj[v] = new Bag<Integer>();
    }
  }
  public Graph(In in) {
    this(in.readInt());            // 读取V并将图初始化
    int E = in.readInt();          // 读取E
    for (int i = 0; i < E; i++) {
      int v = in.readInt();        // 读取一个顶点
      int w = in.readInt();        // 读取另一个顶点
      addEdge(v, w);               // 添加一条连接它们的边
    }
  }
  public int V() { return V; }
  public int E() { return E; }
  public void addEdge(int v, w) {
    adj[v].add(w);   // 将w添加到v的链表中
    adj[w].add(v);   // 将v添加到w的链表中
    E++;
  }
  public Iterable<Integer> adj(int v) {
    return adj[v];
  }
}
```
## 有向图
```java
public class Digraph {
  private final int V;
  private int E;
  private Bag<Integer>[] adj;
  public Graph(int V) {
    this.V = V; this.E = 0;
    adj = (Bag<Integer>[]) new Bag[V];
    for (int v = 0; v < V; V++) {
      adj[v] = new Bag<Integer>();
    }
  }

  public int V() { return V; }
  public int E() { return E; }

  public void addEdge(int v, int w) {
    adj[v].add(w);
    E++;
  }

  public Iterable<Integer> adj(int v) {
    return adj[v];
  }

  public Digraph reverse() {
    Digraph R = new Digraph(V);
    for (int v = 0; v < V; v++) {
      for (int w : adj(v)) {
        R.addEdge(w, v);
      }
    }
    return R;
  }
}
```