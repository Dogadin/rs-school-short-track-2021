/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map();
  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.');
    const length = arr.length - 1;
    let key = '';
    for (let j = length; j >= 0; j--) {
      key += `.${arr[j]}`;
      let value = map.has(key) ? map.get(key) : 0;
      value++;
      map.set(key, value);
    }
  }
  return Object.fromEntries(map);
}

module.exports = getDNSStats;
