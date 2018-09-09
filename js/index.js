import test from './test';
import Stack from './Stack';
import List from './Lists';

const myStack = new Stack();
myStack.push('JS');
myStack.push('is');
myStack.push('boring');
beginTesting('STACK');
test('testing peek function of stack', { expected: myStack.peek(), result: 'boring' });
test('testing size function of stack', { expected: myStack.size(), result: 3 });
test('testing pop function of stack', { expected: myStack.pop(), result: 'boring' });
myStack.push('awesome');
test('testing push function of stack', { expected: myStack.peek(), result: 'awesome' });
doneTesting('STACK');

const myList = new List();
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.push(7);
beginTesting('LISTS');
test('testing push function of list', {
  expected: myList.storage,
  result: [1, 2, 3, 4, 5, 7],
});
myList.pop();
myList.push('6');
test('testing pop function of list', {
  expected: myList.storage,
  result: [1, 2, 3, 4, 5, 6],
});
myList.unshift(0);
test('testing pop function of list', {
  expected: myList.storage,
  result: [0, 1, 2, 3, 4, 5, 6],
});
test('testing shift function of list', {
  expected: myList.shift(),
  result: 0,
});
doneTesting('LISTS');

function beginTesting(message) {
  console.log(`##########   BEGIN TESTING ${message}    #################`);
}

function doneTesting(message) {
  console.log(`##########   FINISHED TESTING ${message}    #################`);
  console.log('\n');
}
