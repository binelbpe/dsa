// class trieNode {
//   constructor() {
//     (this.children = {}), (this.end = false);
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new trieNode();
//   }
//   insert(val) {
//     let node = this.root;
//     for (let i of val) {
//       if (!node.children[i]) {
//         node.children[i] = new trieNode();
//       }
//       node = node.children[i];
//     }
//     node.end = true;
//   }

//   search(word) {
//     let node = this.root;
//     for (let i of word) {
//       if (!node.children[i]) {
//         return false;
//       }
//       node = node.children[i];
//     }
//     return node.end;
//   }

//   startsWith(str) {
//     let node = this.root;
//     for (let i of str) {
//       if (!node.children[i]) {
//         return false;
//       }
//       node = node.children[i];
//     }
//     return true;
//   }

//   longestPrefix(){
//     let node=this.root
//     let x=""
 
// while(!node.end&&Object.keys(node.children).length===1){
//   let [l]=Object.keys(node.children)
// x+=l
// node=node.children[l]
// }
//      return x
    
//   }
// }

// const trie = new Trie();

// // Insert words
// trie.insert("apple");
// trie.insert("app");
// trie.insert("appbanana");

// // Search for words
// console.log(trie.search("app")); // true
// console.log(trie.search("appl")); // false
// console.log(trie.search("apple")); // true

// // Check prefixes
// console.log(trie.startsWith("app")); // true
// console.log(trie.startsWith("ban")); // true
// console.log(trie.startsWith("bat")); // false
// console.log(trie.longestPrefix())



class Node{
  constructor(){
    this.children={},
    this.end=false
  }
}

class Trie{
  constructor(){
    this.root=new Node()
  }

  insert(word){
    let node=this.root
    for(let i of word){
      if(!node.children[i]){
        node.children[i]=new Node()
      }
      node=node.children[i]
    }
    node.end=true
  }


  search(word){
    let node=this.root
    for(let i of word){
      if(!node.children[i]){
        return false
      }
      node=node.children[i]
    }
    return node.end
  }

  prefix(word){
    let node=this.root
    for(let i of word){
      if(!node.children[i]){
        return false
      }
      node=node.children[i]
    }
    return true
  
  }


  longestPrefix(){
    let node=this.root
    let x=""
    if(!node){
      return null
    }
    while(!node.end&&Object.keys(node.children).length===1){
let [l]=Object.keys(node.children)
x+=l
node=node.children[l]
    }
    return x
  }
}


const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("appbanana");

// Search for words
console.log(trie.search("app")); // true
console.log(trie.search("appl")); // false
console.log(trie.search("apple")); // true

// Check prefixes
console.log(trie.prefix("app")); // true
console.log(trie.prefix("ban")); // true
console.log(trie.prefix("bat")); // false
console.log(trie.longestPrefix())