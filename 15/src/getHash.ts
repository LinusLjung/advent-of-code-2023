export function getHash(input: string) {
  let hash = 0;

  for (let i = 0; i < input.length; i++) {
    hash += input.charCodeAt(i);
    hash *= 17;
    hash = hash % 256;
  }

  return hash;
}
