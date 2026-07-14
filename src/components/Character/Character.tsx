import { memo } from 'react';
import { Text } from 'react-native';

import type { CharacterProps } from './types';

export const Character = memo(
  ({ glyph, x, y, opacity, style }: CharacterProps) => {
    return (
      <Text
        style={[
          {
            position: 'absolute',
            left: x,
            top: y,
            opacity,
          },
          style,
        ]}
      >
        {glyph}
      </Text>
    );
  }
);

Character.displayName = 'Character';
