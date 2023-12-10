import { Grid, Node } from 'types';
import { PIPE_CONNECTIONS } from 'consts';

export type PipeType = keyof typeof PIPE_CONNECTIONS;

export function findPaths(node: Node, grid: Grid): [Node, Node] {
  const pipe = grid[node[0]][node[1]] as PipeType;
  const connections = PIPE_CONNECTIONS[pipe];

  return connections.map<Node>((connection) => {
    return [node[0] + connection[0], node[1] + connection[1]];
  }) as [Node, Node];
}
