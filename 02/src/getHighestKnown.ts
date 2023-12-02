import { Set } from 'types';

function getHighestKnown(sets: Set[]): Set {
  return sets.reduce<Set>(
    (highest, curr) => ({
      blue: Math.max(highest.blue, curr.blue),
      green: Math.max(highest.green, curr.green),
      red: Math.max(highest.red, curr.red),
    }),
    { blue: 0, green: 0, red: 0 }
  );
}

export default getHighestKnown;
