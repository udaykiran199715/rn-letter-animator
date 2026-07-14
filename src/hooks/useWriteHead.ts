import { useCallback, useMemo, useState } from 'react';

import { MAX_PROGRESS, MIN_PROGRESS } from '../timeline';

export interface WriteHeadPosition {
  x: number;
  y: number;
}

export interface WriteHead {
  progress: number;

  position: WriteHeadPosition;

  characterIndex: number;

  wordIndex: number;

  lineIndex: number;
}

const DEFAULT_WRITE_HEAD: WriteHead = {
  progress: 0,

  position: {
    x: 0,
    y: 0,
  },

  characterIndex: 0,

  wordIndex: 0,

  lineIndex: 0,
};

export function useWriteHead() {
  const [writeHead, setWriteHead] = useState<WriteHead>(DEFAULT_WRITE_HEAD);

  const updateProgress = useCallback((progress: number) => {
    const clampedProgress = Math.min(
      MAX_PROGRESS,
      Math.max(MIN_PROGRESS, progress)
    );

    setWriteHead((previous) => ({
      ...previous,
      progress: clampedProgress,
    }));
  }, []);

  const updatePosition = useCallback((x: number, y: number) => {
    setWriteHead((previous) => ({
      ...previous,
      position: {
        x,
        y,
      },
    }));
  }, []);

  const updateCharacter = useCallback((characterIndex: number) => {
    setWriteHead((previous) => ({
      ...previous,
      characterIndex,
    }));
  }, []);

  const updateWord = useCallback((wordIndex: number) => {
    setWriteHead((previous) => ({
      ...previous,
      wordIndex,
    }));
  }, []);

  const updateLine = useCallback((lineIndex: number) => {
    setWriteHead((previous) => ({
      ...previous,
      lineIndex,
    }));
  }, []);

  const reset = useCallback(() => {
    setWriteHead(DEFAULT_WRITE_HEAD);
  }, []);

  return useMemo(
    () => ({
      writeHead,

      updateProgress,

      updatePosition,

      updateCharacter,

      updateWord,

      updateLine,

      reset,
    }),
    [
      writeHead,

      updateProgress,

      updatePosition,

      updateCharacter,

      updateWord,

      updateLine,

      reset,
    ]
  );
}
