import { getDestinationForSource } from 'getDestinationForSource';
import { getMap } from 'getMap';

function getPairs(line: string) {
  const values = line.split(': ')[1].split(' ').map(Number);
  const pairs: Array<[number, number]> = [];

  for (let i = 0; i < values.length; i += 2) {
    pairs.push([values[i], values[i + 1]]);
  }

  return pairs;
}

// Piece of shit code took 37 minutes to finish
// TODO: Fix piece of shit code
export function part2(input: string) {
  const parts = input.split('\n\n');
  const pairs = getPairs(parts[0]);
  const maps = parts.slice(1).map(getMap);

  let destination = Infinity;

  for (const [seed, length] of pairs) {
    for (let i = 0; i < length; i++) {
      destination = Math.min(
        destination,
        maps.reduce(
          (source, map) => getDestinationForSource(source, map),
          seed + i
        )
      );
    }
  }

  return destination;
}
