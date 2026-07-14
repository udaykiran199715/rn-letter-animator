import { forwardRef, useImperativeHandle } from 'react';

import type { LetterAnimatorProps, LetterAnimatorRef } from './types';

export const LetterAnimator = forwardRef<
  LetterAnimatorRef,
  LetterAnimatorProps
>((_props, ref) => {
  useImperativeHandle(ref, () => ({
    play() {},

    pause() {},

    resume() {},

    stop() {},

    reset() {},

    seek() {},

    getState() {
      return 'idle';
    },

    isPlaying() {
      return false;
    },
  }));

  return null;
});

LetterAnimator.displayName = 'LetterAnimator';
