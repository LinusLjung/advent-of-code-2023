export function getPermutations(
  [springs, arrangement]: [string, number[]],
  startIndex = 0
): string[] {
  const numberOfForcedSprings = springs
    .split('')
    .filter((spring) => spring === '#').length;

  if (startIndex === 0) {
    springs = springs.replace(/\.{2,}/g, '.');
    if (springs.startsWith('.')) {
      springs = springs.slice(1);
    }
    if (springs.at(-1) === '.') {
      springs = springs.slice(0, -1);
    }
  }

  const [count, ...rest] = arrangement;
  const subSprings = springs.slice(
    0,
    -rest.reduce((acc, curr) => acc + curr, 0) - rest.length || undefined
  );

  const regex = new RegExp(`[\\?#]{${count}}`, 'g');

  let match: ReturnType<typeof regex.exec> = null;

  const matches: string[] = [];
  let i = 0;

  while ((match = regex.exec(subSprings.slice(startIndex)))) {
    regex.lastIndex = match.index + 1;

    if (!rest.length) {
      matches.push(match[0]);
      continue;
    }

    getPermutations(
      [springs, arrangement.slice(1)],
      startIndex + count + match.index + 1
    ).forEach((innerMatch) => matches.push(match![0] + innerMatch));
  }

  if (startIndex === 0) {
    const filteredMatches = matches.filter(
      (match) =>
        match.split('').filter((match) => match === '#').length ===
        numberOfForcedSprings
    );

    return filteredMatches;
  }

  return matches;
}
