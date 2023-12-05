import { describe, expect, it } from 'bun:test';
import { getDestinationForSource } from 'getDestinationForSource';

const seedToSoilMap: Parameters<typeof getDestinationForSource>[1] = [
  [50, 98, 2],
  [52, 50, 48],
];

describe('getDestinationForSource()', () => {
  it.each<Parameters<typeof getDestinationForSource>>([
    [0, [[10, 10, 10]]],
    [1, [[0, 2, 10]]],
    [50, [[10, 10, 10]]],
    [14, seedToSoilMap],
    [13, seedToSoilMap],
  ])('should return seed number if no destination is found', (source, map) => {
    expect(getDestinationForSource(source, map)).toBe(source);
  });

  it.each<[...Parameters<typeof getDestinationForSource>, number]>([
    [79, seedToSoilMap, 81],
    [55, seedToSoilMap, 57],
  ])('should return destination if found in map', (source, map, expected) => {
    expect(getDestinationForSource(source, map)).toBe(expected);
  });
});
