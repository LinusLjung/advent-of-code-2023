import { calculateRow } from 'calculateRow';

export function part1(input: string, prefill = false) {
  const lines = input.split('\n');

  return lines
    .map((line) => line.split(' ').map(Number))
    .map((line) => calculateRow(line, prefill))
    .reduce<number>((acc, curr) => acc + curr, 0);
}
