import {
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_LOOP,
  DEFAULT_PROGRESS,
  MAX_PROGRESS,
  MIN_PROGRESS,
} from './constants';

import { TimelineStateManager } from './state';

import type { TimelineConfig, TimelineEngine, TimelineSnapshot } from './types';

export class BaseTimelineEngine implements TimelineEngine {
  protected readonly stateMachine = new TimelineStateManager();

  protected progress = DEFAULT_PROGRESS;

  protected readonly config: TimelineConfig;

  protected startTime: number | null = null;

  protected pauseTime: number | null = null;

  constructor(config?: Partial<TimelineConfig>) {
    this.config = {
      duration: config?.duration ?? DEFAULT_DURATION,
      delay: config?.delay ?? DEFAULT_DELAY,
      loop: config?.loop ?? DEFAULT_LOOP,
    };
  }

  play(): void {
    if (!this.stateMachine.canTransition('running')) {
      return;
    }

    this.startTime = Date.now();
    this.pauseTime = null;

    this.stateMachine.transition('running');
  }

  pause(): void {
    if (!this.stateMachine.canTransition('paused')) {
      return;
    }

    this.pauseTime = Date.now();

    this.stateMachine.transition('paused');
  }

  resume(): void {
    if (!this.stateMachine.canTransition('running')) {
      return;
    }

    if (this.startTime !== null && this.pauseTime !== null) {
      this.startTime += Date.now() - this.pauseTime;
    }

    this.pauseTime = null;

    this.stateMachine.transition('running');
  }

  stop(): void {
    if (!this.stateMachine.canTransition('stopped')) {
      return;
    }

    this.stateMachine.transition('stopped');
  }

  reset(): void {
    this.progress = DEFAULT_PROGRESS;

    this.startTime = null;
    this.pauseTime = null;

    this.stateMachine.reset();
  }

  seek(progress: number): void {
    this.progress = Math.min(MAX_PROGRESS, Math.max(MIN_PROGRESS, progress));
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

      startTime: this.startTime,
      pauseTime: this.pauseTime,
    };
  }
}
