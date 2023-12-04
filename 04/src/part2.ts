import { getCard } from 'getCard';
import { getDuplicates } from 'getDuplicates';

export function part2(input: string) {
  const lines = input.split('\n');
  const stack = lines.map(getCard).map((card, i) => ({ ...card, index: i }));

  let i = 0;

  do {
    const card = stack[i];
    const numberOfDuplicates = getDuplicates(
      card.numbers,
      card.winningNumbers
    ).length;

    stack.push(
      ...stack.slice(card.index + 1, card.index + numberOfDuplicates + 1)
    );
  } while (++i < stack.length);

  return stack.length;
}
