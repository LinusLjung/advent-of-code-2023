import { getDestinationForSource } from 'getDestinationForSource';
import { getMap } from 'getMap';
import { reducePair } from 'reducePair';

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

  // console.log(JSON.stringify(pairs));
  // // console.log(JSON.stringify(pairs);
  // for (let i = 0; i < pairs.length; i++) {
  //   console.log(pairs[i][1]);
  // }
  // console.log('--------------');

  for (let i = 0; i < pairs.length; i++) {
    for (let j = i + 1; j < pairs.length; j++) {
      pairs[i] = reducePair(pairs[i], pairs[j]);
    }
  }

  for (let i = pairs.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      pairs[i] = reducePair(pairs[i], pairs[j]);
    }
  }

  // console.log(JSON.stringify(pairs));

  // for (let i = 0; i < pairs.length; i++) {
  //   console.log(pairs[i][1]);
  // }

  let destination = Infinity;

  for (const [seed, length] of pairs) {
    console.time('a');
    for (let i = 0; i < length; i++) {
      destination = Math.min(
        destination,
        maps.reduce(
          (source, map) => getDestinationForSource(source, map),
          seed + i
        )
      );
    }
    console.timeEnd('a');
  }

  return destination;
}
