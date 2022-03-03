/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // The idea is to traverse the binary tree in a bottom-up manner using postorder traversal 
  // and calculate the minimum depth of left and right subtree for each encountered node. 
  // The minimum depth of the subtree rooted at any node is one more than the minimum depth of its left and right subtree.
  // If either left or right subtree does not exist for a node, consider the minimum depth returned by the other subtree.

  minDepth() {
    // empty-tree case
    if (!this.root) return 0;
    function minDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthHelper(node.right) + 1;
      if (node.right === null) return minDepthHelper(node.left) + 1;
      return (
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
      );
    }
    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(max=0, toVisitStack=[this.root], count=0) {
    // if tree-is-empty case:
    if (this.root === null) return 0;
    // if stack is empty: 
    if (toVisitStack.length === 0) return max;
    let current = toVisitStack.shift();
    // check if node is a leaf: no left, no right
    if ((current.left === null) && (current.right === null)) {
      if (count > max) {
        max = count;
        count = count - 1;
      }    
        return max;
    } 
    if (current.left) {
      toVisitStack.push(current.left);
      count = count + 1;
      this.maxDepth(max, toVisitStack, count);
    }
    if (current.right) {
      toVisitStack.push(current.right);
      count = count + 1;
      return this.maxDepth(max, toVisitStack, count);
    }
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // result - containes current maxSum, starts with -Infinity as we can have negative values
    let result = -Infinity;
    
    function maxSumHelper(node) {
      // leftSum contains maxSum of a left subtree
      let leftSum = 0;
      // rightSum contains maxSum of a right subtree
      let rightSum = 0;
      // maxSum=0 if this is a leaf
      if (node === null) return 0;
      
      // starts from the root and goes to the deepest left node 
      // leftSum = 0 if returned maxSum is a negative number
      leftSum = Math.max(maxSumHelper(node.left),0);

      // starts from the root and goes to the deepest right node 
      rightSum = Math.max(maxSumHelper(node.right),0);
      
      // check if (leftsum + node.val + rightSum) route is bigger than current result
      result = Math.max(result, node.val + leftSum + rightSum);
      
      // return maxSum to parent node
      return Math.max(leftSum, rightSum) + node.val;
    }

    maxSumHelper(this.root);
    return (result === -Infinity) ? 0 : result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return null;
    let queue = [this.root];
    let result = Infinity;
    while (queue.length) {
      let current = queue.shift();
      let currentVal = current.val;
      if ((currentVal > lowerBound) && (currentVal < result)) result = currentVal;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return (result === Infinity) ? null : result;
   }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

let smallTree;
let largeTree;
let emptyTree;

emptyTree = new BinaryTree();

// build small tree;
let smallLeft = new BinaryTreeNode(4);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);
