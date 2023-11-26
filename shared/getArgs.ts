import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

type ArgsType = ReturnType<typeof yargs>;

export function getArgs<T>(): T & ArgsType {
  return yargs(hideBin(process.argv)).argv as unknown as T & ArgsType;
}
