import { describe, expect, it } from 'bun:test';
import { expandLine } from 'expandLine';

describe('expandLine()', () => {
  it('should expand the line by a multitude of 5', () => {
    expect(expandLine(['???.###', [1, 1, 3]])).toEqual([
      '???.###????.###????.###????.###????.###',
      [1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3],
    ]);
  });
});
