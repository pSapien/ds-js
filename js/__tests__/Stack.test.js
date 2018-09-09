import Stack from '../Stack';
import test, { beginTesting, doneTesting } from './test';

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
