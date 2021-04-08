/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const map1 = new Map();
  for (let i = 0; i < arr1.length; i++) {
    let value = map1.has(arr1[i]) ? map1.get(arr1[i]) : 0;
    value++;
    map1.set(arr1[i], value);
  }
  const map2 = new Map();
  for (let i = 0; i < arr2.length; i++) {
    let value = map2.has(arr2[i]) ? map2.get(arr2[i]) : 0;
    value++;
    map2.set(arr2[i], value);
  }
  let ret = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const entry1 of map1.entries()) {
    if (map2.has(entry1[0])) {
      const value1 = entry1[1];
      const value2 = map2.get(entry1[0]);
      ret += value1 < value2 ? value1 : value2;
    }
  }
  return ret;
}

module.exports = getCommonCharacterCount;
