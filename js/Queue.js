/**
 * A queue is a type of list where data are inserted at the end and
 * are removed at the front.
 *
 * So, think of a queue like the line at the bank, where the first person into
 * the line is the first served. As more customers enters the line, they wait in
 * the back until it is their turn.
 *
 * So, lets build a queue.
 */

export default class Queue {
  storage = [];

  _treatNoValues() {
    if (this.isEmpty()) {
      throw new Error('Queue have no values');

      return;
    }
  }

  /**
   *  adds the value at the end of the queue
   */

  enqueue(value) {
    this.storage.push(value);
  }

  /**
   *  removes the value from the start of the queue
   */

  dequeue() {
    this._treatNoValues();
    return this.storage.shift();
  }

  /**
   *  returns the first value of the queue
   */

  front() {
    this._treatNoValues();
    return this.storage[0];
  }

  /**
   *  returns the last value of the queue
   */

  back() {
    this._treatNoValues();
    return this.storage[this.storage.length - 1];
  }

  /**
   *  checks whether the queue is empty or not
   */

  isEmpty() {
    return this.storage.length === 0;
  }
}
