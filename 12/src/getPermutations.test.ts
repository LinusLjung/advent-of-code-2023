import { describe, expect, it } from 'bun:test';
import { getPermutations } from 'getPermutations';

describe('getPermutations()', () => {
  it.each<[[string, number[]], number]>([
    [['???.###', [1, 1, 3]], 1],
    [['.??..??...?##.', [1, 1, 3]], 4],
    [['?#?#?#?#?#?#?#?', [1, 3, 1, 6]], 1],
    [['????.#...#...', [4, 1, 1]], 1],
    [['????.######..#####.', [1, 6, 5]], 4],
    [['?###????????', [3, 2, 1]], 10],
  ])('should return number of permutations', (input, expected) => {
    expect(getPermutations(input)).toBeArrayOfSize(expected);
  });
});
