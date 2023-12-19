import { Part, Workflows } from 'types';

export function processPart(part: Part, workflows: Workflows) {
  let workflow = workflows['in'];

  while (workflow) {
    for (const rule of workflow) {
      let next = '';

      if (!rule.condition) {
        if (rule.onAccept === 'A' || rule.onAccept === 'R') {
          return rule.onAccept;
        }

        workflow = workflows[rule.onAccept];
        break;
      }

      const [category, operator, value] = rule.condition;

      if (operator === '<') {
        if (part[category] < value) {
          next = rule.onAccept;
        }
      }

      if (operator === '>') {
        if (part[category] > value) {
          next = rule.onAccept;
        }
      }

      if (next === 'A' || next === 'R') {
        return next;
      }

      if (next) {
        workflow = workflows[next];
        break;
      }
    }
  }
}
