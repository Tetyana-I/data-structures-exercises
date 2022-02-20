/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.length;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head !== null) {
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
    return this.length;
  }

  /** pop(): return & remove last item. */

  pop() {


  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length > 1) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }

  /** print(): traverse & console.log each item. */

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
    console.log("length:", this.length);
  }
}

module.exports = LinkedList;

// let ll = new LinkedList(["apple", "berry", "cherry"]);

let lst = new LinkedList([5, 10]);

lst.print(); //5 
console.log("tail:",lst.tail.val, "head", lst.head.val, "length",lst.length); 

lst.print(); //10


// ll.print();