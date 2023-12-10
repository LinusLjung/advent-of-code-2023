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

  let enclosedCounter = 0;

  for (let y = 0; y < grid.length; y++) {
    let crossingCounter = 0;

    for (let x = 0; x < grid[y].length; x++) {
      const visitedIndex = visitedNodes.indexOf([y, x].join());

      if (visitedIndex === -1) {
        if (crossingCounter !== 0) {
          enclosedCounter++;
        }

        continue;
      }

      const previousNode =
        visitedNodes[
          (visitedNodes.length + visitedIndex - 1) % visitedNodes.length
        ];

      if (previousNode === [y + 1, x].join()) {
        crossingCounter++;
      }

      if (
        visitedNodes[(visitedIndex + 1) % visitedNodes.length] ===
        [y + 1, x].join()
      ) {
        crossingCounter--;
      }
    }
  }

  return enclosedCounter;
}
