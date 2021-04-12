const ListNode = require('../extensions/list-node');

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

class Queue {
  constructor() {
    this.node = new ListNode();
    this.node.value = null;
    this.node.next = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element); // creates the node using class Node
    node.value = element;
    node.next = this.length === 0 ? null : this.node;
    this.node = node;
    this.length++;
  }

  dequeue() {
    let { node } = this;
    let nodePrev = null;
    if (node.next !== null) {
      do {
        nodePrev = node;
        node = node.next;
      } while (node.next !== null);
    }
    if (nodePrev !== null) {
      nodePrev.next = null;
      this.length--;
    }
    const ret = node.value;
    return ret;
  }
}

module.exports = Queue;
