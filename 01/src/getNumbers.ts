function getNumbers(text: string, withSpelledOutNumbers: boolean = false) {
  const textArray = text.split('');

  const firstIndex = textArray.findIndex(
    (char) => !Number.isNaN(Number(char))
  )!;
  const lastIndex = textArray.findLastIndex(
    (char) => !Number.isNaN(Number(char))
  )!;

  const spelledOut = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ].reduce<{
    firstIndex?: number;
    firstValue?: number;
    lastIndex?: number;
    lastValue?: number;
  }>((acc, curr, index) => {
    const firstIndex = text.indexOf(curr);
    const lastIndex = text.lastIndexOf(curr);

    if (firstIndex !== -1 && firstIndex < (acc.firstIndex ?? Infinity)) {
      acc = {
        ...acc,
        firstIndex,
        firstValue: index + 1,
      };
    }

    if (lastIndex !== -1 && lastIndex > (acc.lastIndex ?? -1)) {
      acc = {
        ...acc,
        lastIndex,
        lastValue: index + 1,
      };
    }

    return acc;
  }, {});

  let firstChar = textArray[firstIndex];
  let lastChar = textArray[lastIndex];

  if (withSpelledOutNumbers) {
    if (
      spelledOut.firstValue &&
      ((spelledOut.firstIndex ?? Infinity) < firstIndex || firstIndex === -1)
    ) {
      firstChar = spelledOut.firstValue.toString();
    }

    if (spelledOut.lastValue && ((spelledOut.lastIndex ?? -1) > lastIndex || lastIndex === -1)) {
      lastChar = spelledOut.lastValue.toString();
    }
  }

  return firstChar + lastChar;
}

export default getNumbers;
