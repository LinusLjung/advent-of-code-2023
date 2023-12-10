import { Grid, Node } from 'types';

export function findStart(grid: Grid): Node {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'S') {
        return [i, j];
      }
    }
  }

  throw false;
}
