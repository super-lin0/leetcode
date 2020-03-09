/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 * @description 递归
 */
var postorderTraversal1 = function(root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);
    arr.push(root.val);
  }
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @description 迭代方法
 * 1、使用stack循环压入左子树
 * 2、当遍历到左子节点为空时，弹栈，有右孩子节点时，从右孩子节点开始循环入栈
 * 3、需要记录上次输出的值，对比弹栈的右孩子节点，是否已经输出过，需不需要再次入栈
 */
var postorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let current = root;
  let last = null;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    let node = stack.pop();

    if (node.right === null || node.right === last) {
      res.push(node.val);
      last = node;
    } else {
      stack.push(node);
      current = node.right;
    }
  }
  return res;
};
// @lc code=end
