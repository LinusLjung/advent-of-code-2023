import { getHash } from 'getHash';

type Lens = {
  label: string;
  focalLength: number;
};

type Box = {
  hash: number;
  lenses: Lens[];
};

export function part2(input: string) {
  const boxes: Box[] = [];
  const instructions = input.split(',');

  for (const instruction of instructions) {
    const match = instruction.match(/^([a-z]+)([=-])(\d?)$/);

    if (!match) {
      continue;
    }

    const label = match[1];
    const hash = getHash(label);
    const operation = match[2];
    const focalLength = Number(match[3]);

    const boxIndex = boxes.findIndex((box) => box.hash === hash);

    let box = boxes[boxIndex];

    if (!box) {
      box = {
        hash,
        lenses: [],
      };

      boxes.push(box);
    }

    const lensIndex = box.lenses.findIndex((lens) => lens.label === label);

    if (operation === '=') {
      const lens = {
        label,
        focalLength,
      };
      if (lensIndex === -1) {
        box.lenses.push(lens);

        continue;
      }

      box.lenses[lensIndex] = lens;

      continue;
    }

    if (lensIndex === -1) {
      continue;
    }

    box.lenses.splice(lensIndex, 1);
  }

  return boxes
    .map((box) =>
      box.lenses.reduce(
        (acc, lens, i) => acc + (1 + box.hash) * (i + 1) * lens.focalLength,
        0
      )
    )
    .reduce((acc, curr) => acc + curr);
}
