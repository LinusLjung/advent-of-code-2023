import { Set } from "types";

function setStringToSet(set: string): Set {
  return set
    .trim()
    .split(', ')
    .map((subset) => subset.split(' '))
    .reduce<Set>(
      (numbers, [value, key]) => ({
        ...numbers,
        [key]: Number(value),
      }),
      {
        red: 0,
        green: 0,
        blue: 0,
      }
    );
}

export default setStringToSet;
