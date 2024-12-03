

class Graph{
constructor(){
  this.adjList={}
}

addVertex(vertex){
if(!this.adjList[vertex]){
  this.adjList[vertex]=[]
}
}
addEdge(vertex1,vertex2){
 if(this.adjList[vertex1]){
  this.adjList[vertex1].push(vertex2)
 } 
 if(this.adjList[vertex2]){
  this.adjList[vertex2].push(vertex1)
 } 
}

removeEdge( vertex1,vertex2){
  this.adjList[vertex1]=this.adjList[vertex1].filter(i=>i!=vertex2)
  this.adjList[vertex2]=this.adjList[vertex2].filter(i=>i!=vertex1)
}

removeVertex(vertex){
  while(this.adjList[vertex].length>0){
    let r=this.adjList[vertex].pop
    this.removeEdge(r,vertex)
  }
  delete this.adjList[vertex]
}


bfs(start){
  let queue=[start]
  let result=[]
  let visited={}
  visited[start]=true
  while(queue.length){
    let vertex=queue.shift()
    result.push(vertex)

    this.adjList[vertex].forEach(i => {
      if(!visited[i]){
        visited[i]=true
        queue.push(i)
      }
    });
  }
  return result
}

dfs(start){
  let stack=[start]
  let visited={}
  let result=[]
  visited[start]=true

  while(stack.length){
    let vertex=stack.pop()
    result.push(vertex)

    this.adjList[vertex].forEach(i=>{
      if(!visited[i]){
        visited[i]=true
        stack.push(i)
      }
    })
  }
  return result
}
}



// Example usage:
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// BFS and DFS Traversals
console.log("BFS:", graph.bfs("A")); // BFS: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log("DFS (Iterative):", graph.dfs("A")); // DFS (Iterative): [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log("DFS (Recursive):", graph.dfs("F")); // DFS (Recursive): [