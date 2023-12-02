import { describe, expect, it } from 'bun:test';
import setStringToSet from 'setStringToSet';

describe('setStringToSet()', () => {
  it.each([
    ['3 blue, 4 red', { blue: 3, red: 4, green: 0 }],
    ['1 red, 2 green', { red: 1, green: 2, blue: 0 }],
    ['1 red, 2 green', { red: 1, green: 2, blue: 0 }],
    ['8 green, 6 blue, 20 red', { green: 8, blue: 6, red: 20 }],
  ])('should return number of colors from the set', (input, expected) => {
    expect(setStringToSet(input)).toEqual(expected);
  });
});
