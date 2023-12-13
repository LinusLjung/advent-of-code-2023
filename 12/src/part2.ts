import { expandLine } from 'expandLine';
import { getPermutations } from 'getPermutations';

export function part2(input: string) {
  console.time('a');
  const count = input
    .split('\n')
    .map((line) => line.split(' '))
    .map<[string, number[]]>(([springs, arrangement]) => [
      springs,
      arrangement.split(',').map(Number),
    ])
    .map(expandLine)
    .map<string[]>((line) => getPermutations(line, 0))
    .reduce<number>((acc, curr) => acc + curr.length, 0);

  console.timeEnd('a');
  return count;
}
