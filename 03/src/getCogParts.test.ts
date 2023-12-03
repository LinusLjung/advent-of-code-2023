import { describe, expect, it } from 'bun:test';
import getCogParts from 'getCogParts';
import { Match } from 'getMatches';

const lines = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`.split('\n');

describe('getCogParts()', () => {
  it.each<[Match, number, number[]]>([
    [['*', 3], 1, [467, 35]],
    [['*', 3], 4, []],
    [['*', 5], 8, [755, 598]],
  ])('should return adjacent parts', (match, lineIndex, expected) => {
    expect(getCogParts(match, lines, lineIndex)).toEqual(expected);
  });
});
