export type Match = [match: string, index: number];

function getMatches(line: string): Match[] {
  const regex = /[0-9]+/g;
  let match: ReturnType<typeof regex.exec> = null;

  const matches: Match[] = [];

  while ((match = regex.exec(line))) {
    matches.push([match[0], match.index]);
  }

  return matches;
}

export default getMatches;
