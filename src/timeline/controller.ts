import type { TimelineController } from './types';

export abstract class BaseTimelineController implements TimelineController {
  abstract play(): void;

  abstract pause(): void;

  abstract resume(): void;

  abstract stop(): void;

  abstract reset(): void;

  abstract seek(progress: number): void;
}
