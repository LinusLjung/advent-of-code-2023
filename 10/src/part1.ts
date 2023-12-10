import { findPaths } from 'findPaths';
import { findStart } from 'findStart';
import { findStartPaths } from 'findStartPaths';
import { nodeCompare } from 'nodeCompare';

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
