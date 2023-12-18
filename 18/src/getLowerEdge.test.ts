import { describe, expect, it } from 'bun:test';
import { getLowerEdge } from 'getLowerEdge';
import { Instruction } from 'types';

const input = [
  { direction: 'R', digLength: 6, color: '#70c710' },
  { direction: 'D', digLength: 5, color: '#0dc571' },
  { direction: 'L', digLength: 2, color: '#5713f0' },
  { direction: 'D', digLength: 2, color: '#d2c081' },
  { direction: 'R', digLength: 2, color: '#59c680' },
  { direction: 'D', digLength: 2, color: '#411b91' },
  { direction: 'L', digLength: 5, color: '#8ceee2' },
  { direction: 'U', digLength: 2, color: '#caa173' },
  { direction: 'L', digLength: 1, color: '#1b58a2' },
  { direction: 'U', digLength: 2, color: '#caa171' },
  { direction: 'R', digLength: 2, color: '#7807d2' },
  { direction: 'U', digLength: 3, color: '#a77fa3' },
  { direction: 'L', digLength: 4, color: '#015232' },
  { direction: 'U', digLength: 3, color: '#7a21e3' },
  { direction: 'R', digLength: 2, color: '#111111' },
  { direction: 'D', digLength: 1, color: '#222222' },
] as Instruction[];

describe('getLowerEdge()', () => {
  it('should find the lowest x and y of the grid', () => {
    expect(getLowerEdge(input)).toEqual([-1, -2]);
  });
});
