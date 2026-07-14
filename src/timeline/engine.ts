import { DEFAULT_DELAY, DEFAULT_DURATION, DEFAULT_PROGRESS } from './constants';
import { TimelineStateMachine } from './state';
import type { TimelineConfig, TimelineEngine, TimelineSnapshot } from './types';

export class BaseTimelineEngine implements TimelineEngine {
  protected readonly stateMachine = new TimelineStateMachine();

  protected progress = DEFAULT_PROGRESS;

  protected readonly config: TimelineConfig;

  constructor(config?: Partial<TimelineConfig>) {
    this.config = {
      duration: config?.duration ?? DEFAULT_DURATION,
      delay: config?.delay ?? DEFAULT_DELAY,
      loop: config?.loop ?? false,
    };
  }

  play(): void {}

  pause(): void {}

  resume(): void {}

  stop(): void {}

  reset(): void {
    this.progress = DEFAULT_PROGRESS;
    this.stateMachine.reset();
  }

  seek(progress: number): void {
    this.progress = progress;
  }

  isPlaying(): boolean {
    return this.stateMachine.getState() === 'running';
  }

  getSnapshot(): TimelineSnapshot {
    return {
      progress: this.progress,
      state: this.stateMachine.getState(),
      duration: this.config.duration,
      delay: this.config.delay,
      loop: this.config.loop,
    };
  }
}
