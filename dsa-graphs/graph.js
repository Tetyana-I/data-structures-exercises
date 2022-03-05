class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for (let neighbour of vertex.adjacent.values()) {
      this.removeEdge(vertex, neighbour);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let visited = new Set();
    let visitOrder = [];
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      visited.add(current);
      visitOrder.push(current.value);
      for (let neighbour of current.adjacent) {
        if (!visited.has(neighbour)) {
          toVisitStack.push(neighbour); 
          visited.add(neighbour);
        }
      }
    } 
    return visitOrder;
  }

  // this function returns an array of Node values using recursive DFS 
  recursiveDFS(start, visited = new Set([start]), visitOrder = []) {
    let current = start;
    visitOrder.push(current.value);
    for (let neighbour of current.adjacent) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        this.recursiveDFS(neighbour, visited, visitOrder);
      }
    }
    return visitOrder;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let visited = new Set();
    let visitOrder = [];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      visited.add(current);
      visitOrder.push(current.value);
      for (let neighbour of current.adjacent) {
        if (!visited.has(neighbour)) {
          toVisitQueue.push(neighbour); 
          visited.add(neighbour);
        }
      }
    } 
    return visitOrder;
  }
}

module.exports = {Graph, Node};
