class Node{
  constructor(value){
    this.value=value,
    this.right=null,
    this.left=null
  }
}

class BST{
  constructor(){
    this.root=null
  }

  insert(value){
    let node= new Node(value)
    if(!this.root){
      this.root=node
      return
    }
    let curr=this.root
    while(curr){
if(curr.value>value){
  if(!curr.left){
    curr.left = node
    return
  }
  curr=curr.left
}else{
  if(!curr.right){
    curr.right=node
    return
  }
curr=curr.right
}
    }
  }


  preorder(curr=this.root,result=[]){
    if(!curr){
      return result
    }
    result.push(curr.value)
    this.preorder(curr.left,result)
    this.preorder(curr.right,result)
    return result
  }

  
  inorder(curr=this.root,result=[]){
    if(!curr){
      return result
    }
    this.inorder(curr.left,result)
    result.push(curr.value)
    this.inorder(curr.right,result)
    return result
  }

  
  postorder(curr=this.root,result=[]){
    if(!curr){
      return result
    }
    this.postorder(curr.left,result)
    this.postorder(curr.right,result)
    result.push(curr.value)
    return result
  }


  search(val){
    let curr=this.root
    if(!this.root){
      return false
    }
    while(curr){
      if(curr.value===val){
        return true
      }

      if(curr.value>val){
        curr=curr.left
      }else{
        curr=curr.right
      }
    }
    return false
  }


  height(root=this.root){
    if(!root){
      return 0
    }
    return 1+Math.max(this.height(root.left),this.height(root.right))
 
  }


  min(curr){
    while(curr.left){
      curr=curr.left
    }
    return curr
  }
 remove(val, curr=this.root){
  if(!curr){
    return null
  }
if(curr.value>val){
  curr.left=this.remove(val,curr.left)
}else if(curr.value<val){
  curr.right=this.remove(val,curr.right)
}else{
  if(!curr.left&&!curr.right){
    return null
  }
  if(!curr.left){
    return curr.right
  }
  if(!curr.right){
    return curr.left
  }

  const min=this.min(curr.right)
  curr.value=min.value;
  curr.right=this.remove(min.value,curr.right)

}
return curr
 }

  kthsmall(k,curr=this.root,result=[]){
    if(!curr || k<1){
      return null
    }
    this.kthsmall(k,curr.left,result)
    result.push(curr.value)

    if(k===result.length){
      return result[k-1]
    }
    this.kthsmall(k,curr.right,result)
    return result[k-1]||null
  }
}


const bst = new BST();
bst.insert(8);
bst.insert(7);
bst.insert(6);
bst.insert(4);
bst.insert(3);
bst.insert(2);
bst.insert(12);
bst.insert(17);
bst.insert(25);
bst.insert(15);
bst.insert(10);
bst.insert(20);
console.log("kthsmall",bst.kthsmall(1))
console.log("height or depth",bst.height())
console.log("search",bst.search(66))
console.log("Preorder Traversal:", bst.preorder());
console.log("Inorder Traversal:", bst.inorder());   
console.log("Postorder Traversal:", bst.postorder()); 
bst.remove(10); 
console.log("Inorder Traversal:", bst.inorder());