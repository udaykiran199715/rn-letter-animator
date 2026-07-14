export type TimelineState =
  'idle' | 'running' | 'paused' | 'stopped' | 'finished';

export interface TimelineConfig {
  duration: number;
  delay: number;
  loop: boolean;
}

export interface TimelineSnapshot {
  progress: number;
  state: TimelineState;
  duration: number;
  delay: number;
  loop: boolean;
}

export interface TimelineController {
  play(): void;

  pause(): void;

  resume(): void;

  stop(): void;

  reset(): void;

  seek(progress: number): void;
}

export interface TimelineEngine extends TimelineController {
  getSnapshot(): TimelineSnapshot;

  isPlaying(): boolean;
}
