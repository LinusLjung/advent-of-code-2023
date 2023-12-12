import { getPermutations } from 'getPermutations';

export function part1(input: string) {
  const lines: [string, number[]][] = input
    .split('\n')
    .map((line) => line.split(' '))
    .map(([springs, arrangement]) => [
      springs,
      arrangement.split(',').map(Number),
    ]);

  return lines
    .map<string[]>((line) => getPermutations(line, 0))
    .reduce<number>((acc, curr) => acc + curr.length, 0);
}
