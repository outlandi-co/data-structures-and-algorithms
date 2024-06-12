// eslint-disable-next-line no-unused-vars
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function treeIntersection(tree1, tree2) {
  if (!tree1 || !tree2) {
    return new Set();
  }

  // Helper function to traverse the tree and store values in a hash map
  function traverseTree(root, values) {
    if (root) {
      values.add(root.value);
      traverseTree(root.left, values);
      traverseTree(root.right, values);
    }
  }

  // Initialize hash maps to store values from both trees
  const valuesTree1 = new Set();
  const valuesTree2 = new Set();

  // Traverse both trees and store values in hash maps
  traverseTree(tree1, valuesTree1);
  traverseTree(tree2, valuesTree2);

  // Find common values
  const commonValues = new Set([...valuesTree1].filter(value => valuesTree2.has(value)));

  return commonValues;
}

module.exports = treeIntersection;
