/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if tree is empty return 0;
    if (this.root === null) return 0;
    let toVisitQueue = [this.root];
    let sum = 0;
    
    // go through all nodes in a queue
    while (toVisitQueue.length) {
      // if queue is not empty takes a first node
      let current = toVisitQueue.shift();
      // validation: if value is a number adds to sum, otherwise skips it
      if (!isNaN(current.val)) {
        sum = sum + current.val;
      }
      // if a current node have children push them to the queue 
      for (let child of current.children)
        toVisitQueue.push(child);
    }
    return sum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if tree is empty return 0;
    if (this.root === null) return 0;
    let toVisitQueue = [this.root];
    let count = 0;
    
    // go through all nodes in a queue
    while (toVisitQueue.length) {
      // if queue is not empty takes a first node
      let current = toVisitQueue.shift();
      // validation: if value is a number and it's even increments count, otherwise skips it
      if (!isNaN(current.val) && (current.val % 2 === 0)) {
        count++;
      }
      // if a current node have children push them to the queue 
      for (let child of current.children)
        toVisitQueue.push(child);
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // if tree is empty return 0;
    if (this.root === null) return 0;
    if (isNaN(lowerBound)) throw new Error("Invalif input");
    let toVisitQueue = [this.root];
    let count = 0;
    
    // go through all nodes in a queue
    while (toVisitQueue.length) {
      // if queue is not empty takes a first node
      let current = toVisitQueue.shift();
      // validation: if value is a number and it's even increments count, otherwise skips it
      if (!isNaN(current.val) && (current.val > lowerBound)) {
        count++;
      }
      // if a current node have children push them to the queue 
      for (let child of current.children)
        toVisitQueue.push(child);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
