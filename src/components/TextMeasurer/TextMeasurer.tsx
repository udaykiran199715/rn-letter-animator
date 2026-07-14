import { Text } from 'react-native';

import type { TextMeasurerProps } from './types';

export function TextMeasurer({ text }: TextMeasurerProps) {
  return (
    <Text
      style={{
        position: 'absolute',
        opacity: 0,
      }}
    >
      {text}
    </Text>
  );
}
