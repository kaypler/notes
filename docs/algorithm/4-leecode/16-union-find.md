# 并查集

## 886. 可能的二分法
`中等` 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。
给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和  bi 的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
[详细](https://leetcode.cn/problems/possible-bipartition/)

```golang
type unionFind struct {
    parent, rank[]int
}

func newUnionFind(n int) unionFind {
    parent := make([]int, n)
    for i := range parent {
        parent[i] = i
    }
    return unionFind{parent, make([]int, n)}
}

func (uf unionFind) find(x int) int {
    if uf.parent[x] != x {
        uf.parent[x] = uf.find(uf.parent[x])
    }
    return uf.parent[x]
}

func (uf unionFind) union(x, y int) {
    x, y := uf.find(x), uf.find(y) 
    if x == y {
        return
    }
    if uf.rank[x] > uf.rank[y] {
        uf.parent[y] = x
    } else if uf.rank[x] < uf.rank[y] {
        uf.parent[x] = y
    } else {
        uf.parent[y] = x
        uf.rank[x]++
    }
}

func (uf unionFind) isConnected(x, y int) bool {
    return uf.find(x) == uf.find(y)
}

func possibleBipartition(n int, dislike [][]int) bool {
    g := make([][]int, n)
    for _, d := range dislikes {
        x, y := d[0] - 1, d[1] - 1
        g[x] = append(g[x], y)
        g[y] = append(g[y], x)
    }
    uf := newUnionFind(n)
    for x, nodes := range g {
        for _, y := range nodes {
            uf.union(nodes[0], y)
            if uf.isConnected(x, y) {
                return false
            }
        }
    }
    return true
}
```

