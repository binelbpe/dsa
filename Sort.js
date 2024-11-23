// function bubbleSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//       if(arr[j]>arr[j+1]){
//         let temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
//       }
//     }
//   }
//   return arr
// }


// //selection sort

// function selectionSort(arr){
//   for(let i=0;i<arr.length-1;i++){
//     let minIndex=i
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[minIndex]>arr[j]){
//         minIndex=j
//       }
//     }
//     if(minIndex!=i){
//       [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
//     }
//   }
//   return arr
// }

// console.log(selectionSort([21,5,3,6,1,21,659,974,614,974]))



// //insertion sort

// function insertionsort(arr){
//   for(let i=1;i<arr.length-1;i++){
//     let j=i-1
//     let key=arr[i]
//     while(j>=0&&arr[j]>key){
//       arr[j+1]=arr[j]
//       j--
//     }
//     arr[j+1]=key
//   }
//   return arr
// }

// console.log(insertionsort([21,5,3,6,1,21,659,974,614,974]))

// //quick sort

// function quick(arr){
//   if (arr.length<=1) return arr
//   const pivot=arr[arr.length-1]
//   const left=[]
//  const right=[]
//  for(let i=0;i<arr.length-1;i++){
//   if(arr[i]>pivot){
//     right.push(arr[i])
//   }else{
// left.push(arr[i])
//   }
//  }
//  return ([...quick(left),pivot,...quick(right)])
// }

// console.log(quick([12,8,21,52,54,25,542,5,5,54,2,5,42,6574,52,65,58]))



// //merge sort

// function mergeSort(arr){
//   if(arr.length<=1)return arr

//   let mid=Math.floor(arr.length/2)
//   let left=arr.slice(0,mid)
//   let right=arr.slice(mid)
//   return merge(mergeSort(left),mergeSort(right))
// }


// function merge(left,right){
//   let result=[]
//   let leftIndex=0
//   let rightIndex=0
//   while(leftIndex<left.length&&rightIndex<right.length){
// if(left[leftIndex]<right[rightIndex]){
//   result.push(left[leftIndex])
//   leftIndex++
// }else{
//   result.push(right[rightIndex])
//   rightIndex++
// }
//   }
//   return result.concat(left.slice(leftIndex),right.slice(rightIndex))
// }

// console.log(mergeSort([12,8,21,52,54,25,542,5,5,54,2,5,42,6574,52,65,58]))


// let a={
//   a:5,
//   b:6,
//   l:6
// }

// let str="hello"
// for(let i=0;i<str.length;i++){
//   let key=str[i]
//   console.log(a[key])
// }


function quick(arr){
  if(arr.length<=1){
    return arr
  }
  let pivot=arr[arr.length-1]
  let right=[]
  let left=[]
  for(let i=0;i<arr.length-1;i++){
if(arr[i]>pivot){
  right.push(arr[i])
}else{
  left.push(arr[i])
}
  };
  return [...quick(left),pivot,...quick(right)]
}

console.log(quick([12,8,21,52,54,25,542,5,5,54,2,5,42,58,6574,52,65,58]))


function merge(arr){
  if(arr.length<=1){
    return arr
  }
  let middle=Math.floor(arr.length/2)
  let left=arr.slice(0,middle)
  let right=arr.slice(middle)
  return mergeSort(merge(left),merge(right))
}

function mergeSort(left,right){
  let result=[]
  let leftIndex=0
let rightIndex=0
while(leftIndex<left.length&&rightIndex<right.length){
  if(left[leftIndex]<right[rightIndex]){
    result.push(left[leftIndex])
    leftIndex++
  }else{
    result.push(right[rightIndex])
    rightIndex++
  }
}
return result.concat(left.slice(leftIndex),right.slice(rightIndex))
}

console.log(merge([12,8,21,52,54,25,542,5,5,54,2,5,42,58,6574,52,65,58]))