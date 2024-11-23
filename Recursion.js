function factorial(num){
if(num<=1) return num
return num*factorial(num-1)
}

console.log(factorial(5))


function fibonacci(n){
  if(n<=1) return n
  return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(6))


function sumOfdigits(n){
  if (n===0)return n
return (n%10)+sumOfdigits(Math.floor(n/10))
}

console.log(sumOfdigits(1236))

function power(a,b){
  if(b===0)return 1
  return a*power(a,b-1)
}
console.log(power(1,5))

function stringReverse(str){
  if(str === "")return ""
  return stringReverse(str.slice(1))+str[0]
}


console.log(stringReverse("binel"))


function reverseLLRec(head){
  if(head===null||head.next===null){
    return head
  }

  const revrecll=reverseLLRec(head.next)
  head.next.nex=head
  head.next=null

  return revrecll
}