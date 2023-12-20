import { Pulse } from 'types';

interface Module {
  name: string;
  destinations: string[];
  receivePulse(pulse: 'high' | 'low', sender: string): [string[], Pulse, string] | null;
}

export default Module;
