import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { RenderGlyph } from '../../engines/glyph';

export interface ShapedTextRevealProps {
  renderGlyphs: RenderGlyph[];

  visibleGlyphCount: number;

  style?: StyleProp<ViewStyle>;

  textStyle?: StyleProp<TextStyle>;
}
