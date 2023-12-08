import { Direction, Node } from 'types';

export function findEndNode(
  start: Node,
  nodes: Node[],
  directions: Direction[],
  isEnd: (node: Node) => boolean
) {
  let i = 0;
  let currentNode = start;

  for (; !isEnd(currentNode); i++) {
    currentNode = nodes.find(
      (node) =>
        node[0] ===
        currentNode[1][directions[i % directions.length] === 'L' ? 0 : 1]
    )!;
  }

  return i;
}
