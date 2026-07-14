import { useMemo } from 'react';

import { createGlyphs } from '../engines/glyph';

import type { Glyph } from '../engines/glyph';
import type { LetterAnimatorProps } from '../components/LetterAnimator/types';

export interface LetterAnimatorEngine {
  glyphs: Glyph[];
  progress: number;
}

export function useLetterAnimatorEngine(
  props: LetterAnimatorProps
): LetterAnimatorEngine {
  const glyphs = useMemo(() => {
    return createGlyphs(props.text);
  }, [props.text]);

  return {
    glyphs,
    progress: 1,
  };
}
