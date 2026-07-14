import { View } from 'react-native';

import { Character } from '../Character';

import type { ShapedTextRevealProps } from './types';

export function ShapedTextReveal({
  glyphs,
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
          opacity={1}
          style={textStyle}
        />
      ))}
    </View>
  );
}
