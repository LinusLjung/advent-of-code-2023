const string =
  '?#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#??#?#?#?#?#?#?#?';

function test(string: string, length: number) {
  let substring = '';

  for (let i = 0; i < length; i++) {
    substring += string[i];
    if (string[i] !== '#' && string[i] !== '?') {
      return false;
    }
  }

  return true;
}

function* testString(
  string: string,
  length: number
): Generator<[string, number] | null> {
  for (let i = 0; i < string.length - length + 1; i++) {
    const testString = string.substring(i, i + length);

    if (test(testString, 3)) {
      yield [testString, i];
    }

    yield null;
  }

  return null;
}

let counter = 0;

console.time('a');
for (let i = 0; i < 1e6; i++) {
  for (const match of testString(string, 3)) {
    if (!match) {
      continue;
    }
    counter += match[1];
  }
}
console.log(counter);
console.timeEnd('a');
