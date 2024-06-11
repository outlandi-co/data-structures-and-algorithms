// index.js

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Pre-order traversal
  preOrder() {
    const results = [];
    const traverse = (node) => {
      if (!node) return;
      results.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  // In-order traversal
  inOrder() {
    const results = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      results.push(node.value);
      traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  // Post-order traversal
  postOrder() {
    const results = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };

    insertNode(this.root, newNode);
  }

  contains(value) {
    const searchNode = (node, value) => {
      if (!node) return false;
      if (node.value === value) return true;
      if (value < node.value) {
        return searchNode(node.left, value);
      } else {
        return searchNode(node.right, value);
      }
    };

    return searchNode(this.root, value);
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
