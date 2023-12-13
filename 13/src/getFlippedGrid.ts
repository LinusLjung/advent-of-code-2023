import { Grid } from 'Grid';

export function getFlippedGrid(grid: Grid): Grid {
  const rotatedGrid: Grid = [];

  for (let x = 0; x < grid[0].length; x++) {
    rotatedGrid[x] = '';
    for (let y = 0; y < grid.length; y++) {
      rotatedGrid[x] += grid[y][x];
    }
  }

  return rotatedGrid;
}
