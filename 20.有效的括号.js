/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const source = { "(": ")", "[": "]", "{": "}" };
  const target = [];

  for (let a of s) {
    if (a in source) {
      target.push(a);
    } else {
      if (a !== source[target.pop()]) {
        return false;
      }
    }
  }

  return !target.length;
};

// @lc code=end
