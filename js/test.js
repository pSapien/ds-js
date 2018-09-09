const checkString = str => typeof str === 'string';
const checkNumber = num => typeof num === 'number';
const checkNumOrStr = value => checkString(value) || checkNumber(value);
const checkArr = arr => Array.isArray(arr);

export default function test(messageParams, values) {
  const { expected, result } = values;

  if (checkNumOrStr(expected) && checkNumOrStr(result)) {
    checkEquality(messageParams, values);
    return;
  }

  if (checkArr(expected) && checkArr(result)) {
    checkEquality(messageParams, {
      expected: expected.sort().join(','),
      result: result.sort().join(','),
    });
  }
}

function checkEquality(messageParams, { expected, result }) {
  if (expected === result) {
    console.log(`Test passed => ${messageParams}`);
  } else {
    console.error(
      `Test failed => ${messageParams} \n Expected ${result} but got ${expected}`
    );
  }
}
