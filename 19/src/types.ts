export type Operator = '<' | '>';
export type Rule = {
  condition?: [PartCategory, '<' | '>', number];
  onAccept: string;
};
export type Workflow = Rule[];
export type Workflows = Record<string, Workflow>;
export type PartCategory = 'x' | 'm' | 'a' | 's';
export type Part = Record<PartCategory, number>;
