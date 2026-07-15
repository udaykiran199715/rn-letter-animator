import { useEffect, useMemo } from 'react';

import { createGlyphs } from '../engines/glyph';

import type { LetterAnimatorProps } from '../components/LetterAnimator/types';
import { useTimelineController } from '../timeline/useTimelineController';
import type { TimelineController } from '../timeline';
import type { RenderGlyph } from '../engines/glyph';
import { useCharacterLayout } from './useCharacterLayout';
import { useWriteHead, type WriteHead } from './useWriteHead';

export interface LetterAnimatorEngine {
  renderGlyphs: RenderGlyph[];

  progress: number;

  visibleGlyphCount: number;

  timeline: TimelineController;

  writeHead: WriteHead;
}

export function useLetterAnimatorEngine(
  props: LetterAnimatorProps
): LetterAnimatorEngine {
  const glyphs = useMemo(() => {
    return createGlyphs(props.text);
  }, [props.text]);

  const timeline = useTimelineController();

  const visibleGlyphCount = Math.min(
    glyphs.length,
    Math.floor(timeline.progress * glyphs.length)
  );

  const renderGlyphs = useCharacterLayout(glyphs, visibleGlyphCount);

  const currentGlyphIndex = Math.max(
    0,
    Math.min(visibleGlyphCount - 1, renderGlyphs.length - 1)
  );

  const currentGlyph = renderGlyphs[currentGlyphIndex];

  const { writeHead, updateProgress, updatePosition, updateCharacter } =
    useWriteHead();

  useEffect(() => {
    updateProgress(timeline.progress);

    if (!currentGlyph) {
      return;
    }

    updatePosition(currentGlyph.x, currentGlyph.y);

    updateCharacter(currentGlyph.index);
  }, [
    timeline.progress,
    currentGlyph,
    updateProgress,
    updatePosition,
    updateCharacter,
  ]);
  return {
    renderGlyphs,
    progress: timeline.progress,
    visibleGlyphCount,
    timeline,
    writeHead,
  };
}
