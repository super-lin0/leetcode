/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * @description 暴力循环，需要注意的是n为负数的情况
 */
var myPow1 = function(x, n) {
  let X = parseFloat(x);
  if (n < 0) {
    X = 1 / X;
    n = -n;
  }
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= X;
  }

  return res;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * @description 递归+二分
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  if (n < 0) {
    return 1 / myPow(x, -n);
  }

  const half = myPow(x, Math.floor(n / 2));
  const rest = myPow(x, Math.floor(n % 2));

  return half * half * rest;
};
// @lc code=end
