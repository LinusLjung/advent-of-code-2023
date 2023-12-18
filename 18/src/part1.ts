import { solve } from 'solve';
import { Direction, Instruction } from 'types';

function parseLine(line: string): Instruction {
  const parts = line.split(' ');

  const direction = parts[0] as Direction;
  const digLength = Number(parts[1]);

  return {
    direction,
    digLength,
  };
}

export function part1(input: string) {
  const instructions = input.split('\n').map(parseLine);

  return solve(instructions);
}
