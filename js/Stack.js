/**
 *  A stack is basically a list of elements but the values are only to be
 *  added and deleted at the end of the list which is pretty darn fast, mind you.
 *
 *  Stack of notebooks on a teacher's desk, or stack of trays at the cafeteria.
 *
 *  So, let's build a Stack, shall we?
 */

export default class Stack {
  length = 0;
  storage = {};

  /**
   *  adds value at the end
   */

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  /**
   *  removes and return value at the end
   */

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

  /**
   *  returns the value at the end.
   */

  peek() {
    return this.storage[this.length - 1];
  }

  /**
   *  returns the size of the stack.
   */

  size() {
    return this.length;
  }
}
