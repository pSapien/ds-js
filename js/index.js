import test from './test';
import Stack from './Stack';

const myStack = new Stack();

myStack.push('JS');
myStack.push('is');
myStack.push('boring');

test('testing peek function', { expected: myStack.peek(), result: 'boring' });
test('testing size function', { expected: myStack.size(), result: 3 });
test('testing pop function', { expected: myStack.pop(), result: 'boring' });
myStack.push('awesome');
test('testing push function', { expected: myStack.peek(), result: 'awesome' });
