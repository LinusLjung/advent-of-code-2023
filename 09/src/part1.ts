import { calculateRow } from 'calculateRow';

export function part1(input: string) {
  const lines = input.split('\n');

  return lines
    .map((line) => line.split(' ').map(Number))
    .map(calculateRow)
    .reduce<number>((acc, curr) => acc + curr, 0);
}
