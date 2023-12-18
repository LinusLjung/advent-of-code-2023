import assert from 'assert';
import { Coord } from 'types';
import { Grid } from 'part1';

export function floodFill(startNode: Coord, grid: Grid) {
  let count = 0;
  const queue: Coord[] = [startNode];

  while (queue.length) {
    const node = queue.shift();

    assert(node);

    if (grid[node[0]][node[1]] === '#') {
      continue;
    }

    grid[node[0]][node[1]] = '#';
    count++;

    const west: Coord = [node[0], node[1] - 1];
    if (grid[west[0]][west[1]]) {
      queue.push(west);
    }

    const east: Coord = [node[0], node[1] + 1];
    if (grid[east[0]][east[1]]) {
      queue.push(east);
    }

    const north: Coord = [node[0] - 1, node[1]];
    if (grid[north[0]]?.[north[1]]) {
      queue.push(north);
    }

    const south: Coord = [node[0] + 1, node[1]];
    if (grid[south[0]]?.[south[1]]) {
      queue.push(south);
    }
  }

  return count;
}
