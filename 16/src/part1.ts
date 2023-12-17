import { Grid } from 'types';

type Direction = 'N' | 'E' | 'S' | 'W';
type Coord = [y: number, x: number];
// type Grid = [...Coord, direction: Direction];

type Beam = [...Coord, direction: Direction];

function beamShouldBreak(beam: Beam, grid: Grid, visited: Grid<string[]>) {
  return (
    !grid[beam[0]]?.[beam[1]] || visited[beam[0]]?.[beam[1]].includes(beam[2])
  );
}

function getGrid<T>(
  rows: number,
  columns: number,
  fill: (y: number, x: number) => T
) {
  const grid: Grid<T> = [];

  for (let y = 0; y < rows; y++) {
    grid.push([]);

    for (let x = 0; x < columns; x++) {
      grid[y].push(fill(y, x));
    }
  }

  return grid;
}

export function part1(input: string, startBeam: Beam = [0, 0, 'E']) {
  const grid: Grid = input.split('\n').map((line) => line.split(''));
  const visited: Grid<string[]> = getGrid(
    grid.length,
    grid[0].length,
    () => []
  );
  let beams: Beam[] = [startBeam];

  while (beams.length) {
    beams = beams.filter((beam) => !beamShouldBreak(beam, grid, visited));
    for (const beam of beams) {
      visited[beam[0]][beam[1]].push(beam[2]);

      const visitedCell = grid[beam[0]]?.[beam[1]];

      (() => {
        if (visitedCell === '/') {
          if (beam[2] === 'N') {
            beam[2] = 'E';
            return;
          }

          if (beam[2] === 'E') {
            beam[2] = 'N';
            return;
          }

          if (beam[2] === 'S') {
            beam[2] = 'W';
            return;
          }

          if (beam[2] === 'W') {
            beam[2] = 'S';
            return;
          }
        }

        if (visitedCell === '\\') {
          if (beam[2] === 'N') {
            beam[2] = 'W';
            return;
          }

          if (beam[2] === 'E') {
            beam[2] = 'S';
            return;
          }

          if (beam[2] === 'S') {
            beam[2] = 'E';
            return;
          }

          if (beam[2] === 'W') {
            beam[2] = 'N';
            return;
          }
        }

        if (visitedCell === '|' && (beam[2] === 'E' || beam[2] === 'W')) {
          beam[2] = 'S';
          beams.push([...beam]);
          beams.at(-1)![2] = 'N';
          return;
        }
        if (visitedCell === '-' && (beam[2] === 'N' || beam[2] === 'S')) {
          beam[2] = 'E';
          beams.push([...beam]);
          beams.at(-1)![2] = 'W';
        }
      })();

      if (beam[2] === 'N') {
        beam[0]--;
      }

      if (beam[2] === 'E') {
        beam[1]++;
      }

      if (beam[2] === 'S') {
        beam[0]++;
      }

      if (beam[2] === 'W') {
        beam[1]--;
      }
    }
  }

  return visited.reduce<number>((acc, curr) => {
    return (
      acc +
      curr.reduce((acc, curr) => {
        if (curr.length) {
          return acc + 1;
        }

        return acc;
      }, 0)
    );
  }, 0);
}
