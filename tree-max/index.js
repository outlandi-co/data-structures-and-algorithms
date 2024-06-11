class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirst() {
    if (!this.root) {
      return [];
    }

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return result;
  }
}

module.exports = { Node, BinaryTree };
