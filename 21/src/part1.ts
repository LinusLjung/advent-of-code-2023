type Node = '.' | '#' | 'S' | 'v' | 'q';
type Grid = Node[][];
type Coord = [y: number, x: number];

function findStart(grid: Grid): Coord {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 'S') {
        return [y, x];
      }
    }
  }

  throw new Error('Start not found in grid');
}

function getGrid(input: string): Grid {
  return input.split('\n').map((line) => line.split('')) as Grid;
}

function canVisitNode(node: Node | undefined) {
  return node && node !== '#' && node !== 'v' && node !== 'q';
}

function findPaths(coord: Coord, grid: Grid) {
  const y = coord[0];
  const x = coord[1];

  const northCoord: Coord = [y - 1, x];
  const southCoord: Coord = [y + 1, x];
  const westCoord: Coord = [y, x - 1];
  const eastCoord: Coord = [y, x + 1];
  const north = grid[northCoord[0]]?.[x];
  const south = grid[southCoord[0]]?.[x];
  const west = grid[y]?.[westCoord[1]];
  const east = grid[y]?.[eastCoord[1]];

  const paths: Coord[] = [];

  if (canVisitNode(north)) {
    paths.push(northCoord);
  }
  if (canVisitNode(south)) {
    paths.push(southCoord);
  }
  if (canVisitNode(west)) {
    paths.push(westCoord);
  }
  if (canVisitNode(east)) {
    paths.push(eastCoord);
  }

  return paths;
}

export function part1(input: string, stepTarget = 64) {
  const grid = getGrid(input);
  const start = findStart(grid);

  const queue: [Coord, stepCount: number][] = [[start, 0]];
  let endCount = 0;

  while (queue.length) {
    const [node, stepCount] = queue.shift()!;

    if (stepCount % 2 === stepTarget % 2) {
      endCount++;
      grid[node[0]][node[1]] = 'v';
    }

    if (stepCount === stepTarget) {
      continue;
    }

    const paths = findPaths(node, grid);

    for (let j = 0; j < paths.length; j++) {
      grid[paths[j][0]][paths[j][1]] = 'q';
      queue.push([paths[j], stepCount + 1]);
    }
  }

  return endCount;
}
