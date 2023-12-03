import getCogParts from 'getCogParts';
import getMatches from 'getMatches';

export function part2(input: string) {
  const lines = input.split('\n');

  return lines
    .map((line, i) => {
      const matches = getMatches(line, /\*/g);

      return matches
        .map((match) => {
          return getCogParts(match, lines, i);
        })
        .filter((parts) => parts.length);
    })
    .flat()
    .reduce((sum, curr) => sum + curr[0] * curr[1], 0);
}
