const sum = require('./sum');
const minus = require('./minus')

test('adds 1 + 2 to equal 3', () => {
  // test data
  const a = 1;
  const b = 2;
  const expectedResult = 3;
  
  // test execution
  const actualResult = sum(a, b);
  // run test
  expect(actualResult).toBe(expectedResult);
});

test('minus 3 - 1 to equal 2', () => {
  const a = 3;
  const b = 1;
  const expectResult = 2;

  const actualResult = minus(a, b);
  expect(actualResult).toBe(expectResult);
});