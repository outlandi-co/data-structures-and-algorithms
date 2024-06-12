const TreeNode = require('../tree-intersection');
const treeIntersection = require('../tree-intersection');

// Test cases
test('Find common values in two binary trees', () => {
  // Example trees
  const tree1 = new TreeNode(100);
  tree1.left = new TreeNode(125);
  tree1.right = new TreeNode(200);
  tree1.left.left = new TreeNode(160);
  tree1.left.right = new TreeNode(175);
  tree1.right.right = new TreeNode(350);
  tree1.right.right.right = new TreeNode(500);

  const tree2 = new TreeNode(42);
  tree2.left = new TreeNode(100);
  tree2.right = new TreeNode(200);
  tree2.left.left = new TreeNode(160);
  tree2.left.right = new TreeNode(125);
  tree2.right.right = new TreeNode(350);
  tree2.right.right.left = new TreeNode(175);

  expect(treeIntersection(tree1, tree2)).toEqual(new Set([100, 160, 125, 175, 200, 350]));

  // Test case 2
  const tree3 = new TreeNode(1);
  tree3.left = new TreeNode(2);
  tree3.right = new TreeNode(3);

  const tree4 = new TreeNode(4);
  tree4.left = new TreeNode(1);
  tree4.right = new TreeNode(5);

  expect(treeIntersection(tree3, tree4)).toEqual(new Set([1]));

  // Test case 3
  expect(treeIntersection(null, tree4)).toEqual(new Set());

  // Test case 4
  expect(treeIntersection(tree3, null)).toEqual(new Set());

  // Edge case: both trees are null
  expect(treeIntersection(null, null)).toEqual(new Set());
});
