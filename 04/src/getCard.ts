import { Card } from 'types';

export function getCard(line: string): Card {
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

  return { name, numbers, winningNumbers };
}
