import Queue from '../Queue';
import test, { beginTesting, doneTesting } from './test';

const myQueue = new Queue();

beginTesting('QUEUE');
myQueue.enqueue(1);
myQueue.enqueue(2);
test('testing the enqueue function of the queue', {
  expected: myQueue.storage,
  result: [1, 2],
});
test('testing the front function of the queue', {
  expected: myQueue.front(),
  result: 1,
});
test('testing the back function of the queue', {
  expected: myQueue.back(),
  result: 2,
});
myQueue.dequeue();
test('testing the dequeue function of the queue', {
  expected: [2],
  result: myQueue.storage,
});
test('testing the isEmpty function of the queue', {
  expected: myQueue.isEmpty(),
  result: false,
});
