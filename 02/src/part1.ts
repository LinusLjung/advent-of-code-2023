import getHighestKnown from 'getHighestKnown';
import setStringToSet from 'setStringToSet';
import { Set } from 'types';

const LIMIT: Set = {
  blue: 14,
  green: 13,
  red: 12,
};

export function part1(input: string) {
  return input
    .split('\n')
    .map((line) => {
      const [game, sets] = line.split(':');
      const id = Number(game.split(' ')[1]);

      const highestKnownSet = getHighestKnown(
        sets.split('; ').map(setStringToSet)
      );

      return { id, highestKnownSet };
    })
    .filter(({ highestKnownSet }) => {
      return Object.entries(highestKnownSet).every(
        ([key, value]) => LIMIT[key as keyof Set] >= value
      );
    })
    .reduce((sum, { id }) => sum + id, 0);
}
