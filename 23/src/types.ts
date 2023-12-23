export type Slope = '>' | 'v';
export type Node = '.' | '#' | Slope | 'O';
export type Coord = [y: number, x: number];
export type PathNode = {
  coord: Coord;
  previous: PathNode | null;
  distance: number;
  isVisited: boolean;
  type: Node;
};
export type Grid = PathNode[][];
