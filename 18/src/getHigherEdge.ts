import { Coord, Instruction } from 'types';

export function getHigherEdge(instructions: Instruction[]): Coord {
  const x = instructions
    .filter(({ direction }) => direction === 'R' || direction === 'L')
    .reduce<[number, number]>(
      (acc, curr) => {
        if (curr.direction === 'R') {
          const newValue = acc[0] + curr.digLength;
          return [newValue, Math.max(acc[1], newValue)];
        }

        const newValue = acc[0] - curr.digLength;
        return [newValue, acc[1]];
      },
      [0, 0]
    );

  const y = instructions
    .filter(({ direction }) => direction === 'U' || direction === 'D')
    .reduce<[number, number]>(
      (acc, curr) => {
        if (curr.direction === 'D') {
          const newValue = acc[0] + curr.digLength;
          return [newValue, Math.max(acc[1], newValue)];
        }

        const newValue = acc[0] - curr.digLength;
        return [newValue, acc[1]];
      },
      [0, 0]
    );

  return [y[1], x[1]];
}
