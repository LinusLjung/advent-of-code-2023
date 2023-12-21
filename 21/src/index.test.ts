import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import path from 'path';

const exampleInput = getInput(
  path.join(import.meta.dir, '../example-input.txt')
);
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput, 1)).toBe(2);
    expect(part1(exampleInput, 2)).toBe(4);
    expect(part1(exampleInput, 3)).toBe(6);
    expect(part1(exampleInput, 4)).toBe(9);
    expect(part1(exampleInput, 6)).toBe(16);
    expect(part1(exampleInput, 14)).toBe(42);
    expect(part1(exampleInput, 64)).toBe(42);
    expect(part1(input)).toBe(3768);
  });
});

describe.skip('part2()', () => {
  it('should output the solution', () => {});
});
