import { Grid } from 'Grid';

function mirrorReachesEdge(grid: Grid, mirrorIndex: number) {
  for (
    let i = mirrorIndex - 1, j = mirrorIndex;
    i >= 0 && j < grid.length;
    i--, j++
  ) {
    if (grid[i] !== grid[j]) {
      return false;
    }
  }

  return true;
}

export function findMirror(grid: Grid): number | null {
  for (let i = 1; i < grid.length; i++) {
    if (grid[i - 1] === grid[i]) {
      if (mirrorReachesEdge(grid, i)) {
        return i;
      }
    }
  }

  return null;
}
