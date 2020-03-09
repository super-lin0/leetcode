/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 冒泡排序
 */
var sortArray1 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 冒泡排序
 * 针对已经排好序的数组作出标记，不再继续循环
 */
var sortArray2 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let isSorted = true;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 快速排序
 * 定义两个数组，以第一个元素为目标元素，让数组中每个元素去和目标元素比较
 * 大于目标元素的放入左侧数组，小于目标元素的放入右侧数组，递归比较完成
 */
var sortArray = function(nums) {
  const sort = function(arr) {
    let leftArr = [];
    let rightArr = [];

    if (arr.length <= 0) {
      return [];
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[0]) {
        rightArr.push(arr[i]);
      } else {
        leftArr.push(arr[i]);
      }
    }
    return [...sort(leftArr), arr[0], ...sort(rightArr)];
  };

  const res = sort(nums);

  return res;
};

// @lc code=end
