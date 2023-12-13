import { Grid } from 'Grid';
import { findMirror } from 'findMirror';
import { getGrids } from 'getGrids';

export function findMirrors(
  grids: [Grid, Grid],
  shouldDesmudge = false
): number {
  const horizontalMirror = findMirror(grids[0], shouldDesmudge);
  const verticalMirror = findMirror(grids[1], shouldDesmudge);

  return (
    (horizontalMirror ? horizontalMirror * 100 : 0) + (verticalMirror ?? 0)
  );
}

export function part1(input: string, shouldDesmudge = false) {
  const grids: [Grid, Grid][] = input.split('\n\n').map(getGrids);

  return grids
    .map((grid) => findMirrors(grid, shouldDesmudge))
    .reduce((acc, curr) => acc + curr);
}
