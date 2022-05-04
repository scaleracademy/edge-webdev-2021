const { calcFare } = require("../src/utils");

test('0km, 0min = Rs. 25', () => {
  expect(calcFare(0, 0)).toEqual(25);
});

test('3km, 0min = Rs. 35', () => {
  expect(calcFare(3, 0)).toEqual(35);
});

test('2km, 20min = Rs. 30', () => {
  expect(calcFare(2, 20)).toEqual(30);
});

test('3km, 20min = Rs. 40', () => {
  expect(calcFare(3, 20)).toEqual(40);
});