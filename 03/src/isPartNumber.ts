import { Match } from 'getMatches';

function isPartNumber(match: Match, lines: string[], lineIndex: number) {
  for (
    let i = Math.max(0, lineIndex - 1);
    i < Math.min(lineIndex + 2, lines.length);
    i++
  ) {
    const range = lines[i].slice(
      Math.max(0, match[1] - 1),
      Math.min(match[1] + match[0].length + 1, lines[i].length)
    );

    if (/[^\d\.]/.test(range)) {
      return true;
    }
  }

  return false;
}

export default isPartNumber;
