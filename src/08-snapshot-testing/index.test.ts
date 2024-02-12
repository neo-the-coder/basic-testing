// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const elements = ['eat', 'sleep', 'code'];
    const expectedLinkedList = {
      value: 'eat',
      next: {
        value: 'sleep',
        next: {
          value: 'code',
          next: {
            value: null,
            next: null,
          },
        },
      },
    };

    const result = generateLinkedList(elements);
    expect(result).toStrictEqual(expectedLinkedList);
    expect(result).toMatchSnapshot();
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const elements = ['eat', 'sleep', 'code'];

    const result = generateLinkedList(elements);
    expect(result).toMatchSnapshot();
  });
});
