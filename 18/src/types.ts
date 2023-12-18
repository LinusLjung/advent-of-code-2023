export type Direction = 'R' | 'D' | 'L' | 'U';
export type Grid = string[][];
export type Coord = [y: number, x: number];

export type Instruction = {
  direction: Direction;
  digLength: number;
};
