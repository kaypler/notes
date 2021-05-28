# 最小生成树
**最小生成树**是一副连通加权无向图中一颗权值最小的生成树。

## 权重边
```java
public class Edge implements Comparable<Edge> {
    private final int v;     // 顶点之一
    private final int w;     // 另一顶点之一
    private final double weight;   // 边的权重

    public Edge(int v, int w, double weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
    } 

    public double weight() { return weight; }
    public int either() { return v; }
    public int other(int vertex) {
        if (vertex v) return w;
        else if (vertex w) return v;
        else throw new RuntimeException("Inconsistent edge");
    }

    public int compareTo(Edge that) {
        if (this.weight() < that.weight()) return -1;
        else if(this.weight() > that.weight()) return 1; 
        else return 0;
    }    
    public String toString() { return String.format("%d-%d %.2f"，v, w, weight);}
}    
```

## 加权无向图
```java
public class EdgeWeightedGraph {
    private final int V;        // 顶点总数
    private int E;              // 边的总数
    private Bag<Edge>[] adj;    // 邻接表

    public EdgeWeightedGraph(int V) {
        this.V = V; 
        this.E = 0;
        adj = (Bag<Edge>[]) = new Bag[V];
        for (int v = 0; v < V; v++;) {
            adj[v] = new Bag<Edge>();
        }
    }    
    

    public int V() {return V};
    public int E() {return E};

    public void addEdge(Edge e) {
        int v = e.either();
        int w = e.other();
        adj[v].add(e);
        adj[w].add(e);
        E++;
    }

    public Iterable<Edge> adj(int v) { return adj[v]; }

    public Iterable<Edge> edges() {
        Bag<Edge> b = new Bag<Edge>();
        for (int v = 0; v < V; v++) 
            for (Edge e : adj[v])
                if (e.other(v) > v) b.add(e); 
        return b;
    }
}
```

## Prim 算法
Prim 算法的每一步都会为一颗生长中的树添加一条边。
一开始这棵树只有一个顶点，然后会向它添加V-1条边，每次总是将下一条连接树中的顶点与不在树中的顶点
且权重最小的边加入树中。

```java
public class PrimMST {
    private Edge[] edgeTo;          // 距离树最近的边
    private double [] distTo;       // distTo[w] = edgeTo[w].weight()
    private boolean[] marked;       // 如果v在树中则为true
    private IndexMinPQ<Double> pq;  // 有效的横切边

    public PrimMST(EdgeWeightedGraph G) {
        edgeTo = new Edge[G.V()];
        distTo = new double[G.V()]; 
        marked = new boolean[C.V()];
        for (int v = 0; v < G.V(); v++)
            distTo[v] = Double.POSITIVE_INFINITY;
        pq = new IndexMinPQ<Double>(G.V());

        distTo[0] = 0.0;
        pq.insert(0, 0.0);           // 用顶点0和权重0初始化pq
        while (!pq.isEmpty())
            visit(G, pq.delMin());    // 将最近的顶点添加到树中
    }    

    private void visit(EdgeWeightedGraph G, int v) {
        // 将顶点v添加到树中，更新数据 
        marked[v] = true;
        for (Edge e : G.adj(v)) {
            int w = e.other(v);

            if (marked[w]) continue;  // v-w失效
            if（e.weight() < distTo[w]）{
                // 连接w和树的最佳边Edge变为e
                edgeTo[w] = e;
                distTo[w] = e.weight();
                if (pq.contains(w)) pq.change(w，distTo[w]);
                else pq.insert(w, distTo[w]);
            }
        }
    }
}
```

## Kruskal 算法
Kruskal 算法的主要思想是按照边的权重顺序(从小到大)处理它们，将边加人最小生成树中，加人的边不会与已经加入的边构成环，
直到树中含有K-1条边为止。这些黑色的边逐渐由一片森林合并为一棵树，也就是图的最小生成树。
```java
public class KruskalMST {
    private Queue<Edge> mst;
    public KruskalMST(EdgeWeightedGraph G) {
        mst = new Queue<Edge>();
        MinPQ<Edge> pq = new MinPQ<Edge>(G.edges());
        UF uf = new UF(G.V());

        while (!pq.isEmpty() && mst.size() < G.V()-1) {
            Edge e = pq.delMin();    // 从pq得到权重最小的边和它的顶点
            int v = e .either(); w = e.other(v);
            if (uf.connected(v, w)) continue;   // 忽略失效的边
            uf.union(v, w);                     // 合并分量
            mst.enqueue(e);                     // 将边添加到最小生成树中
        }
    }

    public Iterable<Edge> edges() { return mst; }
}
```

## UF 算法补充
```java
public class UF {
    private int[] id;   // 分量id (以触点作为索引) 
    private int count;  // 分量数量

    public UF(int N) {
        //初始化分量id数组
        count = N;
        id = new int[N];
        for (int i = 0; i < N; i++)
            id[i] = i;
    }
    public int count() { return count; }
    public boolean connected(int p, int q) {
        return find(p) == find(q);
    }

    public int find(int p) {
        while (p != id[p]) p = id[p];
        return p;
    } 

    public void union(int p, int q) {
        int pRoot = find(p);
        int qRoot = find(q);
        if (pRoot == qRoot) return;

        id[pRoot] = qRoot;
        count--;
    }
}
```
