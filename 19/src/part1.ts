import { processPart } from 'processPart';
import { Operator, Part, PartCategory, Rule, Workflow, Workflows } from 'types';

function createWorkflow(line: string): [string, Workflow] {
  let [name, rest] = line.split('{');

  rest = rest.slice(0, -1);

  const rules = rest.split(',').map<Rule>((rule) => {
    const [condition, onAccept] = rule.split(':');

    if (!onAccept) {
      return {
        onAccept: condition,
      };
    }

    const [category, operator, numberString] = condition
      .match(/([xmas])([<>])([0-9]+)$/)!
      .slice(1);

    return {
      condition: [
        category as PartCategory,
        operator as Operator,
        Number(numberString),
      ],
      onAccept,
    };
  });

  return [name, rules];
}

function createPart(line: string): Part {
  line = line.slice(1, -1);

  return line
    .split(',')
    .map((category) => category.split('='))
    .reduce<Part>(
      (acc, [category, value]) => ({
        ...acc,
        [category as PartCategory]: Number(value),
      }),
      {} as Part
    );
}

function getScoreForPart(part: Part) {
  return Object.values(part).reduce((acc, curr) => acc + curr);
}

export function part1(input: string) {
  const [workflowsLines, partsLines] = input
    .split('\n\n')
    .map((chunk) => chunk.split('\n'));

  const workflows = workflowsLines.map(createWorkflow).reduce<Workflows>(
    (acc, [name, rules]) => ({
      ...acc,
      [name]: rules,
    }),
    {}
  );

  const parts = partsLines.map(createPart);

  return parts
    .map((part) => [part, processPart(part, workflows)] as const)
    .filter(([_, result]) => result === 'A')
    .map(([part]) => getScoreForPart(part))
    .reduce((acc, curr) => acc + curr);
}
