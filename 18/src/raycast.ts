import { Coord, Grid } from 'types';

export function raycast(coord: Coord, direction: Coord, grid: Grid) {
  let isInside = false;
  coord = [...coord];

  while (true) {
    coord[0] += direction[0];
    coord[1] += direction[1];

    let current = grid[coord[0]]?.[coord[1]];

    if (!current) {
      break;
    }

    if (current === '#') {
      isInside = !isInside;

      while (current === '#') {
        coord[0] += direction[0];
        coord[1] += direction[1];

        current = grid[coord[0]]?.[coord[1]];
      }
    }
  }

  return isInside;
}
