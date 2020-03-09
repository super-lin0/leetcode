/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 *  解题思路:针对链表的每一个节点添加一个index属性，标志该节点的位置，
 *  循环遍历链表，找到第一个循环的节点，返回其下标
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle1 = function(head) {
  let i = 0;

  while (head) {
    if (head.index >= 0) {
      return head;
    } else {
      head.index = i;
    }
    head = head.next;
    i++;
  }

  return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description 使用Set用来缓存所有的节点，如果Set中存在该节点，则证明入环，返回即可
 */
var detectCycle2 = function(head) {
  let cache = new Set();

  while (head) {
    if (cache.has(head)) {
      return head;
    } else {
      cache.add(head);
    }
    head = head.next;
  }

  return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description 使用快慢节点方式，假设起始节点至入环节点距离为a,从入环处至快慢节点相遇距离为b,从相遇处至入环处距离为c,
 *    则 2*slow = fast,即2*(a + b) = a + b + c + b,简化，为 a = c
 *
 */
var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  let start = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      while (start) {
        if (start === slow) {
          return start;
        }
        start = start.next;
        slow = slow.next;
      }
    }
  }

  return null;
};
// @lc code=end
