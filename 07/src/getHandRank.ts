export const ranks = {
  fiveOfAKind: 0,
  fourOfAKind: 1,
  fullHouse: 2,
  threeOfAKind: 3,
  twoPair: 4,
  onePair: 5,
  highCard: 6,
} as const;

function allCardsAreSame(cards: string[]) {
  return cards.filter((card) => card === cards[0]).length === cards.length;
}

function isFiveOfAKind(hand: string) {
  return allCardsAreSame(hand.split(''));
}

function isFourOfAKind(hand: string) {
  const handArray = hand.split('').toSorted();

  return (
    allCardsAreSame(handArray.slice(0, 4)) ||
    allCardsAreSame(handArray.slice(1))
  );
}

function isThreeOfAKind(hand: string) {
  const handArray = hand.split('').toSorted();

  for (let i = 0; i < hand.length - 2; i++) {
    if (allCardsAreSame(handArray.slice(i, i + 3))) {
      return true;
    }
  }

  return false;
}

function isPair(hand: string) {
  const handArray = hand.split('').toSorted();

  for (let i = 0; i < hand.length - 1; i++) {
    if (allCardsAreSame(handArray.slice(i, i + 2))) {
      return true;
    }
  }

  return false;
}

function isFullHouse(hand: string) {
  const handArray = hand.split('').toSorted();
  const firstPair = handArray.slice(0, 2);
  const lastPair = handArray.slice(-2);

  if (!allCardsAreSame(firstPair)) {
    return false;
  }

  if (!allCardsAreSame(lastPair)) {
    return false;
  }

  if (!firstPair.includes(handArray[2]) && !lastPair.includes(handArray[2])) {
    return false;
  }

  return true;
}

function isTwoPair(hand: string) {
  const handArray = hand.split('').toSorted();
  const [firstHalf, lasthalf] = [
    handArray.slice(0, 3).join(''),
    handArray.slice(2).join(''),
  ];

  return isPair(firstHalf) && isPair(lasthalf);
}

export type RankType = (typeof ranks)[keyof typeof ranks];

export function getHandRank(hand: string): RankType {
  if (isFiveOfAKind(hand)) {
    return ranks.fiveOfAKind;
  }

  if (isFourOfAKind(hand)) {
    return ranks.fourOfAKind;
  }

  if (isFullHouse(hand)) {
    return ranks.fullHouse;
  }

  if (isThreeOfAKind(hand)) {
    return ranks.threeOfAKind;
  }

  if (isTwoPair(hand)) {
    return ranks.twoPair;
  }

  if (isPair(hand)) {
    return ranks.onePair;
  }

  return ranks.highCard;
}
