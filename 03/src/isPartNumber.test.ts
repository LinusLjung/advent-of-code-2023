import { describe, expect, it } from 'bun:test';
import { Match } from 'getMatches';
import isPartNumber from 'isPartNumber';

const lines = `#467..114.
..........
..35#.633.
..5...#...
617*......
.....+..58
..592.....
......755.
...$.*....
.664.598..
.10#10.123
..........
.10#10.23#`;

describe('isPartNumber()', () => {
  it.each<[Match, number, boolean]>([
    [['467', 1], 0, true],
    [['114', 5], 0, false],
    [['35', 2], 2, true],
    [['633', 6], 2, true],
    [['617', 0], 4, true],
    [['58', 8], 5, false],
    [['592', 2], 6, true],
    [['10', 1], 10, true],
    [['123', 7], 10, false],
    [['23', 7], 11, true],
  ])('should check %j for adjacent parts', (input, lineNumber, expected) => {
    expect(isPartNumber(input, lines.split('\n'), lineNumber)).toBe(expected);
  });
});
