// const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');
class Queue {
  constructor() {
    this.arr = [];
  }

  get size() {
    return this.arr.length;
  }

  enqueue(element) {
    this.arr.push(element);
  }

  dequeue() {
    return this.arr.shift();
    // return this.arr.pop();
  }

  convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }

  convertListToArray(list, arr = []) {
    const { value, next } = list;
    arr.push(value);
    if (next === null) return arr;
    return this.convertListToArray(next, arr);
  }

}

module.exports = Queue;
