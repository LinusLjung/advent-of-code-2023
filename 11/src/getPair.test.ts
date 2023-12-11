import { describe, expect, it } from 'bun:test';
import { getPair } from 'getPair';
import { Coord, Pair } from 'types';

describe('getPair()', () => {
  it.each<[Coord, Coord, number[], number[], Pair]>([
    [
      [5, 5],
      [5, 5],
      [5],
      [5],
      {
        pair: [
          [5, 5],
          [5, 5],
        ],
        distance: 0,
      },
    ],
    [
      [0, 3],
      [8, 7],
      [3, 7],
      [2, 5, 8],
      {
        pair: [
          [0, 3],
          [8, 7],
        ],
        distance: 15,
      },
    ],
    [
      [2, 0],
      [6, 9],
      [3, 7],
      [2, 5, 8],
      {
        pair: [
          [2, 0],
          [6, 9],
        ],
        distance: 17,
      },
    ],
    [
      [2, 0],
      [6, 9],
      [3, 7],
      [2, 5, 8],
      {
        pair: [
          [2, 0],
          [6, 9],
        ],
        distance: 17,
      },
    ],
  ])(
    'should return pair and distance',
    (galaxy1, galaxy2, emptyRows, emptyColumns, expected) => {
      expect(getPair(galaxy1, galaxy2, emptyRows, emptyColumns)).toEqual(expected);
    }
  );
});
