export default class Stack {
  top = 0;
  storage = {};

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.top === 0) {
      throw new Error('Stack is not initialized');

      return;
    }

    this.top--;
    const valueToBePopped = this.storage[this.top];
    delete this.storage[this.top];

    return valueToBePopped;
  }

  peek() {
    return this.storage[this.top - 1];
  }

  size() {
    return this.top;
  }
}
