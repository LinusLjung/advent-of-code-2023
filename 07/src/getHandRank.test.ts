import { describe, expect, it } from 'bun:test';
import { RankType, getHandRank, ranks } from 'getHandRank';

describe('getHandRank()', () => {
  it.each<[string, RankType]>([
    ['KA512', ranks.highCard],
    ['32T3K', ranks.onePair],
    ['KK677', ranks.twoPair],
    ['KTJJT', ranks.twoPair],
    ['T55J5', ranks.threeOfAKind],
    ['QQQJA', ranks.threeOfAKind],
    ['QQQJJ', ranks.fullHouse],
    ['11222', ranks.fullHouse],
    ['12222', ranks.fourOfAKind],
    ['KKKKA', ranks.fourOfAKind],
    ['55555', ranks.fiveOfAKind],
    ['AAAAA', ranks.fiveOfAKind],
  ])('should return the rank of the hand %s -> %i', (hand, rank) => {
    expect(getHandRank(hand)).toBe(rank);
  });
});

// describe('a', () => {
//   it('a', ()
// });
