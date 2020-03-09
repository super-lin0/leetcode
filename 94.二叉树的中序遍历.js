/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal1 = function(root, arr = []) {
  if (root) {
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
  }
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @description 迭代
 * 创建一个栈，遍历当前节点的左子树，全部入栈，然后将栈顶元素依次存入返回结果当中，再遍历当前节点的右子树
 */
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }

  return res;
};
// @lc code=end
