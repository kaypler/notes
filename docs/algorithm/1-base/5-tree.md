# 树

## 二叉查找树
一颗二叉查找树（BST）是一颗二叉树，其中每个结点都含有一个Comparable的键（以及相关联的值）
且每个结点的键都大于其左树中的任意结点的键而小于右子树的任意结点的键。

```java
public class BST<Key extends Comparable<Key>, Value> {
  private Node root;                      // 二叉查找树的根结点

  private class Node {
    private Key key;                      // 键
    private Value val;                    // 值
    private Node left, right;             // 指向子树的链接
    private int N;                        // 以该结点为根的子树中的结点总数

    public Node(Key key, Value val, int N) {
      this.key = key; this.val = val; this.N = N;
    }
  }

  public int size() {
    return size(root);
  }

  public int size(Node x) {
    if (x == null) return 0;
    else return x.N;
  }

  public Value get(Key key) {
    return get(root, key);
  }

  private Value get(Node x, Key key) {
    if (x == null) return null;
    int cmp = key.compareTo(x.key);
    if (cmp < 0) return get(x.left, key);
    else if (cmp > 0) return get(x.right, key);
    else return x.val;
  }

  public void put(Key key, Value val) {
    root = put(root, key, val);
  }

  private Node put(Node x, Key key, Value val) {
    if (x == null) return new Node(key, val, 1);
    int cmp = key.compareTo(x.key);
    if (cmp < 0) x.left = put(x.left, key, val);
    else if (cmp > 0) x.right = put(x.right, key, val);
    else x.val = val;
    x.N = size(x.left) + size(x.right) + 1;
    return x;
  }

  public Key min() {
    return min(root).key;
  }

  private Node min(Node x) {
    if (x.left == null) return x;
    return min(x.left);
  }

  public Key floor(Key key) {
    Node x = floor(root, key);
    if (x == null) return null;
    return x.key;
  }

  private Node floor(Node x, Key key) {
    if (x == null) return null;
    int cmp = key.compareTo(x.key);
    if (cmp == 0) return x;
    if (cmp < 0) return floor(x.left, key);
    Node t = floor(x.right, key);
    if (t != null) return t;
    else return x;
  }

  public Key select(int k) {
    return select(root, k).key;
  }

  private Node select(Node x, int k) {
    // 返回排名为k的结点
    if (x == null) return null;
    int t = size(x.left);
    if (t > k) return select(x.left, k);
    else (t < k) return select(x.right, k - t -1);
    else return x;
  }

  public int rank(Key, key) {
    return rank(key, root);
  }

  private int rank(Key key, Node x) {
    // 返回以x为根结点的子树中小于x.key的键的数量
    if (x == null) return 0;
    int cmp = key.compareTo(x.key);
    if (cmp < 0) return rank(key, x.left);
    else (cmp > 0) return 1 + size(x.left) + rank(key, x.right);
    else return size(x.left);
  }

  public void deleteMin() {
    root = deleteMin(root);
  }

  private Node deleteMin(Node x) {
    if (x.left == null) return x.right;
    x.left = deleteMin(x.left);
    x.N = size(x.left) + size(x.right) + 1；
    return x;
  }

  public void delete(Key key) {
    root = delete(root, key);
  }
  private Node delete(Node x, Key key) {
    if (x == null) return null;
    int cmp = key.compareTo(x.key);
    if (cmp < 0) x.left = delete(x.left, key);
    else if (cmp > 0) x.right = delete(x.right, key);
    else {
      if (x.right == null) return x.left;
      if (x.left == null) return x.right;
      Node t = x;
      x = min(t.right);
      x.right = deleteMin(t.right);
      x.left = t.left;
    }
    x.N = size(x.left) + size(x.right) + 1；
    return x;
  }

  public Iterable<Key> keys() {
    return keys(min(), max());
  }

  public Iterable<Key> keys(Key lo, Key hi) {
    Queue<Key> queue = new Queue<Key>();
    keys(root, queue, lo, hi);
    return queue;
  }

  private void keys(Node x, Queue<Key> queue, Key lo, Key hi) {
    if (x == null) return;
    int cmplo = lo.compareTo(x.key);
    int cmphi = hi.compareTo(x.key);
    if (cmplo < 0) keys(x.left, queue, lo, hi);
    if (cmplo <= 0 && cmphi >= 0) queue.enqueue(x.key);
    if (cmphi > 0) keys(x.right, queue, lo, hi);
  }
}
```

## 红黑树
红黑二叉查找树背后的基本思想是用标准的二叉查找树（完全由2-节点构成）和一些额外的信息（替换3-节点）来表示2-3树。

红黑树满足以下条件：
- 红链接均为左链接；
- 没有任何一个节点同时和两条红链接相连；
- 该树是完美黑色平衡的，即任意空链接到根节点的路径上的黑链接数量相同；

```java
import java.util.NoSuchElementException;

public class RedBlackBST<Key extends Comparable<Key>, Value> {
  private static final boolean RED   = true;
  private static final boolean BLACK = false;
  private Node root;     // root of the BST

  // BST helper node data type
  private class Node {
    private Key key;           // key
    private Value val;         // associated data
    private Node left, right;  // links to left and right subtrees
    private boolean color;     // color of parent link
    private int size;          // subtree count

    public Node(Key key, Value val, boolean color, int size) {
      this.key = key;
      this.val = val;
      this.color = color;
      this.size = size;
    }
  }

  public RedBlackBST() {}

  private boolean isRed(Node x) {
    if (x == null) return false;
    return x.color == RED;
  }
  private int size(Node x) {
    if (x == null) return 0;
    return x.size;
  }
  public int size() {
    return size(root);
  }
  public boolean isEmpty() {
    return root == null;
  }

  public Value get(Key key) {
    if (key == null) throw new IllegalArgumentException("argument to get() is null");
    return get(root, key);
  }
  private Value get(Node x, Key key) {
    while (x != null) {
      int cmp = key.compareTo(x.key);
      if      (cmp < 0) x = x.left;
      else if (cmp > 0) x = x.right;
      else              return x.val;
    }
    return null;
  }
  public boolean contains(Key key) {
    return get(key) != null;
  }

  public void put(Key key, Value val) {
    if (key == null) throw new IllegalArgumentException("first argument to put() is null");
    if (val == null) {
      delete(key);
      return;
    }

    root = put(root, key, val);
    root.color = BLACK;
  }

  private Node put(Node h, Key key, Value val) { 
    if (h == null) return new Node(key, val, RED, 1);

    int cmp = key.compareTo(h.key);
    if      (cmp < 0) h.left  = put(h.left,  key, val); 
    else if (cmp > 0) h.right = put(h.right, key, val); 
    else              h.val   = val;

    // fix-up any right-leaning links
    if (isRed(h.right) && !isRed(h.left))      h = rotateLeft(h);
    if (isRed(h.left)  &&  isRed(h.left.left)) h = rotateRight(h);
    if (isRed(h.left)  &&  isRed(h.right))     flipColors(h);
    h.size = size(h.left) + size(h.right) + 1;

    return h;
  }

  public void deleteMin() {
    if (isEmpty()) throw new NoSuchElementException("BST underflow");

    // if both children of root are black, set root to red
    if (!isRed(root.left) && !isRed(root.right))
      root.color = RED;

    root = deleteMin(root);
    if (!isEmpty()) root.color = BLACK;
  }

  private Node deleteMin(Node h) { 
    if (h.left == null)
      return null;

    if (!isRed(h.left) && !isRed(h.left.left))
      h = moveRedLeft(h);

    h.left = deleteMin(h.left);
    return balance(h);
  }

  public void deleteMax() {
      if (isEmpty()) throw new NoSuchElementException("BST underflow");

      // if both children of root are black, set root to red
      if (!isRed(root.left) && !isRed(root.right))
        root.color = RED;

      root = deleteMax(root);
      if (!isEmpty()) root.color = BLACK;
  }

  private Node deleteMax(Node h) { 
    if (isRed(h.left))
      h = rotateRight(h);

    if (h.right == null)
      return null;

    if (!isRed(h.right) && !isRed(h.right.left))
      h = moveRedRight(h);

    h.right = deleteMax(h.right);

    return balance(h);
  }

  public void delete(Key key) { 
      if (key == null) throw new IllegalArgumentException("argument to delete() is null");
      if (!contains(key)) return;

      // if both children of root are black, set root to red
      if (!isRed(root.left) && !isRed(root.right))
        root.color = RED;

      root = delete(root, key);
      if (!isEmpty()) root.color = BLACK;
  }

  private Node delete(Node h, Key key) { 
    if (key.compareTo(h.key) < 0)  {
      if (!isRed(h.left) && !isRed(h.left.left))
        h = moveRedLeft(h);
      h.left = delete(h.left, key);
    }
    else {
      if (isRed(h.left))
        h = rotateRight(h);
      if (key.compareTo(h.key) == 0 && (h.right == null))
        return null;
      if (!isRed(h.right) && !isRed(h.right.left))
        h = moveRedRight(h);
      if (key.compareTo(h.key) == 0) {
        Node x = min(h.right);
        h.key = x.key;
        h.val = x.val;
        // h.val = get(h.right, min(h.right).key);
        // h.key = min(h.right).key;
        h.right = deleteMin(h.right);
      }
      else h.right = delete(h.right, key);
    }
    return balance(h);
  }

  private Node rotateRight(Node h) {
    Node x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = x.right.color;
    x.right.color = RED;
    x.size = h.size;
    h.size = size(h.left) + size(h.right) + 1;
    return x;
  }

  private Node rotateLeft(Node h) {
    Node x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = x.left.color;
    x.left.color = RED;
    x.size = h.size;
    h.size = size(h.left) + size(h.right) + 1;
    return x;
  }

  private void flipColors(Node h) {
    h.color = !h.color;
    h.left.color = !h.left.color;
    h.right.color = !h.right.color;
  }

  private Node moveRedLeft(Node h) {
    flipColors(h);
    if (isRed(h.right.left)) { 
      h.right = rotateRight(h.right);
      h = rotateLeft(h);
      flipColors(h);
    }
    return h;
  }

  private Node moveRedRight(Node h) {
    flipColors(h);
    if (isRed(h.left.left)) { 
      h = rotateRight(h);
      flipColors(h);
    }
    return h;
  }

  private Node balance(Node h) {
    if (isRed(h.right))                      h = rotateLeft(h);
    if (isRed(h.left) && isRed(h.left.left)) h = rotateRight(h);
    if (isRed(h.left) && isRed(h.right))     flipColors(h);

    h.size = size(h.left) + size(h.right) + 1;
    return h;
  }

  public int height() {
    return height(root);
  }
  private int height(Node x) {
    if (x == null) return -1;
    return 1 + Math.max(height(x.left), height(x.right));
  }

  public Key min() {
    if (isEmpty()) throw new NoSuchElementException("calls min() with empty symbol table");
    return min(root).key;
  } 
  private Node min(Node x) { 
    if (x.left == null) return x; 
    else                return min(x.left); 
  } 

  public Key max() {
    if (isEmpty()) throw new NoSuchElementException("calls max() with empty symbol table");
    return max(root).key;
  }
  private Node max(Node x) { 
    if (x.right == null) return x; 
    else                 return max(x.right); 
  } 

  public Key floor(Key key) {
    if (key == null) throw new IllegalArgumentException("argument to floor() is null");
    if (isEmpty()) throw new NoSuchElementException("calls floor() with empty symbol table");
    Node x = floor(root, key);
    if (x == null) throw new NoSuchElementException("argument to floor() is too small");
    else           return x.key;
  }
  private Node floor(Node x, Key key) {
    if (x == null) return null;
    int cmp = key.compareTo(x.key);
    if (cmp == 0) return x;
    if (cmp < 0)  return floor(x.left, key);
    Node t = floor(x.right, key);
    if (t != null) return t; 
    else           return x;
  }

  public Key ceiling(Key key) {
    if (key == null) throw new IllegalArgumentException("argument to ceiling() is null");
    if (isEmpty()) throw new NoSuchElementException("calls ceiling() with empty symbol table");
    Node x = ceiling(root, key);
    if (x == null) throw new NoSuchElementException("argument to ceiling() is too small");
    else           return x.key;  
  }
  private Node ceiling(Node x, Key key) {  
    if (x == null) return null;
    int cmp = key.compareTo(x.key);
    if (cmp == 0) return x;
    if (cmp > 0)  return ceiling(x.right, key);
    Node t = ceiling(x.left, key);
    if (t != null) return t; 
    else           return x;
  }

  public Key select(int rank) {
    if (rank < 0 || rank >= size()) {
      throw new IllegalArgumentException("argument to select() is invalid: " + rank);
    }
    return select(root, rank);
  }
  private Key select(Node x, int rank) {
    if (x == null) return null;
    int leftSize = size(x.left);
    if      (leftSize > rank) return select(x.left,  rank);
    else if (leftSize < rank) return select(x.right, rank - leftSize - 1); 
    else                      return x.key;
  }

  public int rank(Key key) {
    if (key == null) throw new IllegalArgumentException("argument to rank() is null");
    return rank(key, root);
  }
  private int rank(Key key, Node x) {
    if (x == null) return 0; 
    int cmp = key.compareTo(x.key); 
    if      (cmp < 0) return rank(key, x.left); 
    else if (cmp > 0) return 1 + size(x.left) + rank(key, x.right); 
    else              return size(x.left); 
  }

  public Iterable<Key> keys() {
    if (isEmpty()) return new Queue<Key>();
    return keys(min(), max());
  }
  public Iterable<Key> keys(Key lo, Key hi) {
    if (lo == null) throw new IllegalArgumentException("first argument to keys() is null");
    if (hi == null) throw new IllegalArgumentException("second argument to keys() is null");

    Queue<Key> queue = new Queue<Key>();
    keys(root, queue, lo, hi);
    return queue;
  }
  private void keys(Node x, Queue<Key> queue, Key lo, Key hi) { 
    if (x == null) return; 
    int cmplo = lo.compareTo(x.key); 
    int cmphi = hi.compareTo(x.key); 
    if (cmplo < 0) keys(x.left, queue, lo, hi); 
    if (cmplo <= 0 && cmphi >= 0) queue.enqueue(x.key); 
    if (cmphi > 0) keys(x.right, queue, lo, hi); 
  } 

  public int size(Key lo, Key hi) {
    if (lo == null) throw new IllegalArgumentException("first argument to size() is null");
    if (hi == null) throw new IllegalArgumentException("second argument to size() is null");

    if (lo.compareTo(hi) > 0) return 0;
    if (contains(hi)) return rank(hi) - rank(lo) + 1;
    else              return rank(hi) - rank(lo);
  }

  private boolean isBST() {
    return isBST(root, null, null);
  }
  private boolean isBST(Node x, Key min, Key max) {
    if (x == null) return true;
    if (min != null && x.key.compareTo(min) <= 0) return false;
    if (max != null && x.key.compareTo(max) >= 0) return false;
    return isBST(x.left, min, x.key) && isBST(x.right, x.key, max);
  }

  private boolean isSizeConsistent() { return isSizeConsistent(root); }
  private boolean isSizeConsistent(Node x) {
    if (x == null) return true;
    if (x.size != size(x.left) + size(x.right) + 1) return false;
    return isSizeConsistent(x.left) && isSizeConsistent(x.right);
  } 

  private boolean isRankConsistent() {
    for (int i = 0; i < size(); i++)
      if (i != rank(select(i))) return false;
    for (Key key : keys())
      if (key.compareTo(select(rank(key))) != 0) return false;
    return true;
  }

  private boolean is23() { return is23(root); }
  private boolean is23(Node x) {
    if (x == null) return true;
    if (isRed(x.right)) return false;
    if (x != root && isRed(x) && isRed(x.left))
        return false;
    return is23(x.left) && is23(x.right);
  } 

  private boolean isBalanced() { 
    int black = 0;     // number of black links on path from root to min
    Node x = root;
    while (x != null) {
      if (!isRed(x)) black++;
      x = x.left;
    }
    return isBalanced(root, black);
  }
  private boolean isBalanced(Node x, int black) {
    if (x == null) return black == 0;
    if (!isRed(x)) black--;
    return isBalanced(x.left, black) && isBalanced(x.right, black);
  }
}
```

## 二叉树的遍历

### 前序遍历
前序遍历：根结点 ---> 左子树 ---> 右子树

```java
// 递归实现
public void qianxu(node t)
{
	if (t != null) {
		System.out.print(t.value + " ");// 当前节点
		qianxu(t.left);
		qianxu(t.right);
	}
}

// 非递归实现
public void qianxu2(node t)
{
	Stack<node> q1 = new Stack<node>();
	if (t == null)
		return;
	if (t != null) {
		q1.push(t);
	}
	while (!q1.empty()) {
		node t1 = q1.pop();
		if (t1.right != null) {
			q1.push(t1.right);
		}
		if (t1.left != null) {
			q1.push(t1.left);
		}
		System.out.print(t1.value + " ");
	}
}
```

### 中序遍历
中序遍历：左子树---> 根结点 ---> 右子树，
二叉搜索树「中序遍历」得到的值构成的序列一定是升序的。

```java
// 递归实现
public void zhongxu(node t)// 中序遍历 
{
	if (t != null) {
		zhongxu(t.left);
		System.out.print(t.value + " ");// 访问完左节点访问当前节点
		zhongxu(t.right);
	}
}

// 非递归实现
public boolean zhongxu(TreeNode root) {
    Deque<TreeNode> stack = new LinkedList<TreeNode>();

    while (!stack.isEmpty() || root != null) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        System.out.println(root.val);
        root = root.right;
    }
    return true;
}
```

### 后序遍历
左子树 ---> 右子树 ---> 根结点

```java
// 递归实现
public void houxu(node t)
{
	if (t != null) {
		houxu(t.left);
		houxu(t.right);
		System.out.print(t.value + " "); 
	}
}

// 非递归实现
public void houxu3(node t)
{
	Stack<node> q1 = new Stack();
	Stack<node> q2 = new Stack();
	if (t == null)
		return;
	if (t != null) {
		q1.push(t);
	}
	while (!q1.isEmpty()) {
		node t1 = q1.pop();
		q2.push(t1);
		if (t1.left != null) {
			q1.push(t1.left);
		}
		if (t1.right != null) {
			q1.push(t1.right);
		}
	}
	while (!q2.isEmpty()) {
		node t1 = q2.pop();
		System.out.print(t1.value + " ");
	}
}
```

### 层序遍历
即逐层地，从左到右访问所有节点

```java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> ret = new ArrayList<List<Integer>>();
    if (root == null) {
        return ret;
    }

    Queue<TreeNode> queue = new LinkedList<TreeNode>();
    queue.offer(root);
    while (!queue.isEmpty()) {
        List<Integer> level = new ArrayList<Integer>();
        int currentLevelSize = queue.size();
        for (int i = 1; i <= currentLevelSize; ++i) {
            TreeNode node = queue.poll();
            level.add(node.val);
            if (node.left != null) {
                queue.offer(node.left);
            }
            if (node.right != null) {
                queue.offer(node.right);
            }
        }
        ret.add(level);
    }
    
    return ret;
}
```