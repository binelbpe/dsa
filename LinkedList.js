class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.random = null;
    this.child = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  append(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let print = `${curr.value} `;
      while (curr.next) {
        curr = curr.next;
        print = print + `${curr.value} `;
      }
      return console.log(print);
    }
  }

  isCycle() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let prev = this.head;
      while (curr.next != null && fast != null) {
        curr = curr.next.next;
        prev = prev.next;
        if (prev === curr) {
          return console.log("cycle is detected");
        }
      }
      return console.log(print);
    }
  }

  reverse() {
    if (this.isEmpty()) {
      return console.log("list is empty");
    } else {
      let curr = this.head;
      let prev = null;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  }

  middle() {
    if (this.isEmpty()) {
      return console.log("list is empty");
    } else {
      let fast = this.head;
      let slow = this.head;
      while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
      }
      return console.log("middle", slow.value);
    }
  }

 

  // 2. Remove N-th Node from End of List
  removeNthFromEnd(n) {
    let dummy = new Node(0);
    dummy.next = this.head;
    let fast = dummy,
      slow = dummy;
    for (let i = 0; i <= n; i++) fast = fast.next;
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    this.head = dummy.next;
  }

  // 3. Reverse Linked List in Groups of K
  reverseKGroup(k) {
    let current = this.head;
    let count = 0;
    while (current && count < k) {
      current = current.next;
      count++;
    }
    if (count < k) return this.head;
    current = this.head;
    let prev = null,
      next = null;
    while (count-- > 0) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head.next = this.reverseKGroup(current, k);
    return prev;
  }

  // 4. Detect and Remove Cycle
  detectAndRemoveCycle() {
    let slow = this.head,
      fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) break;
    }
    if (slow === fast) {
      slow = this.head;
      while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
      fast.next = null;
    }
  }

  // 5. Find Intersection of Two Lists
  static getIntersectionNode(headA, headB) {
    let a = headA,
      b = headB;
    while (a !== b) {
      a = a ? a.next : headB;
      b = b ? b.next : headA;
    }
    return a;
  }

  // 6. Flatten Multilevel Doubly Linked List
  flattenMultilevel() {
    let stack = [];
    let current = this.head;
    while (current) {
      if (current.child) {
        if (current.next) stack.push(current.next);
        current.next = current.child;
        current.child.prev = current;
        current.child = null;
      }
      if (!current.next && stack.length) current.next = stack.pop();
      current = current.next;
    }
    return this.head;
  }

  // 7. Rotate Linked List by K
  rotateRight(k) {
    if (!this.head) return;
    let len = 1;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      len++;
    }
    tail.next = this.head;
    k = len - (k % len);
    while (k-- > 0) tail = tail.next;
    this.head = tail.next;
    tail.next = null;
  }

  // 8. Partition List Around a Value x
  partition(x) {
    let beforeHead = new Node(0),
      afterHead = new Node(0);
    let before = beforeHead,
      after = afterHead;
    let current = this.head;
    while (current) {
      if (current.value < x) {
        before.next = current;
        before = before.next;
      } else {
        after.next = current;
        after = after.next;
      }
      current = current.next;
    }
    after.next = null;
    before.next = afterHead.next;
    this.head = beforeHead.next;
  }

  // 9. Add Two Numbers
  static addTwoNumbers(l1, l2) {
    let dummy = new Node(0);
    let p = l1,
      q = l2,
      current = dummy;
    let carry = 0;
    while (p || q) {
      let sum = (p ? p.value : 0) + (q ? q.value : 0) + carry;
      carry = Math.floor(sum / 10);
      current.next = new Node(sum % 10);
      current = current.next;
      if (p) p = p.next;
      if (q) q = q.next;
    }
    if (carry > 0) current.next = new Node(carry);
    return dummy.next;
  }

  // 10. Copy List with Random Pointer
  copyRandomList() {
    let map = new Map();
    let current = this.head;
    while (current) {
      map.set(current, new Node(current.value));
      current = current.next;
    }
    current = this.head;
    while (current) {
      map.get(current).next = map.get(current.next) || null;
      map.get(current).random = map.get(current.random) || null;
      current = current.next;
    }
    return map.get(this.head);
  }

  // 11. Find Middle of List
  getMiddle() {
    let slow = this.head,
      fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // 12. Reorder List
  reorderList() {
    let slow = this.head,
      fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let prev = null,
      current = slow,
      next;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    let first = this.head,
      second = prev;
    while (second.next) {
      next = first.next;
      first.next = second;
      first = next;
      next = second.next;
      second.next = first;
      second = next;
    }
  }

  // 13. Check if Palindrome
  isPalindrome() {
    let fast = this.head,
      slow = this.head;
    let stack = [];
    while (fast && fast.next) {
      stack.push(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }
    if (fast) slow = slow.next;
    while (slow) {
      if (slow.value !== stack.pop()) return false;
      slow = slow.next;
    }
    return true;
  }

  // 14. Sort Linked List (Merge Sort)
  mergeSort(head = this.head) {
    if (!head || !head.next) return head;
    let mid = this.getMiddle(head);
    let left = this.mergeSort(head);
    let right = this.mergeSort(mid);
    return LinkedList.mergeSorted(left, right);
  }

  // Helper method to print list for testing
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

 // 1. Merge Two Sorted Linked Lists
 function mergeSorted(list1, list2) {
  let l1 = list1.head;
  let l2 = list2.head;
  let dummy = new Node(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;

  const mergedList = new LinkedList();
  mergedList.head = dummy.next;
  return mergedList;
}

const list1 = new LinkedList();
console.log(list1.isEmpty());
list1.append(22);
list1.append(36);
list1.append(49);
list1.append(58);
list1.append(62);
list1.append(80);
list1.print();
list1.reverse();
list1.middle();
console.log(list1.isEmpty());
list1.print();

const list2 = new LinkedList();
console.log(list2.isEmpty());
list2.append(25);
list2.append(38);
list2.append(51);
list2.append(60);
list2.append(72);
list2.append(100);
list2.print();
list2.reverse();
list2.middle();
console.log(list2.isEmpty());
list2.print();
mergeSorted(list1, list2).print();


function lk(head,target,val=0){
  if(!head){
    return null
  }
  if(head.value===target){
    return null
  }
  let curr=head
  let prev=null
  while(curr){
    if(curr.value===target){
      prev.value=val
    }
    prev=curr
    curr=curr.next
  }
return head
}

lk(list1.head,72,3)
list1.print();

function l3(head){
  if(!head){
    return null
  }
  let curr=head
  let prev1=0
  let prev2=0
  while(curr.next){
    prev2=prev1
    prev1=curr.value
    curr=curr.next
  }
  return prev1+prev2+curr.value
}

console.log(l3(list1.head))

// function ll3(head){
//   if(!head){
//     return null
//   }
//   let sum=0
//   let curr=head
//   let count=0
//   let target=count-3
//   while(curr){
// count ++

//     curr=curr.next
//   }
//   while (condition) {
    
//   }
//   if(count>target){
//     sum +=curr.value
// }

//   return sum
// }

// console.log(ll3(list1.head))