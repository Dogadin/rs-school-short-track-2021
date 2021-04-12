/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const lengthX = matrix[0].length;
  const lengthY = matrix.length;
  const ret = Array(lengthY);
  for (let i = 0; i < lengthY; i++) {
    ret[i] = Array(lengthX);
  }
  for (let y = 0; y < lengthY; y++) {
    for (let x = 0; x < lengthX; x++) {
      let count = 0;
      const x0 = x === 0 ? 0 : x - 1;
      const x1 = x === lengthX - 1 ? lengthX - 1 : x + 1;
      const y0 = y === 0 ? 0 : y - 1;
      const y1 = y === lengthY - 1 ? lengthY - 1 : y + 1;
      for (let xt = x0; xt <= x1; xt++) {
        for (let yt = y0; yt <= y1; yt++) {
          if (matrix[yt][xt] === true) {
            if ((y !== yt) || (x !== xt)) {
              count++;
            }
          }
        }
      }
      ret[y][x] = count;
    }
  }
  return ret;
}

module.exports = minesweeper;
