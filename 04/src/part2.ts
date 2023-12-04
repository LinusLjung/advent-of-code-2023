import { getCard } from 'getCard';
import { getDuplicates } from 'getDuplicates';

export function part2(input: string) {
  const lines = input.split('\n');
  const cards = lines.map(getCard).map((card, i) => ({
    ...card,
    index: i,
  }));

  const cardCount = cards.map(() => 1);

  for (const card of cards) {
    for (
      let i = card.index + 1;
      i <= card.index + card.duplicates.length;
      i++
    ) {
      cardCount[i] += cardCount[card.index];
    }
  }

  return cardCount.reduce((acc, curr) => acc + curr);
}
