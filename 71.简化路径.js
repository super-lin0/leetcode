/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const targetPath = [];
  const source = path.split("/").filter(item => item !== "" && item !== ".");

  // console.log(source);
  for (let i = 0; i < source.length; i++) {
    const element = source[i];
    // console.log("targetPath", targetPath, element);

    if (element === "..") {
      // 出现"../"的情况，向前返回一层
      targetPath.pop();
    } else {
      targetPath.push(element);
    }
  }

  // if (targetPath[targetPath.length - 1] === "") {
  //   targetPath.pop();
  // }

  // 以'/'开头
  // if (targetPath.length === 0) {
  //   return "/";
  // }

  // console.log("finally", targetPath);
  return `/${targetPath.join("/")}`;
};

// console.log(simplifyPath("/../"));

// @lc code=end
