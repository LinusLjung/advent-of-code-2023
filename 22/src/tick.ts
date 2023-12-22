import { isIntersecting } from 'isIntersecting';
import { Block } from 'types';

export function tick(blocks: Block[], earlyBreak = false, dry = false) {
  let moveCount = 0;

  for (const block of blocks) {
    if (earlyBreak && moveCount) {
      return moveCount;
    }

    if (block[1][2] === 1) {
      continue;
    }

    block[1][2]--;
    moveCount++;
    let shouldRevert = dry;

    for (const block2 of blocks) {
      if (block === block2) {
        continue;
      }

      if (isIntersecting(block, block2)) {
        shouldRevert = true;
        moveCount--;
        break;
      }
    }

    if (shouldRevert) {
      block[1][2]++;
    }
  }

  return moveCount;
}
