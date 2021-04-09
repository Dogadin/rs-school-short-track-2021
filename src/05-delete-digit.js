/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const ret = arr.reduce((max, value, ind, arrR) => {
    const arrTemp = arrR.filter((valueF, indF) => indF !== ind);
    const curr = +arrTemp.join('');
    return max < curr ? curr : max;
  }, 0);
  return ret;
}

module.exports = deleteDigit;
