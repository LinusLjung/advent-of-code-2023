type Coord = [y: number, x: number];

type Cell = {
  weight: number;
  visitedDirections: string[];
  tentativeDistance: number;
  coord: Coord;
  previous: Cell | null;
  isPath: boolean;
};

function canGoHorizontally(cell: Cell) {
  const cells = [cell.previous, cell.previous?.previous].filter(
    Boolean
  ) as Cell[];

  if (cells.length !== 2) {
    return true;
  }

  return !cells.every((c) => c.coord[0] === cell.coord[0]);
}

function canGoVertically(cell: Cell) {
  const cells = [cell.previous, cell.previous?.previous].filter(
    Boolean
  ) as Cell[];

  return !cells.every((c) => c.coord[1] === cell.coord[1]);
}

export function part1(input: string) {
  const grid = input.split('\n').map((row, y) =>
    row.split('').map<Cell>((cell, x) => ({
      weight: Number(cell),
      visitedDirections: [],
      tentativeDistance: Infinity,
      coord: [y, x],
      previous: null,
      isPath: false,
    }))
  );

  const target = grid[grid.length - 1][grid[0].length - 1];

  grid[0][0].tentativeDistance = 0;

  let queue: Cell[] = [grid[0][0]];
  let current = undefined as unknown as Cell;

  while ((current = queue.shift()!)) {
    console.log(queue.length);

    const directions: Coord[] = [];

    if (canGoHorizontally(current)) {
      directions.push([0, -1], [0, 1]);
    }

    if (canGoVertically(current)) {
      directions.push([-1, 0], [1, 0]);
    }

    for (const direction of directions) {
      const [yd, xd] = direction;
      const cell = grid[current.coord[0] + yd]?.[current.coord[1] + xd];

      if (
        !cell ||
        current.previous === cell ||
        cell.visitedDirections.includes(direction.toString())
      ) {
        continue;
      }

      cell.visitedDirections.push(direction.toString());

      const newDistance = current.tentativeDistance + cell.weight;

      if (newDistance < cell.tentativeDistance) {
        cell.previous = current;
        cell.tentativeDistance = newDistance;
      }

      console.log(cell);
      queue.push(cell);
    }
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      console.log(grid[y][x].visitedDirections);
    }
  }

  return target.tentativeDistance;
}
