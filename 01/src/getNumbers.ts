function getNumbers(text: string) {
  const textArray = text.split('');

  const first = textArray.find((char) => !Number.isNaN(Number(char)))!;
  const last = textArray.findLast((char) => !Number.isNaN(Number(char)))!;

  return first + last;
}

export default getNumbers;
