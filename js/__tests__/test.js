const checkArr = arr => Array.isArray(arr);
const checkString = str => typeof str === 'string';
const checkNumber = num => typeof num === 'number';
const checkBool = value => typeof value === 'boolean';
const checkNumOrStr = value => checkString(value) || checkNumber(value);

export default function test(messageParams, values) {
  const { expected, result } = values;

  const isBool = checkBool(expected) && checkBool(result);
  const isNumOrStr = checkNumOrStr(expected) && checkNumOrStr(result);

  if (isBool || isNumOrStr) {
    checkEquality(messageParams, values);
    return;
  }

  const isArr = checkArr(expected) && checkArr(result);
  if (isArr) {
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

export function beginTesting(message) {
  console.log(`##########   BEGIN TESTING ${message}    #################`);
}

export function doneTesting(message) {
  console.log(`##########   FINISHED TESTING ${message}    #################`);
  console.log('\n');
}
