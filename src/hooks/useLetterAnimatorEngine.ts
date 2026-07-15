import { useMemo } from 'react';

import { createGlyphs } from '../engines/glyph';

import type { LetterAnimatorProps } from '../components/LetterAnimator/types';
import { useTimelineController } from '../timeline/useTimelineController';
import type { TimelineController } from '../timeline';
import type { RenderGlyph } from '../engines/glyph';
import { useCharacterLayout } from './useCharacterLayout';
export interface LetterAnimatorEngine {
  renderGlyphs: RenderGlyph[];

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

  const renderGlyphs = useCharacterLayout(glyphs, visibleGlyphCount);

  return {
    renderGlyphs,
    progress: timeline.progress,
    visibleGlyphCount,
    timeline,
  };
}
