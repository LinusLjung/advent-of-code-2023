type Grid = string[][];
type Direction = 'N' | 'E' | 'S' | 'W';
type Coord = [y: number, x: number];
type VisitedCell = [...Coord, direction: Direction];

type Beam = [...Coord, direction: Direction];

function beamShouldBreak(beam: Beam, grid: Grid, visited: VisitedCell[]) {
  return (
    !grid[beam[0]]?.[beam[1]] ||
    visited.some(
      (cell) =>
        cell[0] === beam[0] && cell[1] === beam[1] && cell[2] === beam[2]
    )
  );
}

export function part1(input: string) {
  const visited: VisitedCell[] = [];
  const grid: Grid = input.split('\n').map((line) => line.split(''));
  let beams: Beam[] = [[0, 0, 'E']];

  while (beams.length) {
    beams = beams.filter((beam) => !beamShouldBreak(beam, grid, visited));

    for (const beam of beams) {
      visited.push([...beam]);

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

  return visited.reduce<typeof visited>((acc, curr) => {
    if (acc.some((v) => v[0] === curr[0] && v[1] === curr[1])) {
      return acc;
    }

    return [...acc, curr];
  }, []).length;
}
