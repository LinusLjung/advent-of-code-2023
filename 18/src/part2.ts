import { solve } from 'solve';
import { Direction, Instruction } from 'types';

function parseLine(line: string): Instruction {
  const parts = line.split(' ');

  const direction = ['R', 'D', 'L', 'U'][
    Number(parts[2].slice(7, -1))
  ] as Direction;
  const digLength = parseInt(parts[2].slice(2, -2), 16);

  return {
    direction,
    digLength,
  };
}

export function part2(input: string) {
  const instructions = input.split('\n').map(parseLine);

  console.log(instructions);

  solve(instructions);
}
