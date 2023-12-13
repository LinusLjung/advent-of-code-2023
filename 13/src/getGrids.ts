import { Grid } from 'Grid';
import { getFlippedGrid } from 'getFlippedGrid';

export function getGrids(input: string): [grid: Grid, rotatedGrid: Grid] {
  const lines: Grid = input.split('\n');

  return [lines, getFlippedGrid(lines)];
}
