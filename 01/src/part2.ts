import getNumbers from 'getNumbers';

export function part2(input: string) {
  const lines = input.split('\n');

  return (
    lines
      .map((line) => getNumbers(line, true))
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0)
  );
}
