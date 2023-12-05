const values =
  '763445965 78570222 1693788857 146680070 1157620425 535920936 3187993807 180072493 1047354752 20193861 2130924847 274042257 20816377 596708258 950268560 11451287 3503767450 182465951 3760349291 265669041'
    .split(' ')
    .map(Number);

const pairs: [number, number][] = [];

for (let i = 0; i < values.length; i += 2) {
  pairs.push([values[i], values[i + 1]]);
}

let totalSum = 0;
let intersectionSum = 0;

function isIntersecting(pair1, pair2) {
  // if start in pair
  if (pair1[0] > pair2[0] && pair1[0] < pair2[1]) {
    intersectionSum += pair2[1] - pair1[0];
    totalSum += pair1[1];
    return true;
  }

  // if end in pair
  if (pair1[1] > pair2[0] && pair1[1] < pair2[1]) {
    intersectionSum += pair1[1] - pair2[0];
    totalSum += pair1[1];

    return true;
  }

  return false;
}

for (let i = 0; i < pairs.length; i++) {
  for (let j = i + 1; j < pairs.length; j++) {
    console.log(isIntersecting(pairs[i], pairs[j]), i, j);
  }
}

console.log('totalSum', totalSum, totalSum.toString().length);
console.log('intersectionSum', intersectionSum, intersectionSum.toString().length);
console.log(totalSum - intersectionSum, intersectionSum.toString().length);
