import getHighestKnown from 'getHighestKnown';
import setStringToSet from 'setStringToSet';
import { Set } from 'types';

function getPower(set: Set) {
  return set.blue * set.green * set.red;
}

export function part2(input: string) {
  return input
    .split('\n')
    .map((line) => {
      const [, sets] = line.split(':');

      return getPower(getHighestKnown(sets.split('; ').map(setStringToSet)));
    })
    .reduce((sum, curr) => sum + curr);
}
