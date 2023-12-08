export function getNodesAndDirections(input: string) {
  const [directionLine, map] = input.split('\n\n');

  const directions = directionLine.split('') as Array<'L' | 'R'>;

  const nodes = map.split('\n').map((line) => {
    const [node, paths] = line.split(' = ');

    return [
      node,
      [...paths.matchAll(/[A-Z\d]+/g)].map((match) => match[0]),
    ] as [string, [string, string]];
  });

  return [nodes, directions] as const;
}
