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
  
  removeEdge(vertex1,vertex2){
this.adjList[vertex1]=this.adjList[vertex1].filter(v=>v!==vertex2)

this.adjList[vertex2]=this.adjList[vertex2].filter(v=>v!==vertex1)
  }


  removeVertex(vertex){
    while(this.adjList[vertex].length){
      const rv=this.adjList[vertex].pop()
      this.removeEdge(vertex,rv)
    }
    delete this.adjList[vertex]
  }


  dfs(start){
    let visited=new Set()
    let result=[]
    const help=(vertex)=>{
      if(!visited){
        return
      }
visited.add(vertex)
result.push(vertex)
for(let i of this.adjList[vertex]){
 if(!visited.has(i)){
  help(i)
 }

}
    }
    help(start)
    return result
  }


  bfs(start){
    let visited=new Set()
    let result=[]
    let queue=[start]

    visited.add(start)
    while(queue.length>0){
      let vertex=queue.shift()
      result.push(vertex)
      for(let i of this.adjList[vertex]){
        if(!visited.has(i)){
          queue.push(i)
          visited.add(i)
        }
      }
    }
    return result
  }

}

const graph = new Graph();


graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
console.log(graph.adjList);
graph.removeVertex("D")
console.log(graph.adjList);
const dfsResult = graph.dfs('A');
console.log("DFS Traversal:", dfsResult); 
const bfsResult = graph.bfs('A');
console.log("BFS Traversal:", bfsResult);