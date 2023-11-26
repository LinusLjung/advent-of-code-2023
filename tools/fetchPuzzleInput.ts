import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const args = (await Promise.resolve(
  yargs(hideBin(process.argv)).argv
)) as unknown as Record<'session' | 'day' | 'out', string>;

if (!args.session) {
  throw new Error('Missing `--session` argument');
}

if (!args.day) {
  throw new Error('Missing `--day` argument');
}

if (!args.out) {
  throw new Error('Missing `--out` argument');
}

const session = await Bun.file(path.join(__dirname, args.session)).text();

fetch(`https://adventofcode.com/2023/day/${args.day}/input`, {
  headers: {
    cookie: `session=${session}`,
  },
})
  .then((response) => response.text())
  .then((input) => {
    Bun.write(args.out, input);
  });
