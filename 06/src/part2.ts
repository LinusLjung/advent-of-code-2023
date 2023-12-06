export function part2(input: string) {
  const [ms, distance] = input
    .split('\n')
    .map((line) =>
      line
        .split(':')[1]
        .split(' ')
        .filter(Boolean)
        .map((value) => value.trim())
        .join('')
    )
    .map(Number);

  let winningRaces = 0;

  for (let hold = 1; hold < ms; hold++) {
    const newDistance = hold * (ms - hold);

    if (newDistance > distance) {
      winningRaces++;
    }
  }

  return winningRaces;
}
