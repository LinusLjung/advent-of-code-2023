import { Node } from 'types';

export function nodeCompare(a: Node, b: Node) {
  return a.join() === b.join();
}
