# 广度优先搜索

## 定义
使用一个队列来保存所有已经被标记过但其邻接表还未被检查过的顶点。
先将起点加入队列，然后重复以下步骤知道队列为空：
- 取队列中的下一个顶点v并标记它；
- 将与v相邻的所有未被标记过的顶点加入队列。

## 最短路径问题
```java
public class BreadthFirstPaths {
    private boolean[] marked; // 到达该顶点的最短路後已知吗? 
    private int[] edgeTo;     // 到达该顶点的已知路径上的最后一个顶点 
    private final int s;      // 起点

    public BreadthFirstPaths(Graph G, int s) {
        marked = new boolean[G.V()]; 
        edgeTo = new int[C.V()]; 
        this.s = s;
        bfs(G，s);
    }
    private void bfs(Graph C, int s)
        Queue<Integer> queue = new Queue<Integer>(); 
        marked[s] = true;  // 标记起点
        queue.enqueue(s) ; // 将它加入队列 
        while (!queue.isEmpty()) {
            int v = queue.dequeue() ;  // 从队列中删去下一顶点
            for (int w : C.adj(v)) {
                if (!marked[w]) {      // 对于每个未被标记的相邻顶点
                    edgeTo[w] = v;     // 保存最短路径的最后一条边
                    marked[w] = true;  // 标记它，因为最短路径已知
                    queue.enqueue(w);  // 并将它添加到队列中
                }
            }
        }
    }    
        
    public boolean hasPathTo(int v) {
        return marked[v];
    }
    public Iterable<Integer> pathTo(int v) {
        // 和深度优先搜索中的实现相同
    }
}
```