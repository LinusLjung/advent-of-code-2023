import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import { part2 } from 'part2';
import path from 'path';

const exampleInput = getInput(
  path.join(import.meta.dir, '../example-input.txt')
);
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toBe(35);
    expect(part1(input)).toBe(265018614);
  });
});

describe('part2()', () => {
  it('should output the solution', () => {
    expect(part2(exampleInput)).toBe(46);
    // expect(part2(input)).toBe(63179500);
  });
});
