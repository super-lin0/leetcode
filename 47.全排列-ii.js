/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 先对nums升序排列，利用回溯算法，对每个遍历过的位置进行标记，进行剪枝
 */
var permuteUnique = function(nums) {
  let list = [];
  let used = new Array(nums.length).fill(false);
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  backtrack(list, [], nums, used);
  return list;
};

function backtrack(list, temp, nums, used) {
  console.log("temp", temp);
  console.log("list", list);

  if (temp.length === nums.length) {
    return list.push([...temp]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      const element = nums[i];

      if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
        continue;
      }

      used[i] = true;
      temp.push(element);
      backtrack(list, temp, nums, used);
      temp.pop();
      used[i] = false;
    }
  }
}
// @lc code=end
