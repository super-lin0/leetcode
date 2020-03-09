/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * @description 递归
 */
var maxDepth1 = function(root) {
  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * @description 迭代，利用队列实现
 * 1、从左到右，从上到下遍历
 * 2、遍历二叉树节点，依次将当前节点和它的左右子节点入队，再一一出队
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  let queue = [];
  let depth = 0;

  queue.push(root);

  while (queue.length > 0) {
    depth++;
    let size = queue.length;
    // console.log("queue::", depth, queue);

    for (let i = 0; i < size; i++) {
      let current = queue.shift();

      // console.log("current", current, i);

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
  return depth;
};

// @lc code=end
