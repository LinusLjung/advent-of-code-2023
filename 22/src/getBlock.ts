import { Block, BlockCoords, Coord } from 'types';

export function getBlock(coords: BlockCoords): Block {
  const width = Math.abs(coords[0][0] - coords[1][0]) + 1;
  const depth = Math.abs(coords[0][1] - coords[1][1]) + 1;
  const height = Math.abs(coords[0][2] - coords[1][2]) + 1;

  const position: number[] = [];

  for (let i = 0; i < 3; i++) {
    position.push(Math.min(coords[0][i], coords[1][i]));
  }

  return [[width, depth, height], position as Coord];
}
