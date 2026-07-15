import { forwardRef, useImperativeHandle } from 'react';

import { ShapedTextReveal } from '../ShapedTextReveal';
import { useLetterAnimatorEngine } from '../../hooks/useLetterAnimatorEngine';

import type { LetterAnimatorProps, LetterAnimatorRef } from './types';

export const LetterAnimator = forwardRef<
  LetterAnimatorRef,
  LetterAnimatorProps
>((props, ref) => {
  const engine = useLetterAnimatorEngine(props);

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

  return (
    <ShapedTextReveal
      renderGlyphs={engine.renderGlyphs}
      visibleGlyphCount={engine.visibleGlyphCount}
      style={props.style}
      textStyle={props.textStyle}
    />
  );
});

LetterAnimator.displayName = 'LetterAnimator';
