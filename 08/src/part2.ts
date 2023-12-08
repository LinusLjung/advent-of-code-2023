import { findEndNode } from 'findEndNode';
import { getNodesAndDirections } from 'getNodesAndDirections';

function gcd(a: number, b: number): number {
  return a ? gcd(b % a, a) : b;
}

function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b);
}

export function part2(input: string) {
  const [nodes, directions] = getNodesAndDirections(input);

  const startNodes = nodes.filter((node) => node[0].at(-1) === 'A');

  return startNodes
    .map((node) =>
      findEndNode(node, nodes, directions, (node) => node[0].at(-1) === 'Z')
    )
    .reduce(lcm);
}
