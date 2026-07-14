export interface WordBoundary {
  word: string;

  start: number;

  end: number;
}

export function computeWordBoundaries(content: string): WordBoundary[] {
  const boundaries: WordBoundary[] = [];

  const words = content.matchAll(/\S+/g);

  for (const match of words) {
    boundaries.push({
      word: match[0],
      start: match.index ?? 0,
      end: (match.index ?? 0) + match[0].length - 1,
    });
  }

  return boundaries;
}
