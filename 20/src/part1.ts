import { getModules } from 'getModules';
import { Pulse } from 'types';

export function part1(input: string): number {
  const modules = getModules(input);

  let highPulseCount = 0;
  let lowPulseCount = 0;

  for (let i = 0; i < 1000; i++) {
    const queue: [string[], Pulse, string][] = [];

    queue.push([['broadcaster'], 'low', 'button']);

    while (queue.length) {
      const [moduleNames, pulse, sourceName] = queue.shift()!;

      for (const moduleName of moduleNames) {
        const module = modules[moduleName];

        if (pulse === 'high') {
          highPulseCount++;
        } else {
          lowPulseCount++;
        }

        if (!module) {
          continue;
        }

        const out = module.receivePulse(pulse, sourceName);

        if (!out) {
          continue;
        }

        queue.push(out);
      }
    }
  }

  return highPulseCount * lowPulseCount;
}
