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
 * @description 暴力破解
 */
var twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
  return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description  空间换时间
 */
var twoSum1 = function(nums, target) {
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

/**
 *
 * @param {*} nums
 * @param {*} target
 * @description 空间换时间，方法二
 */
var twoSum = function(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return [i, map[nums[i]]];
    }

    map[target - nums[i]] = i;
  }
  return [];
};

// @lc code=end
