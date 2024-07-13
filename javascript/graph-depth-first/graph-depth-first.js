// Graph.js

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    } else {
      throw new Error('Node already exists in the graph.');
    }
  }

  addEdge(node1, node2) {
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      throw new Error('One or more nodes do not exist in the graph.');
    }
    const neighbors1 = this.adjacencyList.get(node1);
    const neighbors2 = this.adjacencyList.get(node2);
    if (!neighbors1.includes(node2)) {
      neighbors1.push(node2);
    }
    if (!neighbors2.includes(node1)) {
      neighbors2.push(node1);
    }
  }

  depthFirst(startNode) {
    const visited = new Set();
    const result = [];

    const dfs = (node) => {
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node);

        const neighbors = this.adjacencyList.get(node);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      }
    };

    dfs(startNode);
    return result;
  }
}

module.exports = Graph;
