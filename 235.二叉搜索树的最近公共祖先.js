/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @description 递归
 * 1、从根节点开始遍历
 * 2、如果节点p和节点q都在右子树上，那么以右孩子为根节点继续1的操作
 * 3、如果节点p和节点q都在左子树上，那么以左孩子为根节点继续1的操作
 * 4、如果条件2和条件3都不成立，这就意味着我们已经找到节点p和节点q的LCA了
 */
var lowestCommonAncestor1 = function(root, p, q) {
  // console.log(root, p, q);

  const current = root.val;
  const pVal = p.val;
  const qVal = q.val;

  if (pVal < current && qVal < current) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (pVal > current && qVal > current) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @description 迭代
 * 与递归思想类似
 */
var lowestCommonAncestor = function(root, p, q) {
  let current = root;
  let pVal = p.val;
  let qVal = q.val;

  while (current) {
    let curVal = current.val;

    if (curVal < pVal && curVal < qVal) {
      current = current.right;
    } else if (curVal > pVal && curVal > qVal) {
      current = current.left;
    } else {
      return current;
    }
  }

  return null;
};
// @lc code=end
