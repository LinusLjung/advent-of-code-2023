import { describe, expect, it } from 'bun:test';
import { calculateRow } from 'calculateRow';

describe('calculateRow()', () => {
  it.each<[number[], number]>([
    [[0, 3, 6, 9, 12, 15], 18],
    [[1, 3, 6, 10, 15, 21], 28],
    [[10, 13, 16, 21, 30, 45], 68],
  ])('should return the extrapolated value', (input, expected) => {
    expect(calculateRow(input)).toBe(expected);
  });
});
