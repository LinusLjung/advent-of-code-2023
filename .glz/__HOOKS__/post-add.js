const spawn = require('child_process').spawn;
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');

function postAdd(type, { name }) {
  spawn(
    'bun',
    [
      'tools/fetchPuzzleInput.ts',
      '--session',
      path.join(ROOT, 'session.txt'),
      '--day',
      name[0] === '0' ? name[1] : name,
      '--out',
      path.join(ROOT, `${name}/input.txt`),
    ],
    {
      stdio: 'inherit',
    }
  );
}

module.exports = postAdd;
