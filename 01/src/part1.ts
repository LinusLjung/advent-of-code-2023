import getNumbers from 'getNumbers';

export function part1(input: string) {
  const lines = input.split('\n');

  return lines
    .map(line => getNumbers(line))
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
