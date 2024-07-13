class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  kthFromEnd(k) {
    if (k < 0) throw new Error('k must be a positive integer');

    let main_ptr = this.head;
    let ref_ptr = this.head;

    let count = 0;
    while (count < k) {
      if (!ref_ptr) throw new Error('k is out of bounds');
      ref_ptr = ref_ptr.next;
      count++;
    }

    while (ref_ptr && ref_ptr.next) {
      main_ptr = main_ptr.next;
      ref_ptr = ref_ptr.next;
    }

    if (!ref_ptr) throw new Error('k is out of bounds');

    return main_ptr.value;
  }
}

module.exports = { LinkedList, Node };
