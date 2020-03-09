var solveNQueens = function(n) {
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ".")
  );

  // 用以记录是否已占有
  const col = Array.from({ length: n }, () => false);
  const diagLeft = Array.from({ length: 2 * n - 1 }, () => false);
  const diagRight = Array.from({ length: 2 * n - 1 }, () => false);

  const res = [];

  function backtrack(i) {
    console.log("=================");

    console.log("board", board);

    if (i === n) {
      res.push(board.map(row => row.join("")));
      return;
    }

    for (let j = 0; j < n; j++) {
      const l = i + j;
      const r = j - i + n - 1;

      console.log("i: %s j: %s l: %s r: %s", i, j, l, r);

      console.log(
        "col[%s]: %s, diagLeft[%s]: %s, diagRitght[%s]: %s",
        j,
        col[j],
        l,
        diagLeft[l],
        r,
        diagRight[r]
      );

      if (!col[j] && !diagLeft[l] && !diagRight[r]) {
        col[j] = diagLeft[l] = diagRight[r] = true;

        board[i][j] = "Q";
        backtrack(i + 1);
        col[j] = diagLeft[l] = diagRight[r] = false;
        console.log(col[j], diagLeft, diagRight);

        board[i][j] = ".";
      }
    }
  }

  backtrack(0);
  return res;
};

console.log(solveNQueens(4));
