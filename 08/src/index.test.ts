import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import { part2 } from 'part2';
import path from 'path';

const exampleInput = getInput(
  path.join(import.meta.dir, '../example-input.txt')
);
const exampleInput2 = getInput(
  path.join(import.meta.dir, '../example-input-2.txt')
);
const exampleInput3 = getInput(
  path.join(import.meta.dir, '../example-input-3.txt')
);
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toBe(2);
    expect(part1(exampleInput2)).toBe(6);
    expect(part1(input)).toBe(19783);
  });
});

describe('part2()', () => {
  it('should output the solution', () => {
    expect(part2(exampleInput3)).toBe(6);
    expect(part2(input)).toBe(9177460370549);
  });
});
