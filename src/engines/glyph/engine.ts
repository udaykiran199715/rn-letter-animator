import { computeWordBoundaries } from '../../parser';
import { splitContent } from '../../parser';

import type { Glyph } from './types';

export function createGlyphs(text: string): Glyph[] {
  const graphemes = splitContent(text);

  const words = computeWordBoundaries(text);

  return graphemes.map((value, index) => {
    let wordIndex = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (!word) {
        continue;
      }

      if (index >= word.start && index <= word.end) {
        wordIndex = i;
        break;
      }
    }

    return {
      index,
      value,

      characterIndex: index,

      wordIndex,

      lineIndex: null,
    };
  });
}
