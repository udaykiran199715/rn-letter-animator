import { useMemo } from 'react';

import { createGlyphs } from '../engines/glyph';

import type { Glyph } from '../engines/glyph';
import type { LetterAnimatorProps } from '../components/LetterAnimator/types';
import { useTimelineController } from '../timeline/useTimelineController';
import type { TimelineController } from '../timeline';

export interface LetterAnimatorEngine {
  glyphs: Glyph[];

  progress: number;

  visibleGlyphCount: number;

  timeline: TimelineController;
}

export function useLetterAnimatorEngine(
  props: LetterAnimatorProps
): LetterAnimatorEngine {
  const glyphs = useMemo(() => {
    return createGlyphs(props.text);
  }, [props.text]);

  const timeline = useTimelineController();

  const visibleGlyphCount = Math.floor(timeline.progress * glyphs.length);

  return {
    glyphs,
    progress: timeline.progress,
    visibleGlyphCount,
    timeline,
  };
}
