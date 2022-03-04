class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  
  // Questions: 
  // 1. if value is already in: ignore or insert?

  insert(val) {
    // 1. the tree is empty and inserting val will be a root
    // 2. adding a leaf
   
    let nodeInsert = new Node(val);
    // 1. empty-tree case scenario
    if (this.root === null) {
      this.root = nodeInsert;
      return this;
    } 
    // 2. adding a leaf
    let stack = [this.root]; 
    while (stack.length) {
      let current = stack.pop();
      if (val > current.val) {
        if (current.right === null) {
          current.right = nodeInsert;
          return this;
        }
        stack.push(current.right);
      } 
      if (val < current.val) {
        if (current.left === null) {
          current.left = nodeInsert;
          return this;
        }
        stack.push(current.left);
      } 
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    function insertHelper(node) {
      if (val < node.val) {
        if (node.left === null) {
          node.left = nodeInsert;
          return;
        }
        insertHelper(node.left);
      }
      if (val > node.val) {
        if (node.right === null) {
          node.right = nodeInsert;
          return;
        }
        insertHelper(node.right);
      }
      if (val === node.val) return;
    }

    let nodeInsert = new Node(val);
    // 1. empty-tree case scenario
    if (this.root === null) {
      this.root = nodeInsert;
      return this;
    } 
    // 2. adding a leaf
    insertHelper(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let stack = [this.root];
    while (stack.length) {
      let currentNode = stack.pop();
      if (currentNode === null) return;
      if (val === currentNode.val) return currentNode;
      if (val < currentNode.val) stack.push(currentNode.left);
      if (val > currentNode.val) stack.push(currentNode.right);
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findHelper(node) {
      if (node === null) return;
      if (val === node.val) return node;
      if (val < node.val) return findHelper(node.left);
      if (val > node.val) return findHelper(node.right);
    }
    return findHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visitedNotes = [];
    function traverse(node) {
      if (node) visitedNotes.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visitedNotes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visitedNotes = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node) visitedNotes.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visitedNotes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visitedNotes = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node) visitedNotes.push(node.val);
    }
    traverse(this.root);
    return visitedNotes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visiteNodes = [];
    const queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      if (node) visiteNodes.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visiteNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;


var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
binarySearchTree.insert(50);

console.log(binarySearchTree.bfs()); //.toEqual([15, 10, 20, 1, 12, 50, 5]);
