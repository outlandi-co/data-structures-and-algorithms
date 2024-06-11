const { Node, BinaryTree } = require('../breadthFirstTraversal');
const assert = require('assert');

describe('BinaryTree Breadth-First Traversal', () => {
  it('should traverse a complex tree correctly', () => {
    const tree = new BinaryTree(new Node(2));
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.right.right = new Node(9);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right.left = new Node(4);

    const expected = [2, 7, 5, 2, 6, 9, 5, 11, 4];
    assert.deepStrictEqual(tree.breadthFirst(), expected);
  });

  it('should return an empty array for an empty tree', () => {
    const emptyTree = new BinaryTree();
    assert.deepStrictEqual(emptyTree.breadthFirst(), []);
  });

  it('should traverse a single node tree correctly', () => {
    const singleNodeTree = new BinaryTree(new Node(1));
    assert.deepStrictEqual(singleNodeTree.breadthFirst(), [1]);
  });

  it('should traverse a left-heavy tree correctly', () => {
    const leftHeavyTree = new BinaryTree(new Node(1));
    leftHeavyTree.root.left = new Node(2);
    leftHeavyTree.root.left.left = new Node(3);
    leftHeavyTree.root.left.left.left = new Node(4);

    const expected = [1, 2, 3, 4];
    assert.deepStrictEqual(leftHeavyTree.breadthFirst(), expected);
  });

  it('should traverse a right-heavy tree correctly', () => {
    const rightHeavyTree = new BinaryTree(new Node(1));
    rightHeavyTree.root.right = new Node(2);
    rightHeavyTree.root.right.right = new Node(3);
    rightHeavyTree.root.right.right.right = new Node(4);

    const expected = [1, 2, 3, 4];
    assert.deepStrictEqual(rightHeavyTree.breadthFirst(), expected);
  });

  it('should traverse a tree with missing children correctly', () => {
    const missingChildrenTree = new BinaryTree(new Node(1));
    missingChildrenTree.root.left = new Node(2);
    missingChildrenTree.root.right = new Node(3);
    missingChildrenTree.root.left.right = new Node(4);
    missingChildrenTree.root.right.right = new Node(5);

    const expected = [1, 2, 3, 4, 5];
    assert.deepStrictEqual(missingChildrenTree.breadthFirst(), expected);
  });

  it('should traverse a large tree correctly', () => {
    const largeTree = new BinaryTree(new Node(1));
    let current = largeTree.root;
    for (let i = 2; i <= 15; i++) {
      current.left = new Node(i);
      current = current.left;
    }

    const expected = [];
    for (let i = 1; i <= 15; i++) {
      expected.push(i);
    }
    assert.deepStrictEqual(largeTree.breadthFirst(), expected);
  });
});
