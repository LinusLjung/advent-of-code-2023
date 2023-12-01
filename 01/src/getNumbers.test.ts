import { describe, expect, it } from 'bun:test';
import getNumbers from 'getNumbers';

describe('getNumbers()', () => {
  it.each([
    ['1abc2', '12'],
    ['pqr3stu8vwx', '38'],
    ['a1b2c3d4e5f', '15'],
    ['treb7uchet', '77'],
  ])(
    'should return the first and the last number of the text',
    (input, expected) => {
      expect(getNumbers(input)).toBe(expected);
    }
  );
});
