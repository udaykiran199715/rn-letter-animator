import { useMemo } from 'react';

import type { Glyph, RenderGlyph } from '../engines/glyph';

const CHARACTER_WIDTH = 14;
const LINE_HEIGHT = 24;

export function useCharacterLayout(
  glyphs: Glyph[],
  visibleGlyphCount: number
): RenderGlyph[] {
  return useMemo(() => {
    let x = 0;
    let y = 0;

    return glyphs.map((glyph) => {
      if (glyph.value === '\n') {
        x = 0;
        y += LINE_HEIGHT;
      }

      const renderGlyph: RenderGlyph = {
        index: glyph.index,
        value: glyph.value,
        x,
        y,
        opacity: glyph.index < visibleGlyphCount ? 1 : 0,
      };

      x += CHARACTER_WIDTH;

      return renderGlyph;
    });
  }, [glyphs, visibleGlyphCount]);
}
