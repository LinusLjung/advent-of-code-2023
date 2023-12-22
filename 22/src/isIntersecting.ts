import { Block } from 'types';

function lineIsIntersecing(
  line1: number,
  length1: number,
  line2: number,
  length2: number
) {
  if (line1 === line2) {
    return true;
  }

  return (
    (line1 < line2 && line2 < line1 + length1) ||
    (line2 < line1 && line1 < line2 + length2)
  );
}

export function isIntersecting(block1: Block, block2: Block) {
  const [[w1, d1, h1], [x1, y1, z1]] = block1;
  const [[w2, d2, h2], [x2, y2, z2]] = block2;

  const xIsIntersecting = lineIsIntersecing(x1, w1, x2, w2);
  const yIsIntersecting = lineIsIntersecing(y1, d1, y2, d2);
  const zIsIntersecting = lineIsIntersecing(z1, h1, z2, h2);

  return xIsIntersecting && yIsIntersecting && zIsIntersecting;
}
