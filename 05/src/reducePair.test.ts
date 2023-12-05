import { describe, expect, it } from 'bun:test';
import { reducePair } from 'reducePair';
import { Pair } from 'types';

//    ----------
//         ----------

//    -----
//         ----------

describe('reducePair()', () => {
  it.each<[Pair, Pair, Pair]>([
    [
      [10, 10],
      [5, 10],
      [16, 5],
    ],
    [
      [5, 10],
      [0, 20],
      [5, 0],
    ],
    [
      [5, 0],
      [0, 20],
      [5, 0],
    ],
    [
      [4, 10],
      [5, 0],
      [4, 10],
    ],
    [
      [5, 10],
      [10, 10],
      [5, 5],
    ],
  ])('should remove the intersection', (pair1, pair2, expected) => {
    expect(reducePair(pair1, pair2)).toEqual(expected);
  });
});
