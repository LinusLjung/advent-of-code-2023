import fs from 'fs-extra';
import { exec } from 'child_process';
import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const TEMPLATE_FOLDER = path.resolve(import.meta.dir, 'template');

const argv = await Promise.resolve(yargs(hideBin(process.argv)).argv);

const {
  _: [day],
} = argv;

if (!day) {
  throw new Error('Missing day number as first argument');
}

const folderPath = path.resolve(
  import.meta.dir,
  '..',
  day.toString().padStart(2, '0')
);

if (await fs.exists(folderPath)) {
  throw new Error(`Folder with path ${folderPath} already exists`);
}

fs.copy(TEMPLATE_FOLDER, folderPath, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Day ${day} generated`);
});

exec(
  `bun ${path.join(
    import.meta.dir,
    './fetchPuzzleInput.ts'
  )} --session ../session.txt --day ${day} --out ${path.join(
    folderPath,
    'input.txt'
  )}`
);
