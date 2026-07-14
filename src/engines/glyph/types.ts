export interface Glyph {
  /**
   * Sequential glyph index.
   */
  index: number;

  /**
   * Original grapheme.
   */
  value: string;

  /**
   * Character index inside original string.
   */
  characterIndex: number;

  /**
   * Word index.
   */
  wordIndex: number;

  /**
   * Line index.
   *
   * Assigned later by Layout.
   */
  lineIndex: number | null;
}
