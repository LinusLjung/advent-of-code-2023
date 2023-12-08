export function part1(input: string): number {
  const [directionLine, map] = input.split('\n\n');

  const directions = directionLine.split('') as Array<'L' | 'R'>;

  const nodes = map.split('\n').map((line) => {
    const [node, paths] = line.split(' = ');

    return [node, [...paths.matchAll(/[A-Z]+/g)].map((match) => match[0])] as [
      string,
      [string, string]
    ];
  });

  let i = 0;
  let currentNode = nodes.find((node) => node[0] === 'AAA')!;

  for (; currentNode[0] !== 'ZZZ'; i++) {
    currentNode = nodes.find(
      (node) =>
        node[0] ===
        currentNode[1][directions[i % directions.length] === 'L' ? 0 : 1]
    )!;
  }

  return i;
}
