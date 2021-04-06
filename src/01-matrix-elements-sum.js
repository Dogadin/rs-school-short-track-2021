/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const lenX = matrix[0].length;
  const lenY = matrix.length;
  let sum = 0;
  for (let x = 0; x < lenX; x++) {
    for (let y = 0; y < lenY; y++) {
      if (matrix[y][x] === 0) break;
      sum += matrix[y][x];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
