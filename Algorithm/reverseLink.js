/**
 * 反转链表, 每 k 个节点反转一次，不足 k 就保持原有顺序
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 描述： 单个链表反转，头尾不参与反转，返回反转后链表尾作为下一反转区间的头
 * @param {ListNode} head 
 * @param {ListNode} tail 
 * 例：反转 head->LN1->LN2->LN3->tail 为 head->LN3->LN2->LN1->tail, 返回 LN1 节点
 */
function reverse (head, tail) {
    if (head === null || head.next === null) {
        return head;
    }
    let pre = head, cur = head.next, first = cur, next;
    while (cur !== tail) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    head.next = pre;
    first.next = cur;
    return first;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (head === null || k === 1) {
      return head;
    }
    let count = 0, dummy = new ListNode(0), start = dummy, end = head;
    while (end !== null) {
        count ++;
        if (count % k === 0) {
            start = reverse(start, end);
            end = start.next;
        } else {
            end = end.next;
        }
    }
    return dummy.next;
}

