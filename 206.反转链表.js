/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 * 解题思路：1、将当前节点做标记mid，2、cur后移，3、将mid next指向prev，4、prev后移
 */
var reverseList = function(head) {
  let prev = null;
  let cur = head;

  while (cur) {
    // let mid = cur;
    // cur = cur.next;
    // mid.next = prev;

    // prev = mid;

    [cur.next, prev, cur] = [prev, cur, cur.next];
  }

  return prev;
};
// @lc code=end
