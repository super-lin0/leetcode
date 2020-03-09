/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 * @description 循环，
 */
var mySqrt1 = function(x) {
  let i = 0;

  while (i <= x) {
    if (i * i === x) {
      return i;
    }

    if (i * i < x && (i + 1) * (i + 1) > x) {
      return i;
    }
    i++;
  }
};

var mySqrt = function(x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let left = 1;
  let right = x;

  while (left <= right) {
    let mid = left + ((right - left) >> 2);

    let square = mid * mid;

    if (square == x) {
      return mid;
    } else if (square > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    // console.log("==========");
    // console.log("right", right);
    // console.log("left", left);
    // console.log("mid", mid);
    // console.log("square", square);
  }

  return right;
};

// @lc code=end
