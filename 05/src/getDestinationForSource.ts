export function getDestinationForSource(
  seed: number,
  map: Array<
    [
      destinationRangeStart: number,
      sourceRangeStart: number,
      rangeLength: number
    ]
  >
) {
  for (let i = 0; i < map.length; i++) {
    const [destinationRangeStart, sourceRangeStart, rangeLength] = map[i];

    if (seed >= sourceRangeStart && seed <= sourceRangeStart + rangeLength) {
      return destinationRangeStart + seed - sourceRangeStart;
    }
  }

  return seed;
}
