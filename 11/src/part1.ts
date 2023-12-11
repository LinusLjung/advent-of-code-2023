import { getPair } from 'getPair';
import { Coord, Pair } from 'types';

type Grid<T> = T[][];

function findGalaxies(grid: Grid<string>): Coord[] {
  const galaxies: Coord[] = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === '#') {
        galaxies.push([y, x]);
      }
    }
  }

  return galaxies;
}

function findEmptyRows(grid: Grid<string>): number[] {
  const emptyRows: number[] = [];

  for (let i = 0; i < grid.length; i++) {
    if (grid[i].every((item) => item === '.')) {
      emptyRows.push(i);
    }
  }

  return emptyRows;
}

function findEmptyColumns(grid: Grid<string>): number[] {
  const flippedGrid: Grid<string> = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      flippedGrid[x] ??= [];
      flippedGrid[x].push(grid[y][x]);
    }
  }

  return findEmptyRows(flippedGrid);
}

export function part1(input: string) {
  const grid = input.split('\n').map((line) => line.split(''));
  const galaxies = findGalaxies(grid);
  const emptyRows = findEmptyRows(grid);
  const emptyColumns = findEmptyColumns(grid);
  const pairs: Pair[] = [];

  for (let i = 0; i < galaxies.length; i++) {
    for (let j = i + 1; j < galaxies.length; j++) {
      const galaxy = galaxies[i];
      const pair = getPair(galaxy, galaxies[j], emptyRows, emptyColumns);

      pairs.push(pair);
    }
  }

  return pairs
    .map<number>((pair) => pair.distance)
    .reduce((acc, curr) => acc + curr);
}
