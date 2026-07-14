import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { Glyph } from '../../engines/glyph';

export interface ShapedTextRevealProps {
  glyphs: Glyph[];

  visibleGlyphCount: number;

  style?: StyleProp<ViewStyle>;

  textStyle?: StyleProp<TextStyle>;
}
