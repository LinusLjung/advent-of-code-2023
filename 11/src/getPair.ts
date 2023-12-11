import { Coord, Pair } from 'types';

export function getPair(
  galaxy1: Coord,
  galaxy2: Coord,
  emptyRows: number[],
  emptyColumns: number[]
): Pair {
  const y1 = galaxy1[0];
  const y2 = galaxy2[0];
  const x1 = galaxy1[1];
  const x2 = galaxy2[1];
  const ySpan = [Math.min(y1, y2), Math.max(y1, y2)];
  const xSpan = [Math.min(x1, x2), Math.max(x1, x2)];

  let yDistance = ySpan[1] - ySpan[0];
  let xDistance = xSpan[1] - xSpan[0];

  for (const row of emptyRows) {
    if (row > ySpan[0] && row < ySpan[1]) {
      yDistance++;
    }
  }

  for (const column of emptyColumns) {
    if (column > xSpan[0] && column < xSpan[1]) {
      xDistance++;
    }
  }

  return {
    pair: [galaxy1, galaxy2],
    distance: xDistance + yDistance,
  };
}
