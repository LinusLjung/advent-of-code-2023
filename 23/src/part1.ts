import { canVisitNode } from 'canVisitNode';
import { Coord, Grid, Node, PathNode } from 'types';

function createPathNode(coord: Coord, type: Node): PathNode {
  return {
    distance: -Infinity,
    coord,
    previous: null,
    isVisited: false,
    type,
  };
}

function getUnvisitedNeighbours(node: PathNode, grid: Grid) {
  return (
    [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ] as Coord[]
  )
    .map(([dy, dx]) => grid[node.coord[0] + dy]?.[node.coord[1] + dx])
    .filter((node) => node)
    .filter((n) => canVisitNode(n, node));
}

export function part1(input: string) {
  const grid: Grid = input
    .split('\n')
    .map((line, y) =>
      line.split('').map((node, x) => createPathNode([y, x], node as Node))
    );

  const start: PathNode = (() => {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[0][x].type === '.') {
        return grid[0][x];
      }
    }

    throw new Error('Start node not found');
  })();

  start.distance = 0;
  start.isVisited = true;

  const target = (() => {
    const y = grid.length - 1;

    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x].type === '.') {
        return grid[y][x];
      }
    }

    throw new Error('Target node not found');
  })();

  let current = start;
  const queue: PathNode[] = [start];

  console.time('a');
  while (current !== target && queue.length) {
    current = queue.shift()!;

    const neighbours = getUnvisitedNeighbours(current, grid);

    for (const neighbour of neighbours) {
      if (neighbour.distance < current.distance + 1) {
        neighbour.distance = current.distance + 1;
        neighbour.previous = current;
      }

      queue.push(neighbour);
    }

    queue.sort((a, b) => b.distance - a.distance);

    current.isVisited = true;
  }

  let previous: PathNode | null = target;

  while ((previous = previous.previous)) {
    grid[previous.coord[0]][previous.coord[1]].type = 'O';
  }

  return current.distance;
}
