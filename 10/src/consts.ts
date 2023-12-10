export const TOP_CONNECTORS = ['|', '7', 'F'];
export const BOTTOM_CONNECTORS = ['|', 'L', 'J'];
export const LEFT_CONNECTORS = ['-', 'L', 'F'];
export const RIGHT_CONNECTORS = ['-', 'J', '7'];
export const PIPE_CONNECTIONS = {
  '|': [
    [-1, 0],
    [1, 0],
  ],
  '-': [
    [0, -1],
    [0, 1],
  ],
  L: [
    [-1, 0],
    [0, 1],
  ],
  J: [
    [-1, 0],
    [0, -1],
  ],
  '7': [
    [0, -1],
    [1, 0],
  ],
  F: [
    [0, 1],
    [1, 0],
  ],
} as const;
