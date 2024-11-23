// class HashTable{
//   constructor(size=55){
//     this.table=new Array(size)
//   }

//   hash(key){
//     let hash=0
//     for(let i=0;i<key.length;i++){
//       hash =(hash+key.charCodeAt(i)*i)%this.table.length
//     }
//     return hash
//   }

//   set(key,val){
//     let index=this.hash(key)
//     if(!this.table[index]){
//       this.table[index]=[]
//     }
//     this.table[index].push([key,val])
//   }

//   get(key){
//     let index=this.hash(key)
//     let bucket=this.table[index]
//     if(bucket){
//       for(let i=0;i<bucket.length;i++){
//         if(bucket[i][0]===key){
//           return bucket[i][1]
//         }
//       }
//     }
//     return undefined
//   }

//   remove(key){
//     let index=this.hash(key)
//     let bucket=this.table[index]
//     if(bucket){
//       for(let i=0;i<bucket.length;i++){
//         if(bucket[i][0]===key){
//           bucket.splice(i,0)
//           return true
//         }
//       }
//     }
//     return false
//   }

//   display(){
//     for(let i=0;i<this.table.length;i++){
//       if(this.table[i]){
//         console.log(i,this.table[i])
//       }
//     }
//   }
// }
// const hashTable = new HashTable();

// hashTable.set("name", "Alice");
// hashTable.set("age", 25);
// hashTable.set("occupation", "Engineer");

// console.log(hashTable.get("name"));    
// console.log(hashTable.get("age"));       
// console.log(hashTable.get("occupation")); 

// hashTable.remove("age");
// console.log(hashTable.get("age"));      

// hashTable.display();



class HashTable{
  constructor(size){
    this.table=new Array(size)
    this.size=size
  }

  hash(key){
    let sum=0
    for(let i=0;i<key.length;i++){
      sum=sum+key.charCodeAt(i)
    }
    return sum%this.size
  }

set(key,val){
  let index=this.hash(key)
  if(!this.table[index]){
    this.table[index]=[]
  }
  this.table[index].push([key,val])
}

get(key){
  let index=this.hash(key)
  if(!this.table[index]){
    return undefined
  }
let bucket=this.table[index]
if(bucket){
  for(let i=0;i<bucket.length;i++){
    if(bucket[i][0]===key){
      return bucket[i][1]
    }
  }
}
return undefined
}


remove(key){
  let index=this.hash(key)
  let bucket=this.table[index]
  if(bucket){
    for(let i=0;i<bucket.length;i++){
      if(bucket[i][0]===key){
        bucket.splice(i,1)
        return true
      }
    }
  }
  return false
}

print(){
  for(let i=0;i<this.table.length;i++){
    if(this.table[i]){
      console.log(i,":",this.table[i])
    }
  }
}
}

const hashTable = new HashTable(10);

hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("gea", 25);
hashTable.set("occupation", "Engineer");

console.log(hashTable.get("name"));    
console.log(hashTable.get("age"));       
console.log(hashTable.get("occupation")); 

hashTable.remove("age");
console.log(hashTable.get("age"));      

hashTable.print();

console.log(Object.is(25, 25));         // Output: true
console.log(Object.is("hello", "hello")); // Output: true
console.log(Object.is(NaN, NaN));         // Output: true
console.log(Object.is(0, -0));   
console.log(Object.is(0, 0));         
console.log(Object.is({}, {}));           // Output: false (different references)
console.log(Object.is([], []));   
console.log(Object.is("", ""));   
