function getCard(line: string): [numbers: number[], winningNumbers: number[]] {
  const [name, card] = line.split(':').map((part) => part.trim());
  const [winningNumbers, numbers] = card
    .split('|')
    .map((part) => part.trim())
    .map((part) =>
      part
        .split(' ')
        .filter((number) => number !== '')
        .map(Number)
    );

  return [numbers, winningNumbers];
}

function getDuplicates<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((item) => arr2.includes(item));
}

function getPoints<T>(items: T[]): number {
  return Math.pow(2, items.length - 1);
}

export function part1(input: string) {
  const lines = input.split('\n');

  return lines
    .map(getCard)
    .map(([numbers, winningNumbers]) => getDuplicates(numbers, winningNumbers))
    .filter((arr) => arr.length)
    .reduce((sum, curr) => sum + getPoints(curr), 0);
}
