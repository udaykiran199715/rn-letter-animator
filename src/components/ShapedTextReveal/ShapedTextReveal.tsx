import { View } from 'react-native';

import { Character } from '../Character';

import type { ShapedTextRevealProps } from './types';

export function ShapedTextReveal({
  renderGlyphs,
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
      {renderGlyphs.map((glyph) => (
        <Character
          key={glyph.index}
          glyph={glyph.value}
          x={glyph.x}
          y={glyph.y}
          opacity={glyph.opacity}
          style={textStyle}
        />
      ))}
    </View>
  );
}
