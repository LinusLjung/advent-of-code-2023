import { describe, expect, it } from 'bun:test';
import getHighestKnown from 'getHighestKnown';

describe('getHighestKnown()', () => {
  it('should aggregate the highest count for each color through the sets', () => {
    expect(getHighestKnown([])).toEqual({ blue: 0, red: 0, green: 0 });
    expect(
      getHighestKnown([
        { blue: 10, green: 15, red: 20 },
        { blue: 12, green: 9, red: 8 },
        { blue: 14, green: 25, red: 8 },
        { blue: 5, green: 5, red: 5 },
      ])
    ).toEqual({
      blue: 14,
      red: 20,
      green: 25,
    });
  });
});
