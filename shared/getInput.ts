import eol from 'eol';
import fs from 'fs';
import { getArgs } from './getArgs';

function getInputPath() {
  const {
    _: [inputPath],
  } = getArgs<{
    _: Array<string | number>;
  }>();

  if (!inputPath) {
    throw new Error('Missing `input` argument');
  }

  return inputPath;
}

function getInput(inputPath = getInputPath()) {
  return eol.lf(fs.readFileSync(inputPath, 'utf8')).replace(/\n+$/, '');
}

export default getInput;
