import { View } from 'react-native';

import { Character } from '../Character';

import type { ShapedTextRevealProps } from './types';

export function ShapedTextReveal({
  glyphs,
  visibleGlyphCount,
  style,
  textStyle,
}: ShapedTextRevealProps) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        style,
      ]}
    >
      {glyphs.map((glyph) => (
        <Character
          key={glyph.index}
          glyph={glyph.value}
          x={0}
          y={0}
          opacity={glyph.index < visibleGlyphCount ? 1 : 0}
          style={textStyle}
        />
      ))}
    </View>
  );
}
