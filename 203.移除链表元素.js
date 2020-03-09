/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let ele = {
    next: head
  };

  let current = ele;

  while (current.next) {
    if (current.next.val == val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return ele.next;
};
// @lc code=end
