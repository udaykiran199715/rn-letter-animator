import { useCallback, useState } from 'react';

import type { TimelineState } from './types';

export interface TimelineController {
  progress: number;
  state: TimelineState;

  play(): void;
  pause(): void;
  resume(): void;
  stop(): void;
  reset(): void;
  seek(progress: number): void;
}

export function useTimelineController(): TimelineController {
  const [progress, setProgress] = useState(1);
  const [state, setState] = useState<TimelineState>('idle');

  const play = useCallback(() => {
    setProgress(0);
    setState('running');
  }, []);

  const pause = useCallback(() => {
    setState('paused');
  }, []);

  const resume = useCallback(() => {
    setState('running');
  }, []);

  const stop = useCallback(() => {
    setState('stopped');
  }, []);

  const reset = useCallback(() => {
    setProgress(0);
    setState('idle');
  }, []);

  const seek = useCallback((value: number) => {
    setProgress(Math.max(0, Math.min(1, value)));
  }, []);

  return {
    progress,
    state,
    play,
    pause,
    resume,
    stop,
    reset,
    seek,
  };
}
