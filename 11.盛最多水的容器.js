/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * @description 暴力循环，将所有解求最大值
 */
var maxArea1 = function(height) {
  let container = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      let y = Math.min(height[i], height[j]);
      let x = Math.abs(i - j);
      let max = x * y;

      if (max > container) {
        container = max;
      }
    }
  }
  return container;
};

/**
 * @param {number[]} height
 * @return {number}
 * @description 方法一简写
 */
var maxArea2 = function(height) {
  let container = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      container = Math.max(
        container,
        Math.min(height[i], height[j]) * Math.abs(i - j)
      );
    }
  }

  return container;
};

/**
 * @param {number[]} height
 * @return {number}
 * @description 双指针法
 * @description 两个指针分别放在数组头尾，使用maxArea保存最大面积，并将较小边向内侧移动，
 * 以期待更大面积出现，O(n)就可以搞定
 */
var maxArea = function(height) {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};
// @lc code=end
