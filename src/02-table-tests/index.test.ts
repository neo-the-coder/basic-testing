// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: -5, action: Action.Subtract, expected: 15 },
  { a: 10, b: 5, action: Action.Subtract, expected: 5 },
  { a: 1, b: 50, action: Action.Multiply, expected: 50 },
  { a: -5, b: -4, action: Action.Multiply, expected: 20 },
  { a: -9, b: 3, action: Action.Divide, expected: -3 },
  { a: 15, b: 5, action: Action.Divide, expected: 3 },
  { a: 7, b: 3, action: Action.Exponentiate, expected: 343 },
  { a: -2, b: 5, action: Action.Exponentiate, expected: -32 },
  { a: 38, b: 45, action: 'add', expected: null },
  { a: '1', b: '1', action: Action.Subtract, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    '($a) $action ($b) should return $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
