import { getBlock } from 'getBlock';
import { tick } from 'tick';
import { BlockCoords } from 'types';

export function part1(input: string) {
  const blocks = input
    .split('\n')
    .map(
      (line) =>
        line
          .split('~')
          .map((coord) => coord.split(',').map(Number)) as BlockCoords
    )
    .map((coords) => getBlock(coords))
    .sort((a, b) => {
      return a[1][2] - b[1][2];
    });

  console.time('a');
  while (tick(blocks));
  console.timeEnd('a');

  let safeCount = 0;

  console.time('b');
  for (const block of blocks) {
    if (
      tick(
        blocks.filter((b) => b !== block),
        true,
        true
      )
    ) {
      continue;
    }

    safeCount++;
  }
  console.timeEnd('b');

  return safeCount;
}
