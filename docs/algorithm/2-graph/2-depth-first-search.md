# 深度优先搜索

## 定义
要搜索一幅图，只需用一个递归方法来遍历所有顶点，在访问其中一个顶点时： 
- 将它标记未已访问；
- 递归地访问它的所有没有被标记过的邻居顶点。

这种方法称为**深度优先搜索**（DFS）。

## 实现
```java
public class DepthFirstSearch {
    private boolean[] marked;
    private int count;

    public DepthFirstSearch(Graph G, int s) {
        marked = new boolean[G.V()];
        dfs(G, s);
    }

    private void dfs(Graph G, int v) {
        marked[v] = true;
        count++;
        for (int w : G.adj(v)) {
            if (!marked[w]) {
                dfs(G, w);
            }
        }
    }

    public boolean marked(int w) {
        return marked[w];
    }
    public int count() {
        return count;
    }
}
```

## 寻找图中的路径
```java
public class DepthFirstPaths{
    private bool ean [] marked; // 这个顶点上调用过dfs()了吗?
    private int[] edgeTo;       // 从起点到一个顶点的已知路径上的最后一个顶点 
    private final int s;        // 起点

    public DepthFirstPaths(Craph C, in t s) {
        marked = new boolean[C.V()];
        edgeTo = new int[G.V()];
        this.s = s; 
        dfs(G, s);
    }
    private void dfs(Graph G, in t v)
        marked[v] = true;
        for (int w : G.adj(v)) {
            if (!marked[w]) {
                edgeTo[w] = v;
                dfs(G, w);
            }
        }
    }    


    public boolean hasPathTo(int v) { return marked[v]; }
    public Iterable<Integer> pathTo(int v) {
        if (!hasPathTo(v)) return null;
        Stack<Integer> path = new Stack<Integer>(); 
        for (int x = v; x != s; x = edgeTo[x])
            path.push(x); 
        path.push(s);
        return path;
    }
}
```

## 连通分量
```java
public class CC {
    private boo1ean[] marked;
    private int[] id; 
    private int count;

    public CC(Graph G) {
        marked = new boolean[G.V()];
        id = new int[C.V()];
        for (int s = 0; s < G.V(); s++)
            if (!marked[s]) {
                dfs(G, s);
                count++;
            }
        }    
    }    

    private void dfs(Graph G, int v) {
        marked[v] = true;
        id[v] = count;
        for (int w : C.adj(v))
            if (!marked[w])
                dfs(G, w);
    }  

    public boolean connected(int v, int w) { return id[v] == id[w]; }
    public int id(int v) { return id[v]; }
    public int count() { return count; }  
}
```