class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}


class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    const node = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > priority) {
        this.items.splice(i, 0, node);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(node);
    }
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}



class QueueWithStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(element) {
    this.stack1.push(element);
  }
  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}
