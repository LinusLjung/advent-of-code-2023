import { Grid } from 'Grid';
import { findMirror } from 'findMirror';
import { getGrids } from 'getGrids';

function findMirrors(grids: [Grid, Grid]): number {
  const horizontalMirror = findMirror(grids[0]);
  const verticalMirror = findMirror(grids[1]);

  return (
    (horizontalMirror ? horizontalMirror * 100 : 0) + (verticalMirror ?? 0)
  );
}
export function part1(input: string) {
  const grids: [Grid, Grid][] = input.split('\n\n').map(getGrids);

  return grids
    .map((grid) => findMirrors(grid))
    .reduce((acc, curr) => acc + curr);
}
