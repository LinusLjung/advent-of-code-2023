import { Coord, Direction, Grid } from 'types';

export function moveRock(rock: Coord, grid: Grid, direction: Direction = 'N') {
  grid[rock[0]][rock[1]] = '.';

  if (direction === 'N') {
    let y = rock[0] - 1;

    for (; y >= 0; y--) {
      if (grid[y][rock[1]] !== '.') {
        break;
      }
    }

    rock[0] = y + 1;
    grid[rock[0]][rock[1]] = 'O';

    return;
  }

  if (direction === 'W') {
    let x = rock[1] - 1;

    for (; x >= 0; x--) {
      if (grid[rock[0]][x] !== '.') {
        break;
      }
    }

    rock[1] = x + 1;
    grid[rock[0]][rock[1]] = 'O';

    return;
  }

  if (direction === 'S') {
    let y = rock[0] + 1;

    for (; y < grid.length; y++) {
      if (grid[y][rock[1]] !== '.') {
        break;
      }
    }

    rock[0] = y - 1;
    grid[rock[0]][rock[1]] = 'O';

    return;
  }

  if (direction === 'E') {
    let x = rock[1] + 1;

    for (; x < grid.length; x++) {
      if (grid[rock[0]][x] !== '.') {
        break;
      }
    }

    rock[1] = x - 1;
    grid[rock[0]][rock[1]] = 'O';

    return;
  }
}
