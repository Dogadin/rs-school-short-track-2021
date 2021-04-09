/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  // eslint-disable-next-line no-use-before-define
  const arr = convertListToArray(l);
  // eslint-disable-next-line no-use-before-define
  return convertArrayToList(arr.filter((value) => value !== k));
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }
    return new ListNode(cur);
  }, null);
}

function convertListToArray(list, arr = []) {
  const { value, next } = list;
  arr.push(value);
  if (next === null) return arr;
  return convertListToArray(next, arr);
}

module.exports = removeKFromList;
