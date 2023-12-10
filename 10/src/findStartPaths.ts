import assert from 'assert';
import {
  BOTTOM_CONNECTORS,
  LEFT_CONNECTORS,
  RIGHT_CONNECTORS,
  TOP_CONNECTORS,
} from 'consts';
import { Grid, Node } from 'types';

// | is a vertical pipe connecting north and south.
// - is a horizontal pipe connecting east and west.
// L is a 90-degree bend connecting north and east.
// J is a 90-degree bend connecting north and west.
// 7 is a 90-degree bend connecting south and west.
// F is a 90-degree bend connecting south and east.
export function findStartPaths(node: Node, grid: Grid) {
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
