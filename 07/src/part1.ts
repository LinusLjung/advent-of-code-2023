import { getHandRank } from 'getHandRank';

type Hand = {
  hand: string;
  rank: number;
  bet: number;
};

function getHandValues(hand: string, withJokers = false) {
  return hand.split('').map((card) => {
    const number = Number(card);

    if (Number.isInteger(number)) {
      return number;
    }

    switch (card) {
      case 'A':
        return 14;
      case 'K':
        return 13;
      case 'Q':
        return 12;
      case 'J':
        return withJokers ? 1 : 11;
      case 'T':
        return 10;
    }

    throw new Error('Invalid card value');
  });
}

function sortHandsByRank(hands: Hand[], withJokers = false) {
  return hands.toSorted((a, b) => {
    if (a.rank < b.rank) {
      return 1;
    }

    if (a.rank > b.rank) {
      return -1;
    }

    const aValues = getHandValues(a.hand, withJokers);
    const bValues = getHandValues(b.hand, withJokers);

    for (let i = 0; i < aValues.length; i++) {
      if (aValues[i] === bValues[i]) {
        continue;
      }

      return aValues[i] - bValues[i];
    }

    throw new Error('Failed to sort by rank');
  });
}

export function part1(input: string, withJokers = false) {
  const hands = input.split('\n').map<Hand>((line) => {
    let [hand, betString] = line.split(' ');

    const rank = getHandRank(hand, withJokers);

    return {
      hand,
      rank,
      bet: Number(betString),
    };
  });

  const sortedHands = sortHandsByRank(hands, withJokers);

  const winnings = sortedHands.map((hand, i) => {
    return hand.bet * (i + 1);
  });

  return winnings.reduce((acc, curr) => acc + curr);
}
