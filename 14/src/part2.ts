import { countLoad } from 'countLoad';
import { findRocks } from 'findRocks';
import { getGrid } from 'getGrid';
import { moveRock } from 'moveRock';
import { Coord, Direction } from 'types';

function sortRocks(rocks: Coord[], direction: Direction) {
  if (direction === 'N') {
    return rocks.sort((a, b) => a[0] - b[0]);
  }

  if (direction === 'S') {
    return rocks.sort((a, b) => b[0] - a[0]);
  }

  if (direction === 'W') {
    return rocks.sort((a, b) => a[1] - b[1]);
  }

  if (direction === 'E') {
    return rocks.sort((a, b) => b[1] - a[1]);
  }
}

export function part2(input: string) {
  const cache: Record<string, { grid: string; lastHitIndex: number }> = {};

  let grid = getGrid(input);
  let rocks = findRocks(grid, 'O');
  const directions: Direction[] = ['N', 'W', 'S', 'E'];
  let i = 0;

  for (; i < 1e9; i++) {
    const cacheKey = JSON.stringify(grid);

    if (cacheKey in cache) {
      const cacheItem = cache[cacheKey];

      if (cacheItem.lastHitIndex) {
        const loopLength = i - cacheItem.lastHitIndex;

        i = 1e9 - (1e9 % i) - loopLength + 1;
      }

      cacheItem.lastHitIndex = i;
      grid = JSON.parse(cacheItem.grid);
      rocks = findRocks(grid, 'O');

      continue;
    }

    for (const direction of directions) {
      sortRocks(rocks, direction);

      for (let rock of rocks) {
        moveRock(rock, grid, direction);
      }
    }

    cache[cacheKey] = {
      grid: JSON.stringify(grid),
      lastHitIndex: 0,
    };
  }

  return countLoad(rocks, grid);
}
