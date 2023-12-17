import { part1 } from 'part1';
import { Grid } from 'types';

export function part2(input: string) {
  const grid: Grid = input.split('\n').map((row) => row.split(''));
  const results: number[] = [];

  for (let y = 0; y < grid.length; y++) {
    results.push(part1(input, [y, 0, 'E']));
    results.push(part1(input, [y, grid[y].length - 1, 'W']));
  }

  for (let x = 0; x < grid[0].length; x++) {
    results.push(part1(input, [0, x, 'S']));
    results.push(part1(input, [grid.length - 1, x, 'W']));
  }

  return results.reduce((acc, curr) => Math.max(acc, curr));
}
