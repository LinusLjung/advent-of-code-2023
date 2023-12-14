import { Coord, Grid } from 'types';

export function countLoad(rocks: Coord[], grid: Grid) {
  return rocks.reduce((acc, rock) => acc + grid.length - rock[0], 0);
}
