class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

class StackWithQueues {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  push(element) {
    this.queue1.push(element);
  }
  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const popped = this.queue1.shift();
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return popped;
  }
  peek() {
    return this.queue1[this.queue1.length - 1];
  }
  isEmpty() {
    return this.queue1.length === 0;
  }
}
