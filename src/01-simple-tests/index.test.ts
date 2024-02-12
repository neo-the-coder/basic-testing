// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const input = { a: 3, b: 5, action: Action.Add };
    const result = simpleCalculator(input);
    expect(result).toBe(8);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const input = { a: 2024, b: 1945, action: Action.Subtract };
    const result = simpleCalculator(input);
    expect(result).toBe(79);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const input = { a: 25, b: 4, action: Action.Multiply };
    const result = simpleCalculator(input);
    expect(result).toBe(100);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const input = { a: 200, b: 8, action: Action.Divide };
    const result = simpleCalculator(input);
    expect(result).toBe(25);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const input = { a: 2, b: 10, action: Action.Exponentiate };
    const result = simpleCalculator(input);
    expect(result).toBe(1024);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const input = { a: 38, b: 45, action: 'add' };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const input = { a: '1', b: '1', action: Action.Subtract };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });
});
