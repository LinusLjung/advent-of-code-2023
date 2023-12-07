export const ranks = {
  fiveOfAKind: 0,
  fourOfAKind: 1,
  fullHouse: 2,
  threeOfAKind: 3,
  twoPair: 4,
  onePair: 5,
  highCard: 6,
} as const;

function allCardsAreSame(cards: string[], withJokers = false) {
  let cardToTest: string | null = null;

  if (withJokers) {
    return allCardsAreSame(cards.filter((card) => card !== 'J'));
  }

  for (let i = 0; i < cards.length - 1; i++) {
    if (cards[i] !== cards[i + 1]) {
      return false;
    }
  }

  return true;
}

function isFiveOfAKind(hand: string, withJokers = false) {
  return allCardsAreSame(hand.split(''), withJokers);
}

function isFourOfAKind(hand: string, withJokers = false) {
  const handArray = hand.split('').toSorted();

  if (withJokers) {
    const jokerCount = handArray.filter((card) => card === 'J').length;
    const filteredCards = handArray.filter((card) => card !== 'J').join('');

    if (jokerCount === 2) {
      return isPair(filteredCards);
    }

    if (jokerCount === 1) {
      return isThreeOfAKind(filteredCards);
    }
  }

  return (
    allCardsAreSame(handArray.slice(0, 4), withJokers) ||
    allCardsAreSame(handArray.slice(-4), withJokers)
  );
}

function isThreeOfAKind(hand: string, withJokers = false) {
  const handArray = hand.split('').toSorted();

  if (withJokers && handArray.includes('J')) {
    const jokerCount = handArray.filter((card) => card === 'J').length;

    if (jokerCount === 2) {
      return true;
    }

    if (jokerCount === 1) {
      return isPair(handArray.filter((card) => card !== 'J').join(''));
    }
  }

  for (let i = 0; i < hand.length - 2; i++) {
    if (allCardsAreSame(handArray.slice(i, i + 3))) {
      return true;
    }
  }

  return false;
}

function isPair(hand: string, withJokers = false) {
  const handArray = hand.split('').toSorted();

  for (let i = 0; i < hand.length - 1; i++) {
    if (allCardsAreSame(handArray.slice(i, i + 2), withJokers)) {
      return true;
    }
  }

  return false;
}

function isFullHouse(hand: string, withJokers = false) {
  const handArray = hand.split('').toSorted();
  const firstPair = handArray.slice(0, 2);
  const lastPair = handArray.slice(-2);

  if (withJokers && handArray.includes('J')) {
    return isTwoPair(handArray.filter((card) => card !== 'J').join(''));
  }

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

function isTwoPair(hand: string, withJokers = false) {
  const handArray = hand.split('').toSorted();
  let hasPair = false;

  if (withJokers && handArray.includes('J')) {
    if (isPair(hand)) {
      return true;
    }
  }

  for (let i = 0; i < handArray.length - 1; i++) {
    if (handArray[i] === handArray[i + 1]) {
      i++;

      if (hasPair) {
        return true;
      }

      hasPair = true;
    }
  }

  return false;
}

export type RankType = (typeof ranks)[keyof typeof ranks];

export function getHandRank(hand: string, withJokers = false): RankType {
  if (isFiveOfAKind(hand, withJokers)) {
    return ranks.fiveOfAKind;
  }

  if (isFourOfAKind(hand, withJokers)) {
    return ranks.fourOfAKind;
  }

  if (isFullHouse(hand, withJokers)) {
    return ranks.fullHouse;
  }

  if (isThreeOfAKind(hand, withJokers)) {
    return ranks.threeOfAKind;
  }

  if (isTwoPair(hand, withJokers)) {
    return ranks.twoPair;
  }

  if (isPair(hand, withJokers)) {
    return ranks.onePair;
  }

  return ranks.highCard;
}
