/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @description 递归方式
 */
var preorderTraversal1 = function(root, arr = []) {
  if (root) {
    arr.push(root.val);
    preorderTraversal(root.left, arr);
    preorderTraversal(root.right, arr);
  }
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @description 迭代
 * 设置栈，将当前节点以及左子节点入栈，遍历完左子节点之后，遍历栈顶元素的右子树
 */
var preorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      res.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }

  return res;
};
// @lc code=end
