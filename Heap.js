// class Heap{
//   constructor(){
//     this.heap=[]
//   }

//   parentIndex(index){
//     return Math.floor((index-1)/2)
//   }
//   leftChildIndex(index){
//     return index*2+1
//   }
//   rightChildIndex(index){
//     return index*2+2
//   }
//   swap(index1,index2){
//     [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//   }

//   heapifyUp(index){
//     let parentIndex=this.parentIndex(index)
//     while(index>0,this.heap[parentIndex]>this.heap[index]){
//       this.swap(index,parentIndex)
//       index=parentIndex
//       parentIndex=this.parentIndex(index)
//     }
//   }

//   insert(val){
//     this.heap.push(val)
//     this.heapifyUp(this.heap.length-1)
//   }

// heapifyDown(index){
//   let small=index
//   let left=this.leftChildIndex(index)
//   let right=this.rightChildIndex(index)

//   if(left<this.heap.length&&this.heap[left]<this.heap[small]){
//     small=left
//   }
//   if(right<this.heap.length&&this.heap[right]<this.heap[small]){
//     small=right
//   }
// if(small!=index){
//   this.swap(small,index)
//   this.heapifyDown(small)
// }
// }


// remove(){
//   if(this.heap.length===0){
//     return null
//   }

//   if(this.heap.length===1){
//     return this.heap.pop()
//   }

//   const min=this.heap[0]
//   this.heap[0]=this.heap.pop()
//   this.heapifyDown(0)
//   return min
// }

// getMin() {
//   return this.heap[0] || null;
// }

// }

// const minHeap = new Heap();

// // Insert elements into the heap
// minHeap.insert(10);
// minHeap.insert(15);
// minHeap.insert(20);
// minHeap.insert(17);
// minHeap.insert(8);

// console.log("Min-Heap:", minHeap.heap); // Output: [8, 10, 20, 17, 15]

// // Extract the minimum element
// console.log("Extracted Min:", minHeap.remove()); // Output: 8
// console.log("Heap after extraction:", minHeap.heap); // Output: [10, 15, 20, 17]

// // Get the minimum element without removing it
// console.log("Current Min:", minHeap.getMin()); // Output: 10

// // Insert a new element
// minHeap.insert(5);
// console.log("Heap after inserting 5:", minHeap.heap); // Output: [5, 10, 20, 17, 15]



// class Heap{
//   constructor(){
//     this.heap=[]
//   }
//   parentIndex(index){
//     return Math.floor((index-1)/2)
//   }

//   leftIndex(index){
//     return index*2+1
//   }
// rightIndex(index){
//   return index*2+2
// }
// swap(index1,index2){
//   [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index2]]
// }

// heapifyUp(index){
//   let parentIndex=this.parentIndex(index)
//   while(this.heap[index]<this.heap[parentIndex]){
//     this.swap(index,parentIndex)
//     index=parentIndex
//     parentIndex=this.parentIndex(index)
//   }
// }

// insert(val){
//   this.heap.push(val)
//   this.heapifyUp(this.heap.length-1)
// }

// heapifyDown(index){
//   let left=this.leftIndex(index)
//   let right=this.rightIndex(index)
//   let small=index
//   if(this.heap[small]>this.heap[left]){
//     this.swap(small,left)
//     small=left
//   }

//   if(this.heap[small]>this.heap[right]){
//     this.swap(small,right)
//     small=right
//   }

//   if(small!=index){
//     this.heapifyDown(small)
//   }
// }

// remove(){
//   if(!this.heap){
//     return null
//   }
//   if(this.heap.length<=1){
//     return this.heap.pop()
//   }

//   let min= this.heap[0]
//   this.heap[0]=this.heap.pop()
//   this.heapifyDown(0)
//   return min
// }

// getMin(){
//   return this.heap[0]
// }
// }


// const minHeap = new Heap();

// // Insert elements into the heap
// minHeap.insert(10);
// minHeap.insert(15);
// minHeap.insert(20);
// minHeap.insert(17);
// minHeap.insert(8);

// console.log("Min-Heap:", minHeap.heap); // Output: [8, 10, 20, 17, 15]

// // Extract the minimum element
// console.log("Extracted Min:", minHeap.remove()); // Output: 8
// console.log("Heap after extraction:", minHeap.heap); // Output: [10, 15, 20, 17]

// // Get the minimum element without removing it
// console.log("Current Min:", minHeap.getMin()); // Output: 10

// // Insert a new element
// minHeap.insert(5);
// console.log("Heap after inserting 5:", minHeap.heap); // Output: [5, 10, 20, 17, 15]





class Heap{
  constructor(){
    this.heap=[]
  }

  parentIndex(index){
    return Math.floor((index-1)/2)
  }

  leftIndex(index){
    return index*2+1
  }
  rightIndex(index){
    return index*2+2
  }

  swap(index1,index2){
    [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
  }
  
  heapifyUp(index){
    let parentIndex=this.parentIndex(index)
    while(this.heap[parentIndex]>this.heap[index]){
      this.swap(index,parentIndex)
      index=parentIndex
      parentIndex=this.parentIndex(index)
    }
  }
  insert(val){
    this.heap.push(val)
    this.heapifyUp(this.heap.length-1)
  }

  heapifyDown(index){
    let leftIndex=this.leftIndex(index)
    let rightIndex=this.rightIndex(index)
    let small=index
    if(this.heap[rightIndex]<this.heap[small]){
      small=rightIndex
    }
    if(this.heap[leftIndex]<this.heap[small]){
      small=leftIndex
    }

    if(small!==index){
      this.swap(small,index)
      this.heapifyDown(small)
    }

  }

  remove(){
    if(!this.heap){
      return null
    }
    if(this.heap.length<=1){
      return this.heap.pop()
    }
    let min=this.heap[0]
    this.heap[0]=this.heap.pop()
    this.heapifyDown(0)
    return min
  }

  getMin(){
    return this.heap[0]
  }

  kthsmall(k,index=0){
   
    let x=[]
    if(k>this.heap.length){
      return null
    }
    while(x.length<=k){
      x.push(this.remove())
    }
return x[k-1]
    
  }

  heapSort(){
    if(!this.heap){
      return null
    }
    if(this.heap.length<=1){
      return this.heap
    }
    let result=[]
while(this.heap.length){

result.push(  this.remove())
}
return result
    
  }
}

const minHeap = new Heap();

// Insert elements into the heap
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);
minHeap.insert(8);

console.log("Min-Heap:", minHeap.heap); // Output: [8, 10, 20, 17, 15]

// Extract the minimum element
console.log("Extracted Min:", minHeap.remove()); // Output: 8
console.log("Heap after extraction:", minHeap.heap); // Output: [10, 15, 20, 17]

// Get the minimum element without removing it
console.log("Current Min:", minHeap.getMin()); // Output: 10

// Insert a new element
minHeap.insert(5);
console.log("Heap after inserting 5:", minHeap.heap); // Output: [5, 10, 20, 17, 15]
console.log("sorted heap",minHeap.heapSort())
console.log("kthsmall",minHeap.kthsmall(4))
