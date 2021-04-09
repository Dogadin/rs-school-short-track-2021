/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const length = array.length - 1;
  let indMin = 0;
  let indMax = length;
  let ind;
  let ret = -1;
  do {
    ind = indMin + Math.floor((indMax - indMin) / 2);
    if (array[ind] === value) {
      ret = ind;
    } else if (array[ind] < value) {
      indMin = ind + 1;
    } else if (array[ind] > value) {
      indMax = ind - 1;
    }
  } while (ret === -1);
  return ret;
}

module.exports = findIndex;
