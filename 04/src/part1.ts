import { getCard } from 'getCard';
import { getDuplicates } from 'getDuplicates';

function getPoints<T>(items: T[]): number {
  return Math.pow(2, items.length - 1);
}

export function part1(input: string) {
  const lines = input.split('\n');

  return lines
    .map(getCard)
    .map(({ numbers, winningNumbers }) =>
      getDuplicates(numbers, winningNumbers)
    )
    .filter((arr) => arr.length)
    .reduce((sum, curr) => sum + getPoints(curr), 0);
}
