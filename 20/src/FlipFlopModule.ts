import Module from 'Module';
import { Pulse } from 'types';

class FlipFlopModule implements Module {
  name: string;
  destinations: string[];
  state = false;

  constructor(name: string, destinations: string[]) {
    this.name = name;
    this.destinations = destinations;
  }

  receivePulse(pulse: Pulse) {
    if (pulse === 'high') {
      return null;
    }

    this.state = !this.state;

    return [this.destinations, this.state ? 'high' : 'low', this.name] as [
      string[],
      Pulse,
      string
    ];
  }
}

export default FlipFlopModule;
