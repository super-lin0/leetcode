/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist1 = function(board, word) {
  this.m = board.length;

  if (m === 0) {
    return false;
  }

  this.n = board[0].length;
  // 初始化一个与board相同的二维数组，用false填充
  this.marked = Array.from({ length: this.m }, x =>
    Array.from({ length: this.n }, y => false)
  );
  // 定义搜索的方向
  this.direction = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0]
  ];
  this.word = word;
  this.board = board;
  // console.log(this.marked);

  for (let i = 0; i < this.m; i++) {
    for (let j = 0; j < this.n; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

function search(i, j, start) {
  // console.log(i, j, start);
  if (start === this.word.length - 1) {
    return this.board[i][j] == this.word[start];
  }
  // console.log(this.board[i][j], this.word[start]);

  if (this.board[i][j] === this.word[start]) {
    this.marked[i][j] = true;
    // console.log(this.marked[i][j]);
    // console.log(this.marked);

    for (let k = 0; k < 4; k++) {
      const newX = i + this.direction[k][0];
      const newY = j + this.direction[k][1];
      // console.log("newX %s newY %s", newX, newY);

      if (inArea(newX, newY) && !this.marked[newX][newY]) {
        if (search(newX, newY, start + 1)) {
          return true;
        }
      }
    }
    this.marked[i][j] = false;
  }

  return false;
}

function inArea(x, y) {
  return x >= 0 && x < m && y >= 0 && y < n;
}

var exist2 = function(board, word) {
  if (board.length === 0) {
    return false;
  }

  if (word.length === 0) {
    return true;
  }

  const row = board.length;
  const col = board[0].length;

  const search = (i, j, current) => {
    if (i < 0 || i >= row) {
      return false;
    }

    if (j < 0 || j >= col) {
      return false;
    }

    const letter = board[i][j];

    if (letter !== word[current]) {
      return false;
    }

    if (current === word.length - 1) {
      return true;
    }

    board[i][j] = null;

    const ret =
      search(i + 1, j, current + 1) ||
      search(i - 1, j, current + 1) ||
      search(i, j + 1, current + 1) ||
      search(i, j - 1, current + 1);

    board[i][j] = letter;
    return ret;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

var exist = function(board, word) {
  if (board.length === 0) {
    return false;
  }

  if (word.length === 0) {
    return true;
  }

  const row = board.length;
  const col = board[0].length;
  const mark = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  );
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  const search = (i, j, current) => {
    // 边界判断
    if (i < 0 || i >= row || j < 0 || j >= col) {
      return false;
    }

    const letter = board[i][j];

    if (letter !== word[current]) {
      return false;
    }

    // 如果当前节点被标记遍历过，则直接返回false
    if (mark[i][j]) {
      return false;
    }

    // 遍历到word最后一个字母且命中，返回true
    if (current === word.length - 1) {
      return true;
    }

    // 上述条件都不满足，则当前字母被命中，标记为true
    mark[i][j] = true;

    // 向当前字母上下左右四个方向遍历
    for (let k = 0; k < 4; k++) {
      const newX = i + direction[k][0];
      const newY = j + direction[k][1];

      if (search(newX, newY, current + 1)) {
        return true;
      }
    }

    // 四个方向都没有找到，则返回false,将当前字母位置标记为false，继续向下一个位置移动
    mark[i][j] = false;

    return false;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

// @lc code=end
