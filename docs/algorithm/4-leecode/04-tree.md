# 树的应用

## 98.验证二叉搜索树
`中等`给定一个二叉树，判断其是否是一个有效的二叉搜索树。假设一个二叉搜索树具有如下特征：
- 节点的左子树只包含小于当前节点的数。
- 节点的右子树只包含大于当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

[详细](https://leetcode-cn.com/problems/validate-binary-search-tree/)
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root != null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个inorder，说明不是二叉树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};
```

## 102.二叉树的层序遍历
`中等`给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
[详细](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);
    while(q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 0; i < currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length-1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }

    return ret;
};
```