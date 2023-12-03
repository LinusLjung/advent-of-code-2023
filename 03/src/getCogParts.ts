import getMatches, { Match } from 'getMatches';

function getCogParts(
  match: Match,
  lines: string[],
  lineIndex: number
): number[] {
  const parts: number[] = [];

  for (
    let i = Math.max(0, lineIndex - 1);
    i < Math.min(lineIndex + 2, lines.length);
    i++
  ) {
    const line = lines[i];
    const matches = getMatches(line);

    matches.forEach(([numberMatch, index]) => {
      if (match[1] >= index - 1 && match[1] <= index + numberMatch.length) {
        parts.push(Number(numberMatch));
      }
    });
  }

  return parts.length === 2 ? parts : [];
}

export default getCogParts;
