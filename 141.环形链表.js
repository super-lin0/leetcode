/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
/**
 * 解题思路:针对链表的每一个节点做一个标记，当遍历到某个节点，发现它被标记过，则证明是环形链表，
 * 否则不是环形链表，结束循环，返回false
 * @param {*} head
 */
var hasCycle1 = function(head) {
  while (head) {
    if (head.signal) {
      return true;
    } else {
      head.signal = "signal";
    }

    head = head.next;
  }
  return false;
};

/**
 *
 * @param {ListNode} head
 * @return {boolean}
 * @description 用Set将每个节点缓存起来，判断Set中是否已经存在该节点
 */
var hasCycle2 = function(head) {
  let cache = new Set();

  while (head) {
    if (cache.has(head)) {
      return true;
    } else {
      cache.add(head);
    }
    head = head.next;
  }
  return false;
};

/**
 *
 * @param {ListNode} head
 * @return {boolean}
 * @description 操场跑圈，如果是个圈，跑得快的一定会追上跑得慢的
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

// @lc code=end
