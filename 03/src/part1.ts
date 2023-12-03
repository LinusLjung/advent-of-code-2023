import getMatches from 'getMatches';
import isPartNumber from 'isPartNumber';

export function part1(input: string) {
  const lines = input.split('\n');

  return lines
    .map((line, i) => {
      return getMatches(line)
        .filter((match) => {
          return isPartNumber(match, lines, i);
        })
        .map(([match]) => Number(match));
    })
    .filter((matches) => matches.length > 0)
    .flat()
    .reduce((sum, curr) => sum + curr);
}
