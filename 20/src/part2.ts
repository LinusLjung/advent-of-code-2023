import Module from 'Module';
import { getModules } from 'getModules';
import { Pulse } from 'types';

function gcd(a: number, b: number): number {
  return a ? gcd(b % a, a) : b;
}

function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b);
}

function findSendersForReceiver(receiver: string, modules: Module[]) {
  return modules
    .filter((module) => module.destinations.includes(receiver))
    .map((module) => module.name);
}

export function part2(input: string): number {
  const modules = getModules(input);
  let finishedAt = 0;

  // Assume only one sender to rx
  const rxSender = findSendersForReceiver('rx', Object.values(modules))[0];

  // Assume sender is a conjunction module
  const mustPulseLowModuleNames = findSendersForReceiver(
    rxSender,
    Object.values(modules)
  );

  const mustPulseLowModules = mustPulseLowModuleNames.reduce<
    Record<string, number>
  >((acc, curr) => {
    return { ...acc, [curr]: 0 };
  }, {});

  for (let i = 0; !finishedAt; i++) {
    const queue: [string[], Pulse, string][] = [];

    queue.push([['broadcaster'], 'low', 'button']);

    while (queue.length && !finishedAt) {
      const [moduleNames, pulse, sourceName] = queue.shift()!;

      for (const moduleName of moduleNames) {
        const module = modules[moduleName];

        if (mustPulseLowModuleNames.includes(moduleName) && pulse === 'low') {
          if (mustPulseLowModules[moduleName] === 0) {
            mustPulseLowModules[moduleName] = i + 1;
          }

          const values = Object.values(mustPulseLowModules);
          if (values.every(Boolean)) {
            return values.reduce((acc, curr) => lcm(acc, curr));
          }
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

  return finishedAt;
}
