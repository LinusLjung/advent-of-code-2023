import { getDestinationForSource } from 'getDestinationForSource';
import { getMap } from 'getMap';

function getSeeds(line: string) {
  return line.split(': ')[1].split(' ').map(Number);
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
