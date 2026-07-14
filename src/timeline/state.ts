import type { TimelineState } from './types';

const VALID_TRANSITIONS: Record<TimelineState, TimelineState[]> = {
  idle: ['running'],

  running: ['paused', 'stopped', 'finished'],

  paused: ['running', 'stopped'],

  stopped: ['idle'],

  finished: ['idle'],
};

export class TimelineStateManager {
  private state: TimelineState = 'idle';

  getState(): TimelineState {
    return this.state;
  }

  canTransition(nextState: TimelineState): boolean {
    return VALID_TRANSITIONS[this.state].includes(nextState);
  }

  transition(nextState: TimelineState): void {
    if (!this.canTransition(nextState)) {
      throw new Error(
        `Invalid timeline transition: ${this.state} -> ${nextState}`
      );
    }

    this.state = nextState;
  }

  reset(): void {
    this.state = 'idle';
  }
}
