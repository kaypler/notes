# 链表

## 25.K 个一组翻转链表
`困难`给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。[详细](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;

    let pre = dummy_node;

    while(head) {
        let tail = pre;
        // 查看剩余部分长度是否大于等于k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return dummy_node.next;
            }
        }

        const next = tail.next;
        [head, tail] = reverseSub(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = next;
        pre = tail;
        head = tail.next;
    }


    return dummy_node.next;
};

var reverseSub = function(left, right) {
    let prev = right.next;
    let p = left;

    while (prev != right) {
        const next = p.next;  
        p.next = prev;
        prev = p;
        p = next;
    }

    return [right, left];
}
```



## 92.反转链表 II
`中等`给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，
返回反转后的链表。[详细](https://leetcode-cn.com/problems/reverse-linked-list-ii/)
```js
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;

    let pre = dummy_node;
    for (let i = 0; i < left -1; i++) {
        pre = pre.next;
    }

    let cur = pre.next;
    for  (let i = 0; i < right - left; i++) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;
};
```

## 141.环形链表
`简单`给定一个链表，判断链表中是否有环。[详细](https://leetcode-cn.com/problems/linked-list-cycle/)
```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }
        ListNode slow = head;
        ListNode fast = head.next;
        while (slow != fast) {
            if (fast == null || fast.next == null) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return true;
    }
}
```

## 206.反转链表
`简单`反转一个单链表。[详细](https://leetcode-cn.com/problems/reverse-linked-list/)
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var cur = head;
    var pre = null;
    while (cur) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};
```