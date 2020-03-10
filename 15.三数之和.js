/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=s
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 参照leetcode精选题解，https://leetcode-cn.com/problems/3sum/solution/pai-xu-shuang-zhi-zhen-zhu-xing-jie-shi-python3-by/
 * 1、边界处理，对于非数组或者数组长度小于3，则返回空数组
 * 2、对数组进行排序
 * 3、遍历排序后的数组
 *  - 若 nums[i] > 0：因为已经排序好，所以后面不可能有三个数加和等于 0，直接返回结果。
 *  - 对于重复元素：跳过，避免出现重复解
 *  - 令左指针 L=i+1，右指针 R=n-1，当 L < R 时，执行循环：
 *    - 当 nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,R 移到下一位置，寻找新的解
 *    - 若和大于 0，说明 nums[R] 太大，R 左移
 *    - 若和小于 0，说明 nums[L] 太小，L 右移
 */
var threeSum1 = function(nums) {
  let res = [];
  if (!nums || nums.length < 3) return res;
  nums = nums.sort((a, b) => a - b); // 排序

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1,
      r = nums.length - 1;

    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l = l + 1;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r = r - 1;
        }
        l = l + 1;
        r = r - 1;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r = r - 1;
      } else {
        l = l + 1;
      }
    }
  }

  return res;
};

var threeSum = function(nums) {
  let res = [];
  if (!nums || nums.length < 3) return res;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] + nums[i] === 0) {
        res.push([nums[left], nums[right], nums[i]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        left++;

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

// @lc code=end
