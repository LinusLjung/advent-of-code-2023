import getNumbers from 'getNumbers';

export function part1(input: string) {
  const lines = input.split('\n');

  return lines
    .map(getNumbers)
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
