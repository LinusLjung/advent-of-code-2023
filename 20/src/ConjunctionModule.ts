import Module from 'Module';
import { Pulse } from 'types';

class ConjunctionModule implements Module {
  name: string;
  destinations: string[];
  pulseMemory: Record<string, Pulse> = {};

  constructor(name: string, destinations: string[]) {
    this.name = name;
    this.destinations = destinations;
  }

  registerSenders(senders: string[]) {
    this.pulseMemory = senders.reduce<typeof this.pulseMemory>(
      (acc, curr) => ({
        ...acc,
        [curr]: 'low',
      }),
      {}
    );
  }

  receivePulse(pulse: Pulse, sender: string) {
    this.pulseMemory[sender] = pulse;
    let outPulse: Pulse = 'high';

    if (Object.values(this.pulseMemory).every((pulse) => pulse === 'high')) {
      outPulse = 'low';
    }

    return [this.destinations, outPulse, this.name] as [
      string[],
      Pulse,
      string
    ];
  }
}

export default ConjunctionModule;
