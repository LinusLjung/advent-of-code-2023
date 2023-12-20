import BroadcasterModule from 'BroadcasterModule';
import ConjunctionModule from 'ConjunctionModule';
import FlipFlopModule from 'FlipFlopModule';
import Module from 'Module';
import { Type } from 'types';

function parseModuleLine(line: string): Module {
  let [name, destinationsLine] = line.split(' -> ');
  let type: Type | undefined = undefined;

  if (name[0].match(/[&%]/)) {
    type = name[0] as Type;
    name = name.slice(1);
  }

  const destinations = destinationsLine.split(', ');

  if (!type) {
    return new BroadcasterModule(name, destinations);
  }

  if (type === '%') {
    return new FlipFlopModule(name, destinations);
  }

  if (type === '&') {
    return new ConjunctionModule(name, destinations);
  }

  throw new Error(`Module of type '${type}' not implemented`);
}
export function getModules(input: string) {
  const modules = input
    .split('\n')
    .map(parseModuleLine)
    .reduce<Record<string, Module>>(
      (acc, curr) => ({
        ...acc,
        [curr.name]: curr,
      }),
      {}
    );

  // Register senders for each conjunction module
  Object.values(modules)
    .filter((module) => module instanceof ConjunctionModule)
    .forEach((conjunctionModule) => {
      (conjunctionModule as unknown as ConjunctionModule).registerSenders(
        Object.values(modules)
          .filter((module) =>
            module.destinations.includes(conjunctionModule.name)
          )
          .map((module) => module.name)
      );
    });

  return modules;
}
