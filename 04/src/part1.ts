import { getCard } from 'getCard';

function getPoints<T>(items: T[]): number {
  return Math.pow(2, items.length - 1);
}

export function part1(input: string) {
  const lines = input.split('\n');

  return lines
    .map(getCard)
    .map((card) => card.duplicates)
    .filter((duplicates) => duplicates.length)
    .reduce((sum, curr) => sum + getPoints(curr), 0);
}
