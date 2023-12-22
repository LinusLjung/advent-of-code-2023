import { describe, expect, it } from 'bun:test';
import { getBlock } from 'getBlock';
import { Block, BlockCoords } from 'types';

describe('getBlock()', () => {
  it.each<[BlockCoords, Block]>([
    [
      [
        [1, 0, 1],
        [1, 2, 1],
      ],
      [
        [1, 3, 1],
        [1, 0, 1],
      ],
    ],
    [
      [
        [0, 0, 2],
        [2, 0, 2],
      ],
      [
        [3, 1, 1],
        [0, 0, 2],
      ],
    ],
  ])('should return block dimensions and position', (blockCoords, expected) => {
    expect(getBlock(blockCoords)).toEqual(expected);
  });
});
