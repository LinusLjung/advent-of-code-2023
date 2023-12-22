import { describe, expect, it } from 'bun:test';
import { isIntersecting } from 'isIntersecting';
import { Block } from 'types';

describe('isIntersecting()', () => {
  it.each<[Block, Block, boolean]>([
    [
      [
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [1, 1, 1],
        [0, 0, 0],
      ],
      true,
    ],
    [
      [
        [1, 1, 1],
        [1, 0, 0],
      ],
      [
        [1, 1, 1],
        [0, 0, 0],
      ],
      false,
    ],
    [
      [
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [1, 1, 1],
        [0, 0, 1],
      ],
      false,
    ],
    [
      [
        [1, 1, 2],
        [0, 0, 0],
      ],
      [
        [1, 1, 1],
        [0, 0, 1],
      ],
      true,
    ],
    [
      [
        [10, 10, 10],
        [0, 0, 0],
      ],
      [
        [1, 1, 1],
        [10, 10, 10],
      ],
      false,
    ],
    [
      [
        [10, 10, 10],
        [0, 0, 0],
      ],
      [
        [1, 1, 1],
        [9, 9, 9],
      ],
      true,
    ],
    [
      [
        [1, 3, 1],
        [1, 0, 1],
      ],
      [
        [3, 1, 1],
        [0, 0, 2],
      ],
      false,
    ],
    [
      [
        [1, 3, 1],
        [1, 0, 1],
      ],
      [
        [3, 1, 1],
        [0, 0, 1],
      ],
      true,
    ],
  ])('should test for intersections', (block1, block2, expected) => {
    expect(isIntersecting(block1, block2)).toBe(expected);
  });
});
