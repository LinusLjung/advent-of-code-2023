import { Grid } from 'Grid';

function isMaybeSmudge(line1: string, line2: string) {
  let diffCount = 0;

  for (let i = 0; i < line1.length && diffCount < 2; i++) {
    if (line1[i] !== line2[i]) {
      diffCount++;
    }
  }

  return diffCount === 1;
}

function mirrorReachesEdge(
  grid: Grid,
  mirrorIndex: number,
  shouldDesmudge = false
) {
  let didDesmudge = false;

  for (
    let i = mirrorIndex - 1, j = mirrorIndex;
    i >= 0 && j < grid.length;
    i--, j++
  ) {
    if (grid[i] !== grid[j]) {
      if (shouldDesmudge && !didDesmudge && isMaybeSmudge(grid[i], grid[j])) {
        didDesmudge = true;
        continue;
      }

      return false;
    }
  }

  return !shouldDesmudge || didDesmudge;
}

export function findMirror(grid: Grid, shouldDesmudge = false): number | null {
  for (let i = 1; i < grid.length; i++) {
    if (grid[i - 1] === grid[i] || shouldDesmudge) {
      if (mirrorReachesEdge(grid, i, shouldDesmudge)) {
        return i;
      }
    }
  }

  return null;
}
