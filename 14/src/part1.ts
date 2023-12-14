type Grid = string[][];
type Coord = [y: number, x: number];

function getGrid(input: string): Grid {
  return input.split('\n').map((line) => line.split(''));
}

function moveRock(grid: Grid, [y, x]: Coord) {
  let i = y - 1;

  for (; i >= 0; i--) {
    if (grid[i][x] !== '.') {
      break;
    }
  }

  grid[y][x] = '.';
  grid[i + 1][x] = 'O';
}

export function part1(input: string) {
  const grid = getGrid(input);

  for (let y = 1; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 'O') {
        moveRock(grid, [y, x]);
      }
    }
  }

  return grid.reduce(
    (acc, line, i) =>
      acc +
      line.reduce((acc, curr) => {
        if (curr === 'O') {
          return acc + 1;
        }
        return acc;
      }, 0) *
        (grid.length - i),
    0
  );

  console.log(grid);
}
