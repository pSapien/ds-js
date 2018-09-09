export default class Stack {
  length = 0;
  storage = {};

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Stack has no values');

      return;
    }

    this.length--;
    const valueToBePopped = this.storage[this.length];
    delete this.storage[this.length];

    return valueToBePopped;
  }

  peek() {
    return this.storage[this.length - 1];
  }

  size() {
    return this.length;
  }
}
