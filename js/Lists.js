/**
 *  A list is basically an ordered sequence of data where the same value may appear many times.
 *  We all have list, don't we? Be it todo lists, grocery lists, top-ten lists and so on.
 *
 *  So, lets build a List, shall we?
 */

export default class List {
  storage = [];
  length = 0;

  _treatNoValues() {
    if (this.length === 0) {
      throw new Error('Lists has no values');

      return;
    }
  }

  /**
   *  add value to the end of the list
   */

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  /**
   *  return value from the end of the list
   */

  pop() {
    this._treatNoValues();
    this.length--;
    const valueToBePopped = this.storage[this.length];
    delete this.storage[this.length];

    return valueToBePopped;
  }

  /**
   * In order to add a new item at the beginning of our list, we need to make
   * room for our value at the start by sliding all of the values over by one.
   *
   *     [a, b, c, d, e]
   *      0  1  2  3  4
   *       ⬊  ⬊  ⬊  ⬊  ⬊
   *         1  2  3  4  5
   *     [x, a, b, c, d, e]
   *
   * In order to slide all of the items over we need to iterate over each one
   * moving the prev value over.
   *
   * Because we have to iterate over every single item in the list:
   *
   * Unshifting an item to the start of a list is linear O(N) - "OKAY."
   */

  unshift(value) {
    this._treatNoValues();

    let previous = value;

    this.storage.forEach((elem, idx) => {
      let current = this.storage[idx];
      this.storage[idx] = previous;
      previous = current;
    });

    this.storage[this.length] = previous;

    this.length++;
  }

  /**
   * Finally, we need to write a shift function to move in the opposite
   * direction.
   *
   * We delete the first value and then slide through every single item in the
   * list to move it down one address.
   *
   *     [x, a, b, c, d, e]
   *         1  2  3  4  5
   *       ⬋  ⬋  ⬋  ⬋  ⬋
   *      0  1  2  3  4
   *     [a, b, c, d, e]
   *
   * Shifting an item from the start of a list is linear O(N) - "OKAY."
   */

  shift() {
    this._treatNoValues();

    let value = this.storage[0];

    this.storage.forEach((elem, idx) => {
      this.storage[idx] = this.storage[idx + 1];
    });

    this.length--;
    delete this.storage[this.length];

    return value;
  }
}
