import { getHash } from 'getHash';

export function part1(input: string) {
  return input
    .split(',')
    .map(getHash)
    .reduce((acc, curr) => acc + curr);
}
