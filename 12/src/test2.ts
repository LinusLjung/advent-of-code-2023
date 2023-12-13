const string =
  '?#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#?';

console.time('a');
let counter = 0;

function test(string: string, length: number): [string, number] | null {
  let match = '';
  let i = 0;
  for (; i < length; i++) {
    if (string[i] !== '#' && string[i] !== '?') {
      return null;
    }
    match += string[i];
  }

  return [match, i];
}

for (let i = 0; i < 1e6; i++) {
  for (let j = 0; j < string.length - 2; j++) {
    if (test(string, 3)) {
      counter += j;
    }
  }
}
console.timeEnd('a');
console.log(counter);
