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
    try {
      if (this.length === 0) throw Error;
      let removedNode = this.tail;
      if (this.length > 1) {
        let current = this.head;
        while (current !== null) {
          if (current.next.next === null) {
            current.next = null;
            this.tail = current;
          }
          current = current.next;
        }
      } else {
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return removedNode.val;
    } catch (e) {
      console.log("The list is empty!", e);
    }

  }

  /** shift(): return & remove first item. */

  shift() {
    try {
      if (this.length === 0) throw Error;
      let removedNode = this.head;
      if (this.length > 1) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return removedNode.val;
    } catch (e) {
      console.log("The list is empty!", e);
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    try {
      if ((idx > this.length-1) || (idx < 0 )) throw Error;
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      return current.val;
    } catch(e) {
      console.log("The index is invalid", e);
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    try {
      if ((idx > this.length-1) || (idx < 0 )) throw Error;
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      current.val = val;
    } catch(e) {
      console.log("The index is invalid", e);
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    try {
      if ((idx > this.length) || (idx < 0 )) throw Error;
      let newNode = new Node(val);
      // insert at 0 index
      if (idx === 0) {
        newNode.next = this.head;
        this.head = newNode;
      }
      // insert at index 
      if ((idx > 0) && (idx <= this.length)) {
        let current = this.head;
        let previous;
        // find the current element at ind and a previous one
        for (let i = 0; i < idx; i++) {
          previous = current;
          current = current.next;
        }
        newNode.next = current;
        previous.next = newNode;
        // if an element is inserted at the end
        if (idx === this.length) this.tail=newNode;
      }
      this.length++;
    } catch(e) {
      console.log("The index is invalid", e);
    }
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

let ll = new LinkedList(["apple", "berry", "cherry"]);
ll.print();
ll.insertAt(2,"banana");
console.log("head", ll.head.val, "tail:",ll.tail.val,  "length",ll.length); 
ll.insertAt(1,"orange");
console.log("head", ll.head.val, "tail:",ll.tail.val,  "length",ll.length); 
ll.insertAt(2,"lime");
console.log("head", ll.head.val, "tail:",ll.tail.val,  "length",ll.length); 
ll.insertAt(6,"peach");
console.log("head", ll.head.val, "tail:",ll.tail.val,  "length",ll.length); 
ll.print();
// let lst = new LinkedList([5, 10]);
// let lst = new LinkedList();

// lst.print(); //5 
// console.log("head", ll.head.val, "tail:",ll.tail.val,  "length",ll.length); 

// lst.print(); //10


