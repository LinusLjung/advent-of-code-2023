import Module from 'Module';
import { Pulse } from 'types';

class BroadcasterModule implements Module {
  name: string;
  destinations: string[];

  constructor(name: string, destinations: string[]) {
    this.name = name;
    this.destinations = destinations;
  }

  receivePulse(pulse: Pulse) {
    return [this.destinations, pulse, this.name] as [string[], Pulse, string];
  }
}

export default BroadcasterModule;
