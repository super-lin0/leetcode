/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    let targetNum = target - nums[i];

    if (targetNum in map) {
      return [i, map[targetNum]];
    }

    map[nums[i]] = i;
  }

  return [];
};

// @lc code=end
