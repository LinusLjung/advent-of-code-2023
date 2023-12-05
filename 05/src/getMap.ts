export function getMap(
  map: string
): Array<
  [destinationRangeStart: number, sourceRangeStart: number, rangeLength: number]
> {
  return map
    .split('\n')
    .slice(1)
    .map((line) => line.split(' ').map(Number) as [number, number, number]);
}
