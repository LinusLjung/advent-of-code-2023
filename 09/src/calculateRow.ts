export function calculateRow(values: number[], prefill = false) {
  let rows: number[][] = [values];

  do {
    const latestRow = rows.at(-1)!;
    let row: number[] = [];

    for (let i = 1; i < latestRow.length; i++) {
      row.push(latestRow[i] - latestRow[i - 1]);
    }

    rows.push(row);
  } while (!rows.at(-1)!.every((number) => number === 0));

  let extrapolated = 0;
  for (let i = rows.length - 2; i >= 0; i--) {
    if (prefill) {
      extrapolated = rows[i][0] - extrapolated;
      continue;
    }

    extrapolated += rows[i].at(-1)!;
  }

  return extrapolated;
}
