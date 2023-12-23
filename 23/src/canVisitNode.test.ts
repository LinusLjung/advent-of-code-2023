import { describe, expect, it } from 'bun:test';
import { canVisitNode } from 'canVisitNode';
import { PathNode } from 'types';

describe('canVisitNode()', () => {
  it.each<[PathNode, PathNode, boolean]>([
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '#',
      },
      {
        coord: [0, 1],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      false,
    ],
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '.',
      },
      {
        coord: [0, 1],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      true,
    ],
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      {
        coord: [0, 1],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      false,
    ],
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '>',
      },
      {
        coord: [0, 1],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      false,
    ],
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '>',
      },
      {
        coord: [-1, 0],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      true,
    ],
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '>',
      },
      {
        coord: [0, -1],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      true,
    ],
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '>',
      },
      {
        coord: [1, 0],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      true,
    ],
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: false,
        previous: null,
        type: 'v',
      },
      {
        coord: [1, 0],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '.',
      },
      false,
    ],
    [
      {
        coord: [0, 0],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '.',
      },
      {
        coord: [1, 0],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '>',
      },
      false,
    ],
    [
      {
        coord: [1, 1],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '.',
      },
      {
        coord: [1, 0],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '>',
      },
      true,
    ],
    [
      {
        coord: [1, -1],
        distance: 0,
        isVisited: false,
        previous: null,
        type: '.',
      },
      {
        coord: [1, 0],
        distance: 0,
        isVisited: true,
        previous: null,
        type: '>',
      },
      false,
    ],
  ])('should check target node validity', (target, source, expected) => {
    expect(canVisitNode(target, source)).toBe(expected);
  });
});
