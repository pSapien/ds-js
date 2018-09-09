export default class Lists {
  storage = [];
  length = 0;

  _treatNoValues() {
    if (this.length === 0) {
      throw new Error('Lists has no values');

      return;
    }
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    this._treatNoValues();
    this.length--;
    const valueToBePopped = this.storage[this.length];
    delete this.storage[this.length];

    return valueToBePopped;
  }

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
