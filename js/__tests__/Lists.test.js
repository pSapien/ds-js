import List from '../Lists';
import test, { beginTesting, doneTesting } from './test';

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
