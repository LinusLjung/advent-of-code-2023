const string =
  '?#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#?';

console.time('a');
let counter = 0;
for (let i = 0; i < 1e6; i++) {
  const regex = new RegExp(`[\\?#]{${3}}`, 'g');
  let match: ReturnType<typeof regex.exec> = null;

  while ((match = regex.exec(string))) {
    regex.lastIndex = match.index + 1;
    counter += match.index;
  }
}
console.timeEnd('a');
console.log(counter);
