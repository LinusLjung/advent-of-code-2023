import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import path from 'path';

const exampleInput = getInput(
  path.join(import.meta.dir, '../example-input.txt')
);
const exampleInput2 = getInput(
  path.join(import.meta.dir, '../example-input-2.txt')
);
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toBe(32000000);
    expect(part1(exampleInput2)).toBe(11687500);
    expect(part1(input)).toBe(787056720);
  });
});

describe.skip('part2()', () => {
  it('should output the solution', () => {});
});
