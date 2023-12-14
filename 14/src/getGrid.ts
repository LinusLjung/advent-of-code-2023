import { Grid } from 'types';

export function getGrid(input: string): Grid {
  return input.split('\n').map((line) => line.split(''));
}
