// function factorial(num){
// if(num<=1) return num
// return num*factorial(num-1)
// }

// console.log(factorial(5))


// function fibonacci(n){
//   if(n<=1) return n
//   return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(6))


// function sumOfdigits(n){
//   if (n===0)return n
// return (n%10)+sumOfdigits(Math.floor(n/10))
// }

// console.log(sumOfdigits(1236))

// function power(a,b){
//   if(b===0)return 1
//   return a*power(a,b-1)
// }
// console.log(power(1,5))

// function stringReverse(str){
//   if(str === "")return ""
//   return stringReverse(str.slice(1))+str[0]
// }


// console.log(stringReverse("binel"))


// function reverseLLRec(head){
//   if(head===null||head.next===null){
//     return head
//   }

//   const revrecll=reverseLLRec(head.next)
//   head.next.nex=head
//   head.next=null

//   return revrecll
// }


// function pali(str){
//   if(str.length<=1){
//     return true
//   }

//   if(str[0]!==str[str.length-1]){
//     return false
//   }
//   x= str.slice(1,str.length-1)
//   return pali(x)
// }


// console.log(pali("asdsa"))


// function sum(n){
//   if(n.length===1){
//     return n[0]
//   }

//   return n[0]+sum(n.slice(1))
// }

// console.log(sum([1,63,5,8,9,77,6]))


function sumOfarr(arr){
if(arr.length===1){
  return arr[0]
}
return arr.pop()+sumOfarr(arr)
}
console.log(sumOfarr([11,22,33,66,55,44]))


