/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 * @description 中序遍历，递归
 */
var isValidBST1 = function(root, min = -Infinity, max = Infinity) {
  if (root === null) {
    return true;
  }
  let res = true;

  if (root.left) {
    if (
      root.left.val >= root.val ||
      root.left.val >= max ||
      root.left.val <= min
    ) {
      // console.log(root.left.val <= min);

      return false;
    }
    res = res && isValidBST(root.left, min, root.val);
  }
  if (root.right) {
    if (
      root.right.val <= root.val ||
      root.right.val <= min ||
      root.right.val >= max
    ) {
      return false;
    }

    res = res && isValidBST(root.right, root.val, max);
  }

  return res;
};

var isValidBST2 = function(root, min = -Infinity, max = Infinity) {
  if (root === null) {
    return true;
  }

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

// 优化写法
var isValidBST3 = function(root, prev = null, next = null) {
  if (root === null) {
    return true;
  }

  if ((prev && root.val <= prev.val) || (next && root.val >= next.val)) {
    return false;
  }

  return (
    isValidBST(root.left, prev, root) && isValidBST(root.right, root, next)
  );
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 中序遍历，迭代
 * 先遍历，将所有数据存放入数组中，然后针对排序好的数组进行判断
 */
var isValidBST4 = function(root) {
  let stack = [];
  let res = [];
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

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] >= res[i + 1]) {
      return false;
    }
  }

  return true;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 中序遍历，迭代方式
 * 利用中序遍历和二叉搜索树的特征，存入栈中的数据应该自底向上由小到大排好序了
 */
var isValidBST = function(root) {
  let stack = [];
  let current = root;
  let prevVal = "";

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();

    if (prevVal !== "" && current.val <= prevVal) {
      return false;
    }
    prevVal = current.val;
    current = current.right;
  }
  return true;
};

// @lc code=end
