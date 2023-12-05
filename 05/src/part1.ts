import { getDestinationForSource } from 'getDestinationForSource';

function getSeeds(line: string) {
  return line.split(': ')[1].split(' ').map(Number);
}

function getMap(
  map: string
): Array<
  [destinationRangeStart: number, sourceRangeStart: number, rangeLength: number]
> {
  return map
    .split('\n')
    .slice(1)
    .map((line) => line.split(' ').map(Number) as [number, number, number]);
}

export function part1(input: string) {
  const parts = input.split('\n\n');
  const seeds = getSeeds(parts[0]);
  const maps = parts.slice(1).map(getMap);

  const destinations = seeds.map((seed) =>
    maps.reduce((source, map) => getDestinationForSource(source, map), seed)
  );

  return destinations.reduce((acc, curr) => Math.min(acc, curr));
}
