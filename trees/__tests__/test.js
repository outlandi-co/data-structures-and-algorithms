// test.js

const { Node, BinaryTree, BinarySearchTree } = require('../index');
const assert = require('assert');

// Helper function to build a binary search tree
function buildBST(values) {
  const bst = new BinarySearchTree();
  values.forEach(value => bst.add(value));
  return bst;
}

describe('Binary Tree and Binary Search Tree', () => {
  it('should instantiate an empty tree', () => {
    const tree = new BinaryTree();
    assert.strictEqual(tree.root, null);
  });

  it('should instantiate a tree with a single root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    assert.strictEqual(tree.root.value, 1);
  });

  it('should add left and right children properly to a node in BST', () => {
    const bst = buildBST([10, 5, 15]);
    assert.strictEqual(bst.root.value, 10);
    assert.strictEqual(bst.root.left.value, 5);
    assert.strictEqual(bst.root.right.value, 15);
  });

  it('should return a collection from a pre-order traversal', () => {
    const bst = buildBST([10, 5, 15, 2, 7]);
    assert.deepStrictEqual(bst.preOrder(), [10, 5, 2, 7, 15]);
  });

  it('should return a collection from an in-order traversal', () => {
    const bst = buildBST([10, 5, 15, 2, 7]);
    assert.deepStrictEqual(bst.inOrder(), [2, 5, 7, 10, 15]);
  });

  it('should return a collection from a post-order traversal', () => {
    const bst = buildBST([10, 5, 15, 2, 7]);
    assert.deepStrictEqual(bst.postOrder(), [2, 7, 5, 15, 10]);
  });

  it('should return true/false for the contains method', () => {
    const bst = buildBST([10, 5, 15, 2, 7]);
    assert.strictEqual(bst.contains(7), true);
    assert.strictEqual(bst.contains(20), false);
  });
});
