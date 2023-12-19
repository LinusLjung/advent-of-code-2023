import { describe, expect, it } from 'bun:test';
import { processPart } from 'processPart';
import { Part, Workflows } from 'types';

const workflows: Workflows = {
  px: [
    { condition: ['a', '<', 2006], onAccept: 'qkq' },
    { condition: ['m', '>', 2090], onAccept: 'A' },
    { onAccept: 'rfg' },
  ],
  pv: [{ condition: ['a', '>', 1716], onAccept: 'R' }, { onAccept: 'A' }],
  lnx: [{ condition: ['m', '>', 1548], onAccept: 'A' }, { onAccept: 'A' }],
  rfg: [
    { condition: ['s', '<', 537], onAccept: 'gd' },
    { condition: ['x', '>', 2440], onAccept: 'R' },
    { onAccept: 'A' },
  ],
  qs: [{ condition: ['s', '>', 3448], onAccept: 'A' }, { onAccept: 'lnx' }],
  qkq: [{ condition: ['x', '<', 1416], onAccept: 'A' }, { onAccept: 'crn' }],
  crn: [{ condition: ['x', '>', 2662], onAccept: 'A' }, { onAccept: 'R' }],
  in: [{ condition: ['s', '<', 1351], onAccept: 'px' }, { onAccept: 'qqz' }],
  qqz: [
    { condition: ['s', '>', 2770], onAccept: 'qs' },
    { condition: ['m', '<', 1801], onAccept: 'hdj' },
    { onAccept: 'R' },
  ],
  gd: [{ condition: ['a', '>', 3333], onAccept: 'R' }, { onAccept: 'R' }],
  hdj: [{ condition: ['m', '>', 838], onAccept: 'A' }, { onAccept: 'pv' }],
};

describe('processPart()', () => {
  it.each<[Part, Workflows, string]>([
    [{ x: 787, m: 2655, a: 1222, s: 2876 }, workflows, 'A'],
    [{ x: 1679, m: 44, a: 2067, s: 496 }, workflows, 'R'],
    [{ x: 2036, m: 264, a: 79, s: 2244 }, workflows, 'A'],
    [{ x: 2461, m: 1339, a: 466, s: 291 }, workflows, 'R'],
    [{ x: 2127, m: 1623, a: 2188, s: 1013 }, workflows, 'A'],
  ])(
    'should return the result of the workflow',
    (part, workflows, expected) => {
      expect(processPart(part, workflows)).toBe(expected);
    }
  );
});
