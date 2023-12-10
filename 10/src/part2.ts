import { findPaths } from 'findPaths';
import { findStart } from 'findStart';
import { findStartPaths } from 'findStartPaths';
import { nodeCompare } from 'nodeCompare';

export function part2(input: string) {
  const grid = input.split('\n').map((line) => line.split(''));
  const start = findStart(grid);
  let currentNode = findStartPaths(start, grid)[0];
  const visitedNodes = [start.join()];

  while (!nodeCompare(currentNode, start)) {
    const prev = visitedNodes.at(-1)!;
    const newPaths = findPaths(currentNode, grid);

    visitedNodes.push(currentNode.join());

    for (const newPath of newPaths) {
      if (newPath.join() !== prev) {
        currentNode = newPath;

        break;
      }
    }
  }

  // Cheesy reddit solution
  const lx = grid[0].length / 4;
  const ly = grid.length / 4;

  return grid
    .slice(ly, -ly)
    .map((line, y) => {
      return line
        .slice(lx, -lx)
        .filter((node, x) => !visitedNodes.includes([y + ly, x + lx].join()))
        .length;
    })
    .reduce((acc, curr) => acc + curr);
}
