import type { ParagraphLayout } from './types';

export interface LayoutOptions {
  width: number;

  fontSize: number;

  lineHeight: number;

  letterSpacing: number;
}

export function computeLayout(
  _text: string,
  _options: LayoutOptions
): ParagraphLayout {
  return {
    characters: [],

    words: [],

    lines: [],

    width: 0,

    height: 0,
  };
}
