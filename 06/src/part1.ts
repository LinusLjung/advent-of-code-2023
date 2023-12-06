export function part1(input: string) {
  const [times, distances] = input.split('\n').map((line) =>
    line
      .split(':')[1]
      .split(' ')
      .filter(Boolean)
      .map((value) => Number(value.trim()))
  );

  const groups: [number, number][] = [];

  for (let i = 0; i < times.length; i++) {
    groups.push([times[i], distances[i]]);
  }

  const winningRaces: number[] = [];

  for (let i = 0; i < groups.length; i++) {
    const [ms, distance] = groups[i];

    winningRaces.push(0);

    for (let hold = 1; hold < ms; hold++) {
      const newDistance = hold * (ms - hold);

      if (newDistance > distance) {
        winningRaces[i]++;
      }
    }
  }

  return winningRaces.reduce((acc, curr) => acc * curr, 1);
}
