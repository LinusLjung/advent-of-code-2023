import { Coord, Grid } from 'types';

export function findRocks(grid: Grid, type: 'O' | '#') {
  const rocks: Coord[] = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === type) {
        rocks.push([y, x]);
      }
    }
  }

  return rocks;
}
