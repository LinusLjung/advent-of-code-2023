import { isIntersecting } from 'isIntersecting';
import { Block } from 'types';

function isGrounded(block: Block) {
  return block[1][2] <= 1;
}

function moveBlock(block: Block, blocks: Block[], dry: boolean) {
  let distance = 0;

  if (isGrounded(block)) {
    return distance;
  }

  let loop = true;
  let shouldRevert = dry;

  while (loop) {
    block[1][2]--;
    distance++;

    for (const block2 of blocks) {
      if (block === block2) {
        continue;
      }

      if (isIntersecting(block, block2)) {
        shouldRevert = true;
        loop = false;
        break;
      }
    }

    if (isGrounded(block)) {
      break;
    }
  }

  if (shouldRevert) {
    block[1][2] += distance;
  }

  return distance;
}

export function tick(blocks: Block[], earlyBreak = false, dry = false) {
  let moveCount = 0;

  for (const block of blocks) {
    if (earlyBreak && moveCount) {
      return moveCount;
    }

    const distance = moveBlock(block, blocks, dry);

    if (distance) {
      moveCount++;
    }
  }

  return moveCount;
}
