import { findEndNode } from 'findEndNode';
import { getNodesAndDirections } from 'getNodesAndDirections';

export function part1(input: string): number {
  const [nodes, directions] = getNodesAndDirections(input);

  return findEndNode(
    nodes.find((node) => node[0] === 'AAA')!,
    nodes,
    directions,
    (node) => {
      return node[0] === 'ZZZ';
    }
  );
}
