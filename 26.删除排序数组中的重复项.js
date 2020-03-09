/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @description 双指针法
 * 定义两个快慢指针i,j，
 *  nums[i] === nums[j],则j++
 *  若nums[i] !== nums[j],则i ,j分别向后移动，并将nums[j]赋值给nums[i]
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
// @lc code=end
