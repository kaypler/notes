# 链表

## 92. 反转链表 II
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


## 206. 反转链表
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