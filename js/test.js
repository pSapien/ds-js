export default function test(messageParams, values) {
  const { expected, result } = values;

  if (expected === result) {
    console.log(`Test passed => ${messageParams}`);
  } else {
    console.error(
      `Test failed => ${messageParams} \n Expected ${result} but got ${expected}`
    );
  }
}
