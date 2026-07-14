export function splitContent(content: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter(undefined, {
      granularity: 'grapheme',
    });

    return Array.from(segmenter.segment(content), (segment) => segment.segment);
  }

  return Array.from(content);
}
