class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error('k must be a non-negative integer');
    }

    let length = 0;
    let current = this.head;

    while (current) {
      length++;
      current = current.next;
    }

    if (k >= length) {
      throw new Error('k is greater than or equal to the length of the linked list');
    }

    let targetIndex = length - k - 1;
    current = this.head;

    for (let i = 0; i < targetIndex; i++) {
      current = current.next;
    }

    return current.value;
  }
}

module.exports = { LinkedList, Node };
