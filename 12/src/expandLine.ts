export function expandLine([springs, arrangement]: [string, number[]]): [
  string,
  number[]
] {
  return [
    new Array(5).fill(springs).join('?'),
    new Array(5).fill(arrangement).flat(),
  ];
}
