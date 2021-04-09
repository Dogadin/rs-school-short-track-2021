/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let char = '';
  let count = 0;
  let ret = '';
  for (let i = 0; i < arr.length; i++) {
    if (char !== arr[i]) {
      if (count !== 0) ret += count > 1 ? count + char : char;
      count = 0;
      char = arr[i];
    }
    count++;
  }
  if (count !== 0) ret += count > 1 ? count + char : char;
  return ret;
}

module.exports = encodeLine;
