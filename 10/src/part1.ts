import assert from 'assert';

type Grid = string[][];
type Node = [y: number, x: number];

function nodeCompare(a: Node, b: Node) {
  return a.join() === b.join();
}

function findStart(grid: Grid): Node {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'S') {
        return [i, j];
      }
    }
  }

  throw false;
}

const TOP_CONNECTORS = ['|', '7', 'F'];
const BOTTOM_CONNECTORS = ['|', 'L', 'J'];
const LEFT_CONNECTORS = ['-', 'L', 'F'];
const RIGHT_CONNECTORS = ['-', 'J', '7'];

const PIPE_CONNECTIONS = {
  '|': [
    [-1, 0],
    [1, 0],
  ],
  '-': [
    [0, -1],
    [0, 1],
  ],
  L: [
    [-1, 0],
    [0, 1],
  ],
  J: [
    [-1, 0],
    [0, -1],
  ],
  '7': [
    [0, -1],
    [1, 0],
  ],
  F: [
    [0, 1],
    [1, 0],
  ],
} as const;

type PipeType = keyof typeof PIPE_CONNECTIONS;
// | is a vertical pipe connecting north and south.
// - is a horizontal pipe connecting east and west.
// L is a 90-degree bend connecting north and east.
// J is a 90-degree bend connecting north and west.
// 7 is a 90-degree bend connecting south and west.
// F is a 90-degree bend connecting south and east.

function findStartPaths(node: Node, grid: Grid) {
  const paths: Node[] = [];
  const topCoords: Node = [node[0] - 1, node[1]];
  const bottomCoords: Node = [node[0] + 1, node[1]];
  const leftCoords: Node = [node[0], node[1] - 1];
  const rightCoords: Node = [node[0], node[1] + 1];
  const top = grid[topCoords[0]]?.[topCoords[1]];
  const bottom = grid[bottomCoords[0]]?.[bottomCoords[1]];
  const left = grid[leftCoords[0]]?.[leftCoords[1]];
  const right = grid[rightCoords[0]]?.[rightCoords[1]];

  if (TOP_CONNECTORS.includes(top)) {
    paths.push(topCoords);
  }

  if (BOTTOM_CONNECTORS.includes(bottom)) {
    paths.push(bottomCoords);
  }

  if (LEFT_CONNECTORS.includes(left)) {
    paths.push(leftCoords);
  }

  if (RIGHT_CONNECTORS.includes(right)) {
    paths.push(rightCoords);
  }

  assert(paths.length === 2, `${node}: ${paths.join('|')}`);

  return paths as [Node, Node];
}

function findPaths(node: Node, grid: Grid): [Node, Node] {
  const pipe = grid[node[0]][node[1]] as PipeType;
  const connections = PIPE_CONNECTIONS[pipe];

  return connections.map<Node>((connection) => {
    return [node[0] + connection[0], node[1] + connection[1]];
  }) as [Node, Node];
}

export function part1(input: string) {
  const grid = input.split('\n').map((line) => line.split(''));
  const start = findStart(grid);
  const prev = [start, start];
  const paths = findStartPaths(start, grid);

  let counter = 1;

  while (!nodeCompare(paths[0], paths[1])) {
    paths.forEach((path, i) => {
      const [newPath1, newPath2] = findPaths(path, grid);

      if (!nodeCompare(newPath1, prev[i])) {
        paths[i] = newPath1;
      }

      if (!nodeCompare(newPath2, prev[i])) {
        paths[i] = newPath2;
      }

      prev[i] = path;
    });

    counter++;
  }

  return counter;
}
