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
  it.each<[string, RankType]>([
    ['KA512', ranks.highCard],
    ['32T3K', ranks.onePair],
    ['KK677', ranks.twoPair],
    ['KTJJT', ranks.fourOfAKind],
    ['T55J5', ranks.fourOfAKind],
    ['QQQJA', ranks.fourOfAKind],
    ['11J81', ranks.fourOfAKind],
    ['QQQJJ', ranks.fiveOfAKind],
    ['11222', ranks.fullHouse],
    ['12222', ranks.fourOfAKind],
    ['KKKKA', ranks.fourOfAKind],
    ['55555', ranks.fiveOfAKind],
    ['AAAAA', ranks.fiveOfAKind],
    ['JJJJJ', ranks.fiveOfAKind],
    ['123JJ', ranks.threeOfAKind],
    ['KKJ88', ranks.fullHouse],
    ['JJJ12', ranks.fourOfAKind],
    ['JJJJ1', ranks.fiveOfAKind],
    ['AAKQJ', ranks.threeOfAKind],
    ['11A2J', ranks.threeOfAKind],
  ])('should handle jokers, %s -> %i', (hand, rank) => {
    expect(getHandRank(hand, true)).toBe(rank);
  });
});

// describe('a', () => {
//   it('a', ()
// });
