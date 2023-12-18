import { floodFill } from 'floodFill';
import { getHigherEdge } from 'getHigherEdge';
import { getLowerEdge } from 'getLowerEdge';
import { raycast } from 'raycast';
import { Coord, Direction, Grid, Instruction } from 'types';

function coordIsInside(coord: Coord, grid: Grid) {
  return (
    [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ] as Coord[]
  ).every((direction) => raycast(coord, direction, grid));
}

function findInsideNode(grid: Grid, trench: Coord[]): Coord {
  for (const trenchCoord of trench) {
    const insideCoord = (
      [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ] as Coord[]
    )
      .map<Coord>((coord) => [
        trenchCoord[0] + coord[0],
        trenchCoord[1] + coord[1],
      ])
      .filter((coord) => grid[coord[0]]?.[coord[1]])
      .find((coord) => coordIsInside(coord, grid));

    if (insideCoord) {
      return insideCoord;
    }
  }

  throw new Error('Could not find any inside node');
}

function getGrid(instructions: Instruction[], trench: Coord[]): Grid {
  const [lowerY, lowerX] = getLowerEdge(instructions);
  const [higherY, higherX] = getHigherEdge(instructions);

  const grid: Grid = [];

  for (let y = 0; y < higherY - lowerY + 1; y++) {
    grid.push([]);

    for (let x = 0; x < higherX - lowerX + 1; x++) {
      grid[y].push('.');
    }
  }

  for (const coord of trench) {
    grid[coord[0]][coord[1]] = '#';
  }

  return grid;
}

function dig(start: Coord, direction: Direction, length: number) {
  const trench: Coord[] = [];

  for (let i = 0; i < length; i++) {
    if (direction === 'U') {
      trench.push([start[0] - 1 - 1 * i, start[1]]);
    }

    if (direction === 'D') {
      trench.push([start[0] + 1 + 1 * i, start[1]]);
    }

    if (direction === 'R') {
      trench.push([start[0], start[1] + 1 + 1 * i]);
    }

    if (direction === 'L') {
      trench.push([start[0], start[1] - 1 - 1 * i]);
    }
  }

  return trench;
}

export function solve(instructions: Instruction[]) {
  const trench: Coord[] = [];

  const [lowerY, lowerX] = getLowerEdge(instructions);

  let previous: Coord = [-lowerY, -lowerX];

  instructions.forEach(({ direction, digLength }) => {
    trench.push(...dig(previous, direction, digLength));
    previous = trench.at(-1)!;
  });

  const grid = getGrid(instructions, trench);

  const insideNode = findInsideNode(grid, trench);
  const fillCount = floodFill(insideNode, grid);

  return (
    fillCount +
    instructions.reduce<number>((acc, curr) => acc + curr.digLength, 0)
  );
}
