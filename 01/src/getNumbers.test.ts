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

  it.each([
    ['two1nine', '29'],
    ['eightwothree', '83'],
    ['abcone2threexyz', '13'],
    ['xtwone3four', '24'],
    ['4nineeightseven2', '42'],
    ['zoneight234', '14'],
    ['7pqrstsixteen', '76'],
  ])('should handle spelled out numbers, %s => %s', (input, expected) => {
    expect(getNumbers(input, true)).toBe(expected);
  });
});
