/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 * 使用蛮力法
 * 1、一行只可能有一个皇后，且一列也只可能有一个皇后
 * 2、对于所有的主对角线（/）行号+列号 = 常数，对于所有的次对角线（\），行号-列号=常数
 *  col[j] 表示第j列是否已经有皇后
 *  diagLeft[l] 表示从左上角到右下角第l行是否已有皇后，l的计算方式为 l = i - j + n -1(为保证所有l值>=0，故+n-1)
 *  diagRight[r] 表示从右上角到左下角的第r行是否已有皇后，r的计算方式为 r = i  + j
 */
var solveNQueens1 = function(n) {
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ".")
  );

  // console.log(board);
  const col = Array.from({ length: n }, () => false);
  const diagLeft = Array.from({ length: 2 * n - 1 }, () => false);
  const diagRight = Array.from({ length: 2 * n - 1 }, () => false);
  const res = [];

  const backtrack = i => {
    // console.log("========================");
    // console.log("board", board);

    if (i === n) {
      return res.push(board.map(row => row.join("")));
    }

    for (let j = 0; j < n; j++) {
      const l = i - j + n - 1;
      const r = i + j;

      // console.log("i: %s j: %s l: %s r: %s", i, j, l, r);

      // console.log(
      //   "col[%s]: %s, diagLeft[%s]: %s, diagRitght[%s]: %s",
      //   j,
      //   col[j],
      //   l,
      //   diagLeft[l],
      //   r,
      //   diagRight[r]
      // );

      if (!col[j] && !diagLeft[l] && !diagRight[r]) {
        col[j] = diagLeft[l] = diagRight[r] = true;

        board[i][j] = "Q";
        backtrack(i + 1);
        col[j] = diagLeft[l] = diagRight[r] = false;
        board[i][j] = ".";
      }
    }
  };

  backtrack(0);
  return res;
};

var solveNQueens = function(n) {
  let res = [];
  let board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ".")
  );
  let diagLeft = Array.from({ length: 2 * n - 1 }, () => false);
  let diagRight = Array.from({ length: 2 * n - 1 }, () => false);
  let col = Array.from({ length: n }, () => false);

  const backtrack = i => {
    if (i === n) {
      res.push(board.map(row => row.join("")));
    }

    for (let j = 0; j < n; j++) {
      const l = i - j + n - 1;
      const r = i + j;

      if (!col[j] && !diagLeft[l] && !diagRight[r]) {
        col[j] = diagLeft[l] = diagRight[r] = true;

        board[i][j] = "Q";
        backtrack(i + 1);
        col[j] = diagLeft[l] = diagRight[r] = false;
        board[i][j] = ".";
      }
    }
  };

  backtrack(0);
  return res;
};
// @lc code=end
