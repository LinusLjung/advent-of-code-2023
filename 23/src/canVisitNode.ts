import { PathNode } from 'types';

export function canVisitNode(target: PathNode, source: PathNode) {
  if (target.isVisited || target.type === '#') {
    return false;
  }

  if (source.type === 'v') {
    return target.coord[0] === source.coord[0] + 1;
  }

  if (source.type === '>') {
    return target.coord[1] === source.coord[1] + 1;
  }

  if (target.type === '.') {
    return true;
  }

  if (target.type === 'v') {
    return target.coord[0] + 1 !== source.coord[0];
  }

  if (target.type === '>') {
    return target.coord[1] + 1 !== source.coord[1];
  }

  return false;
}
