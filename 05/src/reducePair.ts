import { Pair } from 'types';

function getStart(pair: Pair) {
  return pair[0];
}

function getEnd(pair: Pair) {
  return getStart(pair) + pair[1];
}

function startIsWithinPair(pair1: Pair, pair2: Pair) {
  return getStart(pair1) > getStart(pair2) && getStart(pair1) < getEnd(pair2);
}

function endIsWithinPair(pair1: Pair, pair2: Pair) {
  return getEnd(pair1) > getStart(pair2) && getEnd(pair1) < getEnd(pair2);
}

//     ----------
//        ------------

export function reducePair(pair1: Pair, pair2: Pair): Pair {
  if (pair1[1] === 0 || pair2[1] === 0) {
    console.log(1);
    return [...pair1];
  }

  if (startIsWithinPair(pair1, pair2) && endIsWithinPair(pair1, pair2)) {
    console.log(2);
    pair1[1] = 0;

    return [pair1[0], 0];
  }

  if (startIsWithinPair(pair1, pair2)) {
    console.log(3);
    const diff = getEnd(pair2) - getStart(pair1);

    return [getEnd(pair2) + 1, pair1[1] - diff];
  }

  if (endIsWithinPair(pair1, pair2)) {
    console.log(4);
    return [pair1[0], getEnd(pair1) - getStart(pair2)];
    // pair1[1] = getEnd(pair1) - getStart(pair2);
  }

  console.log(5);

  return pair1;
}
