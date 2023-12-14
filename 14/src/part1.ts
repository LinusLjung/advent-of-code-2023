import { countLoad } from 'countLoad';
import { findRocks } from 'findRocks';
import { getGrid } from 'getGrid';
import { moveRock } from 'moveRock';

export function part1(input: string) {
  let grid = getGrid(input);
  const rocks = findRocks(grid, 'O');

  rocks.sort((a, b) => a[0] - b[0]);

  for (let rock of rocks) {
    moveRock(rock, grid);
  }

  return countLoad(rocks, grid);
}
